import twilio from 'twilio';
import { headers } from 'next/headers';

// Initialize Twilio client
const client = twilio(
    process.env.TWILIOACCOUTNSID,
    process.env.TWILIOAUTHTOKEN
);

// Store OTPs temporarily (in production, use a proper database)
const otpStore = new Map();

export async function POST(request) {
    try {
        const body = await request.json();
        const { phone, action, code } = body;

        // Add proper CORS headers
        const responseHeaders = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Content-Type': 'application/json'
        };

        if (!phone) {
            return new Response(
                JSON.stringify({ error: 'Phone number is required' }), 
                { 
                    status: 400,
                    headers: responseHeaders
                }
            );
        }

        // Format phone number for Twilio
        const formattedPhone = phone.startsWith('+') ? phone : `+91${phone}`;

        if (action === 'send') {
            // Generate a random 4-digit OTP
            const otp = Math.floor(1000 + Math.random() * 9000).toString();
            console.log('Sending OTP:', otp, 'to phone:', formattedPhone); // Debug log
            
            // Store OTP with phone number (with 5-minute expiry)
            otpStore.set(formattedPhone, {
                code: otp,
                expiry: Date.now() + 5 * 60 * 1000 // 5 minutes
            });

            // Send OTP via Twilio SMS
            try {
                const message = await client.messages.create({
                    body: `Your PrimeIdea verification code is: ${otp}. Valid for 5 minutes.`,
                    to: formattedPhone,
                    from: process.env.TWILIO_PHONE_NUMBER
                });
                console.log('Twilio message sent:', message.sid); // Debug log
            } catch (twilioError) {
                console.error('Twilio error:', twilioError);
                return new Response(
                    JSON.stringify({ 
                        error: 'Failed to send SMS',
                        details: twilioError.message 
                    }),
                    { 
                        status: 500,
                        headers: responseHeaders
                    }
                );
            }

            return new Response(
                JSON.stringify({ 
                    status: 'sent',
                    message: 'Verification code sent successfully'
                }),
                { 
                    status: 200,
                    headers: responseHeaders
                }
            );
        }

        if (action === 'verify') {
            if (!code) {
                return new Response(
                    JSON.stringify({ error: 'Verification code is required' }),
                    { 
                        status: 400,
                        headers: responseHeaders
                    }
                );
            }

            const storedOTP = otpStore.get(formattedPhone);

            if (!storedOTP) {
                return new Response(
                    JSON.stringify({
                        status: 'error',
                        message: 'No verification code found or code expired'
                    }),
                    { 
                        status: 400,
                        headers: responseHeaders
                    }
                );
            }

            if (Date.now() > storedOTP.expiry) {
                otpStore.delete(formattedPhone);
                return new Response(
                    JSON.stringify({
                        status: 'error',
                        message: 'Verification code expired'
                    }),
                    { 
                        status: 400,
                        headers: responseHeaders
                    }
                );
            }

            if (storedOTP.code === code) {
                otpStore.delete(formattedPhone); // Clear used OTP
                return new Response(
                    JSON.stringify({
                        status: 'approved',
                        message: 'Phone number verified successfully'
                    }),
                    { 
                        status: 200,
                        headers: responseHeaders
                    }
                );
            }

            return new Response(
                JSON.stringify({
                    status: 'error',
                    message: 'Invalid verification code'
                }),
                { 
                    status: 400,
                    headers: responseHeaders
                }
            );
        }

        return new Response(
            JSON.stringify({ error: 'Invalid action' }),
            { 
                status: 400,
                headers: responseHeaders
            }
        );

    } catch (error) {
        console.error('Verification error:', error);
        return new Response(
            JSON.stringify({
                error: 'Error processing verification',
                message: error.message
            }),
            { 
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            }
        );
    }
}

// Add OPTIONS handler for CORS preflight requests
export async function OPTIONS(request) {
    return new Response(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '86400'
        }
    });
}

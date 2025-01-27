const features = [
  {
    name: 'Training & Development',
    description: 'Ongoing training opportunities to help you refine your skills and stay up-to-date with industry trends.',
  },
  {
    name: 'Marketing & Branding',
    description: 'Access to pre-built marketing materials, digital campaigns, and co-branding opportunities to elevate your visibility.',
  },
  {
    name: 'Client Referrals',
    description: 'We\'ll help you expand your client base through strategic introductions and referrals.',
  },
  {
    name: 'Compliance & Risk Management',
    description: 'Our compliance team provides the guidance you need to stay compliant in a constantly evolving regulatory environment.',
  },
]

const HowWeSupport = () => {
    return (
        <div className="bg-white py-16">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold tracking-tight text-gray-900 sm:text-4xl">
                        How We Support Your Growth
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Partnering with us means you don&apos;t have to navigate the complexities of the financial world alone.
                    </p>
                </div>

                <div className="relative">
                    {features.map((feature, index) => (
                        <div key={feature.name} className="relative pl-16 mb-12 last:mb-0">
                            {/* Connector Line */}
                            {index !== features.length - 1 && (
                                <div className="absolute left-[1.875rem] top-[2.5rem] bottom-[-1.5rem] w-px bg-gradient-to-b from-blue-400 to-blue-100" />
                            )}
                            
                            {/* Enhanced Step Number Circle */}
                            <div className="absolute left-0 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white font-bold text-xl shadow-lg shadow-blue-200/50">
                                {index + 1}
                            </div>
                            
                            {/* Enhanced Content */}
                            <div className="p-6 bg-gradient-to-b from-white to-blue-50/30 rounded-lg shadow-md border border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {feature.name}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HowWeSupport;


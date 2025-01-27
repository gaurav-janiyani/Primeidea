import {
    AcademicCapIcon,
    WrenchScrewdriverIcon,
    CogIcon,
    ChartBarIcon,
    UserGroupIcon,
    UsersIcon
} from '@heroicons/react/24/outline';

const BenefitsOfPartnership = () => {
    const benefits = [
        {
            title: "Comprehensive Support",
            description: "Business development, marketing strategies, and ongoing assistance to help you grow and succeed in your practice.",
            icon: AcademicCapIcon
        },
        {
            title: "Advanced Tools & Technology",
            description: "Access cutting-edge financial planning software, reporting tools, and data analytics to enhance client service and efficiency.",
            icon: WrenchScrewdriverIcon
        },
        {
            title: "Customizable Solutions",
            description: "Tailored solutions for retirement, estate planning, investments, and more to meet your clients' specific needs.",
            icon: CogIcon
        },
        {
            title: "Industry-Leading Research",
            description: "Stay informed with comprehensive research and investment insights that keep you ahead of market trends and opportunities.",
            icon: ChartBarIcon
        },
        {
            title: "Client-Focused Resources",
            description: "Access client education materials and resources designed to boost retention, satisfaction, and long-term relationships.",
            icon: UserGroupIcon
        },
        {
            title: "Collaborative Network",
            description: "Connect with a community of professionals who share knowledge, strategies, and ideas to help you grow.",
            icon: UsersIcon
        }
    ];

    return (
        <div className="py-16 bg-[#232D63]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-center text-white mb-12">
                    Benefits of Partnering with Us
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={index}
                                className="relative group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="p-6">
                                    <div className="flex justify-center mb-4">
                                        <Icon className="h-12 w-12 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 text-center">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BenefitsOfPartnership;
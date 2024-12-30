import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, DocumentCurrencyRupeeIcon, DocumentChartBarIcon, DocumentArrowUpIcon, ClipboardDocumentCheckIcon, ClipboardDocumentListIcon, DocumentTextIcon  } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Financial Planning',
    description:
      'Develop a comprehensive financial plan to achieve your short-term and long-term financial goals with expert guidance.',
    icon: DocumentArrowUpIcon,
  },
  {
    name: 'Wealth Management',
    description:
      'Strategically manage and grow your wealth through investment solutions, diversification, and personalized financial strategies for optimal returns.',
    icon: DocumentCurrencyRupeeIcon,
  },
  {
    name: 'Retirement Planning',
    description:
      'Create a tailored retirement strategy to ensure financial independence and security during your retirement years, with expert advice.',
    icon: DocumentChartBarIcon,
  },
  {
    name: 'Legacy & Inheritance Planning',
    description:
      'Ensure your assets are passed down efficiently and according to your wishes, with personalized legacy and inheritance strategies.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: 'Tax Planning & Saving',
    description:
      'Optimize your tax strategies to reduce liabilities, increase savings, and maximize your financial potential with expert advice.',
    icon: ClipboardDocumentListIcon,
  },
  {
    name: 'Insurance Planning',
    description:
      'Protect your financial well-being and family’s future with customized insurance plans tailored to your specific needs and risks.',
    icon: DocumentTextIcon,
  },
];


export default function HowFinancialAdvisorHelp() {
  return (
    <div className="bg-white py-12 2xl:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          {/* <h2 className="text-base/7 font-semibold text-indigo-600">Deploy faster</h2> */}
          <p className="mb-4 text-pretty !leading-[120%] text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-balance capitalize">
            How can our financial <br/> advisor help you?
          </p>
          <p className="text-lg/8 text-gray-600">
            Receive expert guidance to navigate investments, optimize savings, and plan for a secure financial future tailored to your goals.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base sm:text-lg font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-[#293c7d]">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

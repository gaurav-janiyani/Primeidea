import FadeUpOneByOneAnimation from "@/animations/FadeUpOneByOneAnimation";
import Image from "next/image";


const WealthCreationPreservation = () => {
    return (
        <section>
            <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4 py-12 bg-[#F6FDFF]">
                <h2  className="text-[28px] 2xl:text-[32px] font-light mb-6 text-[#2D2D2D] text-center leading-[130%]">
                    <FadeUpOneByOneAnimation>
                        At Prime Idea, we offer a balanced approach to <br /> <strong>Wealth Preservation and Wealth Creation.</strong>
                    </FadeUpOneByOneAnimation>
                </h2>
                <div className="">
                    <div className="flex justify-between">
                        <div className="w-[calc(50%-10px)] px-6 py-6 pb-10 bg-[#fff] rounded-tl-[40px] rounded-tr-[40px] border-2 border-b-0 border-[#cccccc75] relative">
                            <FadeUpOneByOneAnimation className="flex relative z-10">
                                <Image src="/images/home/icons/wealth-preservation.png" width={120} height={120} alt="Wealth Preservation" className="aspect-square	min-w-[100px] mr-4 h-full" />
                                <div className="">
                                    <h3 className="text-[#293C7D] text-xl font-bold mb-1" >Wealth Preservation</h3>
                                    <p className="text-[14px] font-semibold">
                                    At Prime Idea Ventures, we focus on strategies that protect your wealth while fostering sustained growth and generational impact. Discover our tailored services to build a legacy you can rely on.
                                    </p>
                                </div>
                            </FadeUpOneByOneAnimation>
                            <div className="absolute bottom-[-2px] left-0 h-[40px] w-[calc(100%+35px)] bg-white after:content-[''] after:absolute after:bottom-[0] after:right-[-35px] after:w-[70px] after:h-[70px] after:border-l-2 after:border-b-2 after:bg-[#F6FDFF] after:border-[#cccccc75] after:rounded-bl-[40px]"></div>
                        </div>
                        <div className="w-[calc(50%-10px)] px-6 py-6   bg-[#fff] h-full rounded-[40px] border-2 border-[#cccccc75] z-10">
                            <FadeUpOneByOneAnimation className="flex relative z-10">
                                <Image src="/images/home/icons/wealth-preservation.png" width={120} height={120} alt="Wealth Creation" className="aspect-square	min-w-[100px] mr-4 h-full" />
                                <div className="">
                                    <h3 className="text-[#293C7D] text-xl font-bold mb-1" >Wealth Creation</h3>
                                    <p className="text-[14px] font-semibold">
                                        Strategic advisory and personalized investment plans thoughtfully designed to grow your wealth with precision, insight, and long-term vision.
                                    </p>
                                </div>
                            </FadeUpOneByOneAnimation>
                        </div>
                    </div>
                    <div className="flex justify-between bg-[#fff]  p-4 py-6 rounded-[40px]  rounded-tl-[0px] border-2 border-[#cccccc75]">
                        <div className="w-1/4 px-2">
                        <a
                            href="/research-based-wealth-management"
                            className="relative rounded-[12px] shadow-[0px_0px_4px_0px_#00000040] inline-block h-full w-full cursor-pointer"
                        >
                            <Image
                            src="/images/header/wealth-preservation/RBWM.png"
                            width={425}
                            height={329}
                            alt="Research Based Wealth Management"
                            className="rounded-[12px] w-full h-full"
                            />
                            <div className="absolute top-0 left-0 p-5">
                            <FadeUpOneByOneAnimation>
                            <h2 className="text-xl font-bold mb-3">
                                Research Based Wealth Management
                            </h2>
                            <p className="max-w-[240px] text-[14px]">
                                A customized investment plan from our experts
                                empowers you to grow your wealth strategically,
                            </p>
                            </FadeUpOneByOneAnimation>
                            </div>
                        </a>
                        </div>
                        <div className="w-1/4 px-2">
                        <a
                            href="/retirement-planning"
                            className="relative rounded-[12px] shadow-[0px_0px_4px_0px_#00000040] inline-block h-full w-full cursor-pointer"
                        >
                            <Image
                            src="/images/header/wealth-preservation/Retirement_PLANING.png"
                            width={282}
                            height={253}
                            alt="Dream Retirement Planning"
                            className="rounded-[12px] w-full h-full"
                            />
                            <div className="absolute top-0 left-0 p-5">
                            <FadeUpOneByOneAnimation>
                            <h2 className="text-xl font-bold mb-3">
                                Dream Retirement Planning
                            </h2>
                            <p className="max-w-[240px] text-[14px]">
                                A customized investment plan from our experts
                                empowers you to grow your wealth strategically,
                            </p>
                            </FadeUpOneByOneAnimation>
                            </div>
                        </a>
                        </div>
                        <div className="w-1/4 px-2">
                        <a
                            href="/legacy-inheritance-planning"
                            className="relative rounded-[12px] shadow-[0px_0px_4px_0px_#00000040] inline-block h-full w-full cursor-pointer"
                        >
                            <Image
                            src="/images/header/wealth-preservation/legacy.png"
                            width={289}
                            height={253}
                            alt="legacy & Inheritance Planning"
                            className="rounded-[12px] w-full h-full"
                            />
                            <div className="absolute top-0 left-0 p-5">
                            <FadeUpOneByOneAnimation>
                            <h2 className="text-xl font-bold mb-3">
                                legacy & Inheritance Planning
                            </h2>
                            <p className="max-w-[240px] text-[14px]">
                                A customized investment plan from our experts
                                empowers you to grow your wealth strategically,
                            </p>
                            </FadeUpOneByOneAnimation>
                            </div>
                        </a>
                        </div>
                        <div className="w-1/4 px-2">
                        <a
                            href="/tax-planning-savings"
                            className="relative rounded-[12px] shadow-[0px_0px_4px_0px_#00000040] inline-block h-full w-full cursor-pointer"
                        >
                            <Image
                            src="/images/header/wealth-preservation/tax-planning.png"
                            width={284}
                            height={254}
                            alt="Tax Planning & Savings"
                            className="rounded-[12px] w-full h-full"
                            />
                            <div className="absolute top-0 left-0 p-5">
                            <FadeUpOneByOneAnimation>
                            <h2 className="text-xl font-bold mb-3">
                                Tax Planning & Savings
                            </h2>
                            <p className="max-w-[240px] text-[14px]">
                                A customized investment plan from our experts
                                empowers you to grow your wealth strategically,
                            </p>
                            </FadeUpOneByOneAnimation>
                            </div>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WealthCreationPreservation;
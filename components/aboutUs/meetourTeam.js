import Image from "next/image";

const MeetOurTeam = () => { 
    return (
        <section>
            <div className="py-8">
                <div className="2xl:max-w-[1320px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-2">
                    <div className="flex justify-between mb-4">
                        <h2 className="text-3xl">
                            Meet the <br/>
                            counsultation team 
                        </h2>
                        <p className="text-xl max-w-[540px]">
                            Explore our diverse case studies showcasing how our financial consultation services have enabled businesses to overcome challenges and achieve their full potential.
                        </p>
                        <a href="" className="font-semibold underline-offset-8 px-2 text-[#293C7D]s">
                            Join our team
                        </a>
                    </div>
                    <div className="flex mx-[-10px]">
                        <div className="px-[10px] text-center">
                            <Image src="/images/about-us/meet-our-team/1.png" width={314} height={447} alt="1" className="mb-2" />
                            <h2 className="text-2xl font-semibold mb-2 text-[#222222]">
                                Aman Jeoy
                            </h2>
                            <h3 className="text-lg font-medium text-[#6E6E71]">
                                Co-ordinator
                            </h3>
                        </div>
                        <div className="px-[10px] text-center">
                            <Image src="/images/about-us/meet-our-team/2.png" width={314} height={447} alt="2" className="mb-2" />
                            <h2 className="text-2xl font-semibold mb-2 text-[#222222]">
                                Aman Jeoy
                            </h2>
                            <h3 className="text-lg font-medium text-[#6E6E71]">
                                Co-ordinator
                            </h3>
                        </div>
                        <div className="px-[10px] text-center">
                            <Image src="/images/about-us/meet-our-team/3.png" width={314} height={447} alt="3" className="mb-2" />
                            <h2 className="text-2xl font-semibold mb-2 text-[#222222]">
                                Aman Jeoy
                            </h2>
                            <h3 className="text-lg font-medium text-[#6E6E71]">
                                Co-ordinator
                            </h3>
                        </div>
                        <div className="px-[10px] text-center">
                            <Image src="/images/about-us/meet-our-team/4.png" width={314} height={447} alt="4" className="mb-2" />
                            <h2 className="text-2xl font-semibold mb-2 text-[#222222]">
                                Aman Jeoy
                            </h2>
                            <h3 className="text-lg font-medium text-[#6E6E71]">
                                Co-ordinator
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
 }

 export default MeetOurTeam;
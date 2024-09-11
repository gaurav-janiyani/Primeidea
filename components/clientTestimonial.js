import Image from "next/image";

const ClientTestimonial = () => { 
    return (
        <section>
        <div className="bg-[#F6FDFF] py-16 sm:py-24">
          <div className="max-w-[1320px] mx-auto px-2">
            <h2 className="text-xl font-normal tracking-tight text-[#04102A] sm:text-3xl mt-0 mb-10 text-center">
              What our clients say
            </h2>
            <div className="bg-[#C6E8FF] flex rounded-lg">
              <div className="w-[82%] border-r border-r-[#B2B2B2] py-12 px-10">
                <div className="flex justify-between mx-[-3%]">
                  <div className="w-[33%] px-[3%] border-r border-r-[#B2B2B2]">
                    <Image
                      src="/images/icons/comma.png"
                      width={61}
                      height={43}
                      alt="Commas"
                      className="mb-6"
                    />
                    <p className="mb-10 text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                    </p>
                    <div>
                      <h3 className="font-bold text-2xl mb-1">Mark Henry</h3>
                      <h4 className="font-normal text-lg">
                        Developer, Oklavery
                      </h4>
                    </div>
                  </div>
                  <div className="w-[33%] px-[3%] border-r border-r-[#B2B2B2]">
                    <Image
                      src="/images/icons/comma.png"
                      width={61}
                      height={43}
                      alt="Commas"
                      className="mb-6"
                    />
                    <p className="mb-10 text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                    </p>
                    <div>
                      <h3 className="font-bold text-2xl mb-1">Mark Henry</h3>
                      <h4 className="font-normal text-lg">
                        Developer, Oklavery
                      </h4>
                    </div>
                  </div>
                  <div className="w-[33%] px-[3%]">
                    <Image
                      src="/images/icons/comma.png"
                      width={61}
                      height={43}
                      alt="Commas"
                      className="mb-6"
                    />
                    <p className="mb-10 text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                    </p>
                    <div>
                      <h3 className="font-bold text-2xl mb-1">Mark Henry</h3>
                      <h4 className="font-normal text-lg">
                        Developer, Oklavery
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[18%] p-10 text-center">
                <div className="text-[22px] font-normal">Average Rating</div>
                <span className="my-3 text-6xl font-semibold block">4.9</span>
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src="/images/icons/stars.png"
                    width={100}
                    height={22}
                    alt="Ratings"
                  />
                </div>
                <span className="mt-2 max-w-[80%] mx-auto block">
                  (30+) Customer review
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
 }

 export default ClientTestimonial;
import Image from "next/image";

const GiftCitySection = () => {
  return (
    <section>
      <div className="bg-[#F6FDFF] py-16">
        <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="w-[46%]">
              <Image
                src="/images/tax-planning/giftcity.png"
                width={565}
                height={643}
                alt="Gift City Tax Advantages"
                className="w-full"
              />
            </div>
            <div className="w-[50%]">
              <h2 className="text-[32px] font-semibold leading-[130%] mb-3">
                GIFT City Tax Advantages
              </h2>
              <h2 className="text-2xl font-medium leading-[130%] mb-3">
                Unlock Significant Tax Benefits by Operating in GIFT City:
              </h2>
              <ul className="text-lg mb-5 list-disc pl-[20px]">
                <li className="mb-3">
                  <strong>100% Income Tax Exemption:</strong> 
                   Enjoy full income tax exemption on profits for 10 years.
                </li>
                <li className="mb-3">
                  <strong>GST Benefits:</strong> Avail zero-rated GST on supplies and services.
                </li>
                <li className="mb-3">
                  <strong>No Stamp Duty:</strong> Save on transaction costs with stamp duty exemptions.
                </li>
                <li className="mb-3">
                  <strong>Exempt from DDT:</strong> Benefit from no Dividend Distribution Tax.
                </li>
                <li className="mb-3">
                  <strong>Lower MAT:</strong> Pay reduced Minimum Alternate Tax rates.
                </li>
                <li className="mb-3">
                  <strong>STT Exemption: </strong> Trade without the burden of Securities Transaction Tax.
                </li>
              </ul>
              <a
                href=""
                className="bg-[#479AD2] text-lg font-bold rounded-md text-white px-6 py-3 inline-flex items-center"
              >
                Know More
                <Image
                  src="/images/icons/arrow-square-right.png"
                  width={21}
                  height={21}
                  alt="Read All"
                  className="ml-2"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftCitySection;

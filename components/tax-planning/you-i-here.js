import Image from "next/image";

const YouIHereSection = () => {
  return (
    <section>
      <div className="bg-[#232D63] py-12">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="flex justify-between">
            <div className="w-[50%] py-2 px-8 border-r border-r-white">
              <div className="w-[50px] h-[50px] p-[8px] bg-white rounded-full mb-4">
                <Image
                  src="/images/icons/users.png"
                  width={50}
                  height={50}
                  alt="Users"
                />
              </div>
              <h3 className="text-[28px] mb-4 text-white">
                You&apos;re Here!
              </h3>
              <p className="text-lg text-white font-medium">
                Beause you took a risk and started a business  to impact lives & ignite prosperity - I love that about you!
              </p>
            </div>
            <div className="w-[50%] py-2 px-8">
              <div className="w-[50px] h-[50px] p-[8px] bg-white rounded-full mb-4">
                <Image
                  src="/images/icons/user.png"
                  width={50}
                  height={50}
                  alt="Users"
                />
              </div>
              <h3 className="text-[28px] mb-4 text-white">
                I’m Here !
              </h3>
              <p className="text-lg text-white font-medium">
                To create a tax strategy that will save you at least Rs 10,00,000/- in taxes this year
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouIHereSection;

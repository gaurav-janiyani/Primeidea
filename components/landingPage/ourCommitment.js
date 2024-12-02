import Image from "next/image";

const OurCommitment = () => {
  return (
    <section>
      <div className="2xl:max-w-[1340px] xl:max-w-[1170px] lg:max-w-[1004px] mx-auto px-4 py-12 xl:py-16">
        <div className="flex justify-between flex-col-reverse md:flex-row">
          <div className="w-full md:w-[54%] xl:w-[47%] pr-0 md:pr-8 xl:pr-12">
            <h2 className="text-[28px] md:text-[32px] text-[#222222] mb-2">Our Commitment</h2>
            <p className="mb-2 text-base md:text-lg xl:text-xl">
              At Primeidea, we are dedicated to delivering exceptional wealth
              management services tailored to your unique needs. Our commitment
              includes:
            </p>
            <ul className="text-base md:text-[17px] xl:text-lg">
              <li className="mb-2">
                <strong>Personalized Solutions:</strong>
                We promise customized strategies that align with your financial
                goals and adapt to your evolving needs.
              </li>
              <li className="mb-2">
                <strong>Transparency and Integrity:</strong>
                We maintain transparency in all our dealings and uphold the
                highest standards of integrity.
              </li>
              <li className="mb-2">
                <strong>Ongoing Support:</strong>
                We provide continuous support and regular updates to ensure your
                financial plans stay on track.
              </li>
              <li className="mb-2">
                <strong>Expert Guidance:</strong>
                Our team of experts offers informed, research-driven advice to
                optimize your investment returns and manage risks.
              </li>
              <li className="mb-2">
                <strong>Client-Centric Approach:</strong>
                Your success is our priority. We focus on building lasting
                relationships and delivering solutions that truly benefit you.
              </li>
            </ul>
          </div>
          <div className="w-full md:w-[46%] xl:w-[53%] mb-8">
            <Image
              src="/images/landing/commitment.png"
              width={711}
              height={480}
              alt="Our Commitment"
            />
          </div>
        </div>
      </div>
    </section>
  );
};


export default OurCommitment;

import Image from "next/image";

const OurCommitment = () => {
  return (
    <section>
      <div className="max-w-[1320px] mx-auto px-2 py-16">
        <div className="flex justify-between">
          <div className="w-[47%] pr-12">
            <h2 className="text-[32px] text-[#222222] mb-2">Our Commitment</h2>
            <p className="mb-2 text-xl">
              At Prime Idea, we are dedicated to delivering exceptional wealth
              management services tailored to your unique needs. Our commitment
              includes:
            </p>
            <ul className="text-lg">
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
          <div className="w-[53%]">
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

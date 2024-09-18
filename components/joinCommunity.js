const JoinCommunity = () => { 
    return (
        <section>
        <div className="bg-[#F6FDFF] py-12 sm:py-20">
          <div className="max-w-[1320px] mx-auto px-2">
            <div className="flex justify-between">
              <div className="w-[45%]">
                <h2 className="text-[170px] font-extrabold leading-[100%] bg-[#2f8d46] bg-[url('/images/home/prime-idea-textbg.png')] bg-repeat bg-clip-text text-transparent">
                  PRIME IDEA{" "}
                  <span className="inline-block w-[70px] h-[70px] bg-[url('/images/home/prime-idea-textbg.png')] rounded-[50%]"></span>
                </h2>
              </div>
              <div className="w-[55%]">
                <h3 className="text-xl font-normal tracking-tight text-[#000] sm:text-3xl mt-0 mb-6">
                  Join the community
                </h3>
                <p className="mb-4 text-lg">
                  Be a part of a dynamic network of like-minded individuals and
                  forward-thinking professionals. At Prime Idea, we’re more than
                  just a financial advisory service; we’re a community dedicated
                  to shared success and growth.
                </p>
                <p className="mb-4 text-lg">Connect with us to:</p>
                <ul className="list-disc pl-[20px]">
                  <li className="mb-3 text-lg">
                    <p className="contents">
                      <strong>Access Exclusive Insights:</strong> Stay updated
                      with the latest financial trends and tips.
                    </p>
                  </li>
                  <li className="mb-3 text-lg">
                    <p className="contents">
                      <strong>Engage in Events:</strong> Participate in
                      workshops, webinars, and networking opportunities.
                    </p>
                  </li>
                  <li className="mb-3 text-lg">
                    <p className="contents">
                      <strong>Receive Personalized Support:</strong> Get
                      tailored advice and resources to achieve your financial
                      goals.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
 }

 export default JoinCommunity;
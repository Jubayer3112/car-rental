const CTA = () => {
  return (
    <div>
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
              <div className="flex lg:py-12">
                <img
                  src="https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/fastlane/bmw-individual/2023/bmw-individual-ai-navi-01.jpg"
                  className="w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px] z-[10]"
                  alt="image"
                />
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div className="flex h-full items-center rounded-lg bg-[#ff5030] p-6 text-center text-white lg:pl-12 lg:text-left">
                <div className="lg:pl-12">
                  <h2 className="mb-6 text-3xl font-bold">
                    BMW to prioritise EVs amid Ukraine crisis, chip troubles
                  </h2>
                  <p className="mb-6 pb-2 lg:pb-0">
                    BERLIN, March 16 (Reuters) - BMW cut its car division's 2022
                    profit margin forecast on Wednesday and said it expected the
                    chip crisis to drag on throughout the year, the latest
                    automaker to warn of supply chain disruptions exacerbated by
                    Russia's invasion of Ukraine.
                  </p>
                  <button
                    type="button"
                    className="rounded-full border-2 border-neutral-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Sign up now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CTA;

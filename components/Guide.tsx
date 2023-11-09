import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image 
        src="/camp.svg" 
        alt="camp" 
        width={50} 
        height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          we are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="capitalize bold-40 lg:bold-64 xl:max-w-[390px]">
            guide you to easy path
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            With the TreehouseTreasures app, you'll never wander aimlessly
            again. Our app comes to the rescue with offline maps, ensuring you
            stay on the right path even when there's no internet signal amidst
            the glamping grounds. Gather your pals and loved ones for a
            delightful escapade into the wild, meandering through valleys and
            conquering mountain peaks!
          </p>
        </div>
      </div>
      <div className="flexCenter max-container relative w-full">
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image 
          src="/meter.svg"
          alt="meter"
          width={16}
          height={158}
          className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="capitalize regular-16 text-gray-20">
                  destination
                </p>
                <p className="bold-16 text-green-50">49 mins</p>
              </div>
              <p className="capitalize bold-20 mt-2">alpencamping nenzing</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="capitalize regular-16 text-gray-20">start track</p>
              <h4 className="capitalize bold-20 mt-2 whitespace-nowrap">
                erlebnis resort aufenfeld
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
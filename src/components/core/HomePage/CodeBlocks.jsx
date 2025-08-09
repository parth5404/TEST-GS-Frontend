import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import CTAButton from './CTAButton';

const CodeBlocks = ({
  flexDir,
  heading,
  subHeading,
  ctaBtn1,
  ctaBtn2,
  codeText,
  codeColor,
}) => {
  return (
    <div className={`flex flex-col ${flexDir} my-10 md:my-20 justify-between gap-10`}>
      {/* Section 1 - Left */}
      <div className="w-full md:w-[50%] flex flex-col gap-8">
        {heading}
        <div className="text-base-content font-bold w-[85%] -mt-3">{subHeading}</div>

        <div className="flex mt-7 gap-7">
          <CTAButton active={ctaBtn1.active} linkto={ctaBtn1.linkto}>
            <div className="flex flex-row items-center gap-2">
              {ctaBtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>
          <CTAButton active={ctaBtn2.active} linkto={ctaBtn2.linkto}>
            {ctaBtn2.btnText}
          </CTAButton>
        </div>
      </div>

      {/* Section 2 - Right */}
      <div className="relative w-full md:w-[470px] bg-base-300 bg-opacity-30 backdrop-blur-md border border-base-200 rounded-xl p-4 shadow-lg">
        <div className="absolute top-2 left-2 flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex pt-6">
          <div className="w-[10%] flex flex-col text-center select-none text-base-content font-inter font-bold">
            {Array.from({ length: 11 }, (_, i) => (
              <p key={i + 1}>{i + 1}</p>
            ))}
          </div>

          <div className={`w-[90%] ${codeColor} font-mono pr-2`}>
            <TypeAnimation
              sequence={[codeText, 2000, '']}
              omitDeletionAnimation={true}
              repeat={Infinity}
              style={{
                whiteSpace: 'pre-wrap',
                display: 'block',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;

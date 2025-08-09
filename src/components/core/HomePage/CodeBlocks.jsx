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
    <div className={`flex flex-col ${flexDir} my-20 justify-between gap-12`}>
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <div className="font-playfair-display text-4xl font-bold text-white">{heading}</div>
        <div className="text-base-content text-lg">{subHeading}</div>
        <div className="flex mt-6 gap-6">
          <CTAButton active={ctaBtn1.active} linkto={ctaBtn1.linkto}>
            <div className="flex items-center gap-2">
              {ctaBtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>
          <CTAButton active={ctaBtn2.active} linkto={ctaBtn2.linkto}>
            {ctaBtn2.btnText}
          </CTAButton>
        </div>
      </div>
      <div className="relative w-full md:w-1/2 bg-base-200 bg-opacity-20 backdrop-blur-lg border border-base-300 rounded-2xl p-4 shadow-2xl">
        <div className="absolute top-3 left-3 flex gap-2">
          <div className="w-3.5 h-3.5 rounded-full bg-red-500"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-yellow-500"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-green-500"></div>
        </div>
        <div className="flex pt-8">
          <div className="w-[10%] flex flex-col text-center select-none text-base-content font-mono font-bold">
            {Array.from({ length: 10 }, (_, i) => (
              <p key={i + 1}>{i + 1}</p>
            ))}
          </div>
          <div className={`w-[90%] ${codeColor} font-mono`}>
            <TypeAnimation
              sequence={[codeText, 2000, '']}
              omitDeletionAnimation={true}
              repeat={Infinity}
              style={{ whiteSpace: 'pre-wrap', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;

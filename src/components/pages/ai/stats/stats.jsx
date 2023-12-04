import clsx from 'clsx';
import Image from 'next/image';

import Container from 'components/shared/container/container';
import GradientLabel from 'components/shared/gradient-label';

import githubBg from './images/github-bg.jpg';
import github from './images/github.svg';
import hnswBg from './images/hnsw-bg.jpg';
import scaleBg from './images/scale-bg.jpg';

const GitHubCard = () => (
  <div className="relative card flex flex-col items-center overflow-hidden rounded-xl bg-gray-new-8 pb-[30px] pt-5 xl:pb-5 xl:pt-4 lg:py-6 sm:pb-8 sm:pt-7">
    <Image
      className="absolute inset-0 h-full w-full rounded-xl object-cover"
      src={githubBg}
      width={287}
      height={202}
      alt=""
      sizes="(max-width: 768px) 50vw, 100vw"
      quality={95}
    />
    <img
      className="relative z-10 xl:h-[92px] xl:w-[92px] lg:h-16 lg:w-16 sm:h-[92px] sm:w-[92px]"
      src={github}
      width={120}
      height={120}
      alt=""
      loading="lazy"
    />
    <span className="relative z-10 mt-3.5 text-lg font-medium leading-none xl:mt-1.5 lg:text-[15px] sm:mt-4 sm:text-base">
      Fully open-source
    </span>
  </div>
);

// eslint-disable-next-line react/prop-types
const ScaleCard = ({ className, ...props }) => (
  <div
    className={clsx(
      'relative overflow-hidden rounded-xl bg-gray-new-8 py-[38px] xl:py-7 lg:py-[34px]',
      className
    )}
    {...props}
  >
    <Image
      className="absolute inset-0 h-full w-full rounded-xl object-cover"
      src={scaleBg}
      width={287}
      height={257}
      alt=""
    />
    <div className="relative z-10 flex flex-col items-center justify-center">
      <span className="text-2xl leading-none xl:text-lg lg:text-base">Scales to</span>
      <span className="mt-2 text-[96px] font-medium leading-none tracking-[-0.05em] text-green-45 xl:text-[72px] lg:mt-1.5 lg:text-[56px] md:text-[52px] sm:text-6xl xs:text-5xl">
        75K+
      </span>
      <span className="mt-1 text-[32px] leading-none tracking-extra-tight text-green-45 xl:text-2xl lg:mt-0.5 lg:text-xl sm:mt-1">
        Txn's Per Second
      </span>
    </div>
  </div>
);

// eslint-disable-next-line react/prop-types
const IVFCard = ({ className, ...props }) => (
  <div
    className={clsx(
      'flex flex-col items-center rounded-2xl bg-[linear-gradient(225deg,#9FD_6.87%,#6FC_24.88%,#00E599_85.59%)] pb-[43px] pt-8 text-black-new xl:pb-[30px] xl:pt-6 lg:pb-[26px] lg:pt-[22px] sm:pb-11 sm:pt-10',
      className
    )}
    {...props}
  >
    <span className="text-bg-clipped space-x-2 bg-[linear-gradient(180deg,#0C0D0D_19.17%,rgba(12,13,13,0.80)67.50%)] leading-none">
      <span className="text-[120px] font-medium tracking-[-0.08em] xl:text-[88px] lg:text-[72px] sm:text-[76px]">
        80
      </span>
      <span className="text-[80px] font-bold xl:text-[60px] lg:text-4xl sm:text-[44px]">x</span>
    </span>
    <span className="mt-2 text-xl font-medium leading-none tracking-extra-tight xl:text-lg lg:mt-1 lg:text-sm sm:mt-2.5">
      Faster than Ethereum
    </span>
  </div>
);

const HNSWCard = () => (
  <div className="relative flex items-center justify-center overflow-hidden rounded-2xl bg-gray-new-8">
    <Image
      className="absolute inset-0 h-full w-full rounded-2xl object-cover"
      src={hnswBg}
      width={287}
      height={236}
      alt=""
      sizes="(max-width: 768px) 50vw, 100vw"
      quality={95}
    />
    <span className="text-bg-clipped relative z-10 max-w-[127px] bg-[linear-gradient(180deg,#FFF_28.26%,#BFBFBF_100%)] text-center text-[44px] font-medium leading-[1.05] tracking-extra-tight xl:max-w-[93px] xl:text-[32px] lg:text-2xl sm:text-[28px]">
      Uses EVM
    </span>
  </div>
);

const Stats = () => (
  <section className="stats safe-paddings mt-40 xl:mt-[102px] lg:mt-[90px] md:mt-1">
    <Container className="relative z-20 grid grid-cols-12" size="medium">
      <div className="col-span-full flex flex-col items-center">
        <GradientLabel>Fast and Accurate</GradientLabel>
        <h2 className="mt-5 max-w-[660px] text-center text-5xl font-medium leading-none tracking-extra-tight xl:mt-4 xl:max-w-[610px] xl:text-[44px] lg:max-w-[550px] lg:text-4xl sm:max-w-[440px] sm:text-[32px]">
          Scale your dApps for millions of users with Nexis Network
        </h2>
      </div>
      <div className="xl:grid-col-12 col-span-10 col-start-2 mt-12 grid grid-cols-[23.5%_auto_23.5%] gap-x-7 xl:col-span-full xl:col-start-1 xl:mt-10 xl:grid-cols-12 xl:gap-x-6 lg:gap-4 sm:mt-8">
        <div className="grid gap-y-7 xl:col-span-3 xl:gap-y-6 lg:gap-y-4 sm:col-span-full sm:grid-cols-2 sm:gap-x-4">
          <GitHubCard />
          <ScaleCard className="sm:hidden" />
          <IVFCard className="hidden sm:flex" aria-hidden />
        </div>
        <div className="flex flex-col gap-y-7 xl:col-span-6 xl:gap-y-6 lg:gap-y-4 sm:col-span-full">
          <div className="rounded-xl bg-gray-new-8 px-6 lg:px-4 sm:px-5">
            <h3 className="text-20 pb-5 pt-4 text-xl leading-none tracking-extra-tight xl:pb-4 xl:text-lg lg:py-3 lg:text-sm sm:pb-[18px] sm:pt-4 sm:text-base">
              Speed up your transactions with Nexis Network
            </h3>
            <div className="border-t border-dashed border-gray-new-15 pb-7 pt-6 xl:py-4 lg:pb-4 lg:pt-3 sm:pb-6 sm:pt-5">
              <p className="text-[13px] uppercase leading-none tracking-wider text-gray-new-60 xl:text-xs lg:text-[10px] sm:text-[11px]">
                Transaction execution time at 99% recall
              </p>
              <div className="mt-5 flex items-center space-x-2.5 xl:mt-4 lg:mt-3 sm:mt-5">
                <span className="inline-block h-8 w-[5%] rounded bg-[linear-gradient(90deg,rgba(0,229,153,0.20)0%,#00E599_67.45%,#4DFFC4_93.23%)] xl:h-7 sm:h-8" />
                <span className="text-[13px] leading-none text-gray-new-90 xl:text-xs lg:text-[10px]">
                  400ms
                </span>
              </div>
              <div className="mt-5 flex items-center space-x-2.5 xl:mt-3 lg:mt-2.5 sm:mt-4">
                <span className="inline-block h-8 w-[93.5%] rounded bg-[linear-gradient(90deg,rgba(255,255,255,0.20)0%,#FFF_100%)] opacity-60 xl:h-7 sm:h-8" />
                <span className="text-[13px] leading-none text-gray-new-90 xl:text-xs  lg:text-[10px]">
                  1.2s
                </span>
              </div>
              <div className="mt-6 flex items-center space-x-5 text-sm xl:mt-4 lg:mt-2 lg:space-x-4 lg:text-xs sm:mt-5 sm:space-x-5 sm:text-[13px]">
                <span className="flex items-center space-x-1.5 leading-none">
                  <span className="inline-block h-2 w-2 rounded-full bg-green-45 lg:h-1.5 lg:w-1.5" />
                  <span>Native Chain</span>
                </span>
                <span className="flex items-center space-x-1.5 leading-none">
                  <span className="inline-block h-2 w-2 rounded-full bg-white/60 lg:h-1.5 lg:w-1.5" />
                  <span>EVM Chain</span>
                </span>
              </div>
            </div>
          </div>
          <div className="grow rounded-xl bg-gray-new-8 px-7 pb-7 pt-6 xl:px-6 xl:pb-5 xl:pt-4 lg:p-5 lg:pb-6 sm:pb-5">
            <p className="text-[26px] font-light leading-snug tracking-extra-tight xl:max-w-[390px] xl:text-lg lg:text-base sm:max-w-none sm:text-lg">
              Nexis Network brings <mark className="bg-transparent text-green-45">99x the speed</mark>{' '}
              for <mark className="bg-transparent text-green-45">1/100 the price</mark> to build the next
              generation of Web3 applications for healthcare, DeFi, and enterprises around the world.
            </p>
          </div>
        </div>
        <div className="grid grid-rows-[auto,1fr] gap-y-7 xl:col-span-3 xl:gap-y-6 lg:gap-y-4 sm:col-span-full sm:grid-cols-2 sm:gap-x-4 sm:gap-y-0">
          <IVFCard className="sm:hidden" />
          <ScaleCard className="hidden sm:block" aria-hidden />
          <HNSWCard />
        </div>
      </div>
    </Container>
  </section>
);

export default Stats;

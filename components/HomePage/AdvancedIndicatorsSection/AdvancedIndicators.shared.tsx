import MacroChart from "@/components/HomePage/AdvancedIndicatorsSection/Charts/Macro/MacroChart";
import FinancialChart from "@/components/HomePage/AdvancedIndicatorsSection/Charts/Financial/FinancialChart";
import AdvancedChart from "./Charts/Advanced/AdvancedChart";
import TradingChart from "./Charts/Trading/TradingChart";

export const ADVANCED_INDICATORS_CARDS = [
  {
    text: (
      <>
        Follow <br />
        <strong className='font-[family-name:var(--font-transducer-regular)]'>
          macroeconomic
        </strong>
        <br />
        <strong className='font-[family-name:var(--font-transducer-regular)]'>
          indicators
        </strong>
        <br />
        to stay informed.
      </>
    ),
    number: "01",
    angle: -40,
    animationProps: {
      y: [0, -10, 0],
      duration: 4,
      delay: 0,
    },
    modalContent: {
      component: (
        <div className='flex flex-col gap-8 justify-between text-white h-[410px] min-w-[300px] py-2 pb-0'>
          <h2 className='text-xl pb-3 pl-4 font-bold border-b-2 border-foreground'>
            Macroeconomic Indicators
          </h2>
          <MacroChart />
        </div>
      ),
    },
  },
  {
    text: (
      <>
        Interactive <br />
        <strong className='font-[family-name:var(--font-transducer-regular)]'>
          business
        </strong>
        <br />
        <strong className='font-[family-name:var(--font-transducer-regular)]'>
          metrics.
        </strong>
      </>
    ),
    number: "02",
    angle: -20,
    animationProps: {
      y: [0, -15, 0],
      duration: 4.5,
      delay: 0.5,
    },
    modalContent: {
      component: (
        <div className='flex flex-col gap-8 justify-between text-white h-[410px] min-w-[300px] py-2 pb-0'>
          <h2 className='text-xl pb-3 pl-4 font-bold border-b-2 border-foreground'>
            Financial Indicators
          </h2>
          <FinancialChart />
        </div>
      ),
    },
  },
  {
    text: (
      <>
        Unlock new <br />
        possibilities in
        <br />
        your financial <br />
        <strong className='font-[family-name:var(--font-transducer-regular)]'>
          strategy.
        </strong>
      </>
    ),
    number: "03",
    angle: 0,
    animationProps: {
      y: [0, -20, 0],
      duration: 4,
      delay: 1,
    },
    modalContent: {
      component: (
        <div className='flex flex-col gap-8 justify-between text-white h-[410px] min-w-[300px] py-2 pb-0'>
          <h2 className='text-xl pb-3 pl-4 font-bold border-b-2 border-foreground'>
            Advanced Indicators
          </h2>
          <AdvancedChart />
        </div>
      ),
    },
  },
  {
    text: (
      <>
        <strong className='font-[family-name:var(--font-transducer-regular)]'>
          Trading
        </strong>{" "}
        <br />
        <strong className='font-[family-name:var(--font-transducer-regular)]'>
          charts ready
        </strong>{" "}
        <br />
        to analyze.
      </>
    ),
    number: "04",
    angle: 20,
    animationProps: {
      y: [0, -25, 0],
      duration: 5.5,
      delay: 1.5,
    },
    modalContent: {
      component: (
        <div className='flex flex-col gap-8 justify-between text-white h-[410px] min-w-[300px] py-2 pb-0'>
          <h2 className='text-xl pb-3 pl-4 font-bold border-b-2 border-foreground'>{`Trading Indicators - Apple Inc.`}</h2>
          <TradingChart />
        </div>
      ),
    },
  },
  {
    text: (
      <>
        Your market <br />
        <strong className='font-[family-name:var(--font-transducer-regular)]'>
          evaluations,
        </strong>{" "}
        <br />
        clearer and
        <br />
        more focused.
      </>
    ),
    number: "05",
    angle: 40,
    animationProps: {
      y: [0, -30, 0],
      duration: 6,
      delay: 2,
    },
    modalContent: {
      component: (
        <div className='flex flex-col gap-8 justify-between text-white h-[410px] min-w-[300px] py-2 pb-0'>
          <h2 className='text-xl pb-3 pl-4 font-bold border-b-2 border-foreground'>
            Multi Block
          </h2>
          <p className='flex items-center justify-center w-full h-full '>
            Take notes, add videos, and create a custom block with the Multi
            Block.
          </p>
        </div>
      ),
    },
  },
];

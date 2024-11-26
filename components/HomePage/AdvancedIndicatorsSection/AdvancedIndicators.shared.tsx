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
          data to keep
        </strong>
        <br />
        of the big picture.
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
        <div className='p-8 bg-zinc-900 text-white min-w-[300px]'>
          <h2 className='text-2xl mb-4'>Macroeconomic Data</h2>
          <p>
            Detailed information about macroeconomic indicators will be
            displayed here.
          </p>
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
        <div className='p-8 bg-zinc-900 text-white min-w-[300px]'>
          <h2 className='text-2xl mb-4'>Business Metrics</h2>
          <p>
            Detailed information about business metrics will be displayed here.
          </p>
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
        <div className='p-8 bg-zinc-900 text-white min-w-[300px]'>
          <h2 className='text-2xl mb-4'>Financial Strategy</h2>
          <p>
            Detailed information about financial strategy will be displayed
            here.
          </p>
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
        <div className='p-8 bg-zinc-900 text-white min-w-[300px]'>
          <h2 className='text-2xl mb-4'>Trading Charts</h2>
          <p>
            Detailed information about trading charts will be displayed here.
          </p>
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
        <div className='p-8 bg-zinc-900 text-white min-w-[300px]'>
          <h2 className='text-2xl mb-4'>Market Evaluations</h2>
          <p>
            Detailed information about market evaluations will be displayed
            here.
          </p>
        </div>
      ),
    },
  },
];

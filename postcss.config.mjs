/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    "tailwindcss",
    [
      "postcss-preset-env",
      {
        stage: 0,
        features: {
          "nesting-rules": true,
          "custom-properties": true,
          "mask-border": true,
        },
      },
    ],
    "autoprefixer",
  ],
};

export default config;

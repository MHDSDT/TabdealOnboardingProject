/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        tabdealTheme: {
          "dark-background": "#1a1e1f",
          "card-background": "#131414",
          white: "#ffffff",
          "light-background": "#fafcfc",
          "input-background": "#f4f4f5",
          "light-glass": "#e5e6e6",
          "dark-glass": "#313335",
          grey: "#999c9f",
          "grey-50": "#f2f2f3",
          "grey-950": "#0c0d0d",
          "grey-100": "#e5e6e6",
          "grey-200": "#caccce",
          "grey-300": "#b0b3b5",
          "grey-400": "#96999c",
          "grey-600": "#636669",
          "grey-700": "#4a4e4f",
          "grey-800": "#2f3233",
          "grey-850": "#232626",
          "grey-900": "#191a1a",
          primary: "#f0ba0b",
          "primary-100": "#fff6d9",
          "primary-200": "#fbe59d",
          "primary-300": "#f8d86d",
          "primary-400": "#f6cb3c",
          "primary-600": "#d9a80b",
          "primary-700": "#b28b09",
          "primary-800": "#8c6d06",
          "primary-900": "#664f04",
          secondary: "#0bb3f0",
          "secondary-100": "#cef0fd",
          "secondary-200": "#9de2fb",
          "secondary-300": "#6dd3f8",
          "secondary-400": "#3cc4f6",
          "secondary-600": "#0991c3",
          "secondary-700": "#076d92",
          "secondary-800": "#044962",
          "secondary-900": "#022431",
          "tertiary-50": "#ede7fe",
          "tertiary-100": "#dccffc",
          "tertiary-200": "#b89efa",
          "tertiary-300": "#956ef7",
          "tertiary-400": "#713df5",
          "tertiary-600": "#3e0ac2",
          "tertiary-700": "#2f0891",
          "tertiary-800": "#1f0561",
          "tertiary-900": "#100330",
          success: "#02c06e",
          "success-100": "#cdfee9",
          "success-200": "#9afed3",
          "success-300": "#68fdbc",
          "success-400": "#35fda6",
          "success-600": "#02ca73",
          "success-700": "#029756",
          "success-800": "#01653a",
          "success-900": "#01321d",
          error: "#f23750",
          "error-100": "#fccfd5",
          "error-200": "#f99fab",
          "error-300": "#f66f81",
          "error-400": "#f33f57",
          "error-600": "#c00c24",
          "error-700": "#90091b",
          "error-800": "#600612",
          "error-900": "#300309",
          "orange-50": "#fef4e6",
          "orange-100": "#fde9ce",
          "orange-200": "#fcd29c",
          "orange-300": "#fabc6b",
          "orange-400": "#f9a639",
          "orange-600": "#e58507",
          "orange-700": "#cc7707",
          "orange-800": "#b26705",
          "orange-900": "#804b05",
          "orange-950": "#331e02",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: true,
    prefix: "",
  },
};

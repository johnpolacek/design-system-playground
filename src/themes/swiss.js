export default {
  name: "Orchid",
  useCustomProperties: true,
  fonts: {
    body: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    heading:
      'Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  fontSizes: [16, 18, 20, 24, 30, 36, 40, 48, 64, 72, 96],
  fontWeights: {
    lite: 200,
    body: 400,
    heading: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  colors: {
    text: "hsl(10, 20%, 20%)",
    background: "hsl(10, 10%, 98%)",
    primary: "hsl(10, 80%, 50%)",
    secondary: "hsl(10, 60%, 50%)",
    highlight: "hsl(10, 40%, 90%)",
    purple: "hsl(250, 60%, 30%)",
    muted: "hsl(10, 20%, 94%)",
    gray: "hsl(10, 20%, 50%)",
  },
  space: [0, 4, 8, 16, 32, 64, 128],
  breakpoints: ["32em", "48em", "64em", "80em"],
  radii: [0, 3, 6],
  shadows: {
    card: "0 0 4px rgba(0, 0, 0, .125)",
    sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
    inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
    none: "none",
  },
}

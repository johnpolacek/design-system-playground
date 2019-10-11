import React, { useState, createContext } from "react"
import { ThemeProvider as ThemeUIProvider } from "theme-ui"
import themes from "../themes"
import ColorScheme from "color-scheme"
import ntc from "ntcjs"

const Themes = themes
const ThemeContext = createContext({ theme: themes.royal })

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.royal)

  const isDarkMode = () => {
    return !isDark(theme.colors.primary)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDarkMode }}>
      <ThemeUIProvider theme={theme}>{children}</ThemeUIProvider>
    </ThemeContext.Provider>
  )
}

const isDark = color => {
  return getLuminance(color) <= 0.7
}

const mainColors = ["primary", "secondary", "background", "text"]

const getMainColors = () => {
  return mainColors
}

const getOtherColors = theme => {
  const otherColors = Object.keys(theme.colors).filter(color => {
    return (
      typeof theme.colors[color] === "string" &&
      mainColors.indexOf(color) === -1 &&
      color !== "transparent" &&
      color !== "white" &&
      theme.colors[color].toLowerCase() !== "#fff" &&
      theme.colors[color] !== "#000" &&
      theme.colors[color].toLowerCase() !== "#ffffff" &&
      theme.colors[color] !== "#000000"
    )
  })
  return otherColors
}

const BrowserFonts = {
  sans: [
    { family: "Arial, sans-serif", name: "Arial" },
    {
      family: "'avenir next', avenir, helvetica, arial, sans-serif",
      name: "Avenir",
    },
    {
      family: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      name: "Helvetica",
    },
    {
      family:
        'Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif',
      name: "Helvetica Based",
    },
    {
      family:
        "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
      name: "System",
    },
    {
      family: 'Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif',
      name: "Tahoma",
    },
    {
      family: '"Trebuchet MS", Verdana, "Verdana Ref", sans-serif',
      name: "Trebuchet",
    },
    {
      family:
        '"Segoe UI", Candara, "Bitstream Vera Sans", "DejaVu Sans", "Bitstream Vera Sans", "Trebuchet MS", Verdana, "Verdana Ref", sans-serif',
      name: "Trebuchet Based",
    },
    { family: 'Verdana, "Verdana Ref", sans-serif', name: "Verdana" },
    {
      family:
        'Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif',
      name: "Verdana Based",
    },
  ],
  serif: [
    {
      family:
        'Baskerville, "Bookman Old Style", "Bitstream Charter", "Nimbus Roman No9 L", Garamond, "Apple Garamond", "ITC Garamond Narrow", "New Century Schoolbook", "Century Schoolbook", "Century Schoolbook L", Georgia, serif',
      name: "Baskerville",
    },
    {
      family:
        '"Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace',
      name: "Courier",
    },
    {
      family:
        'Garamond, "Apple Garamond", "ITC Garamond Narrow", "New Century Schoolbook", "Century Schoolbook", "Century Schoolbook L", Georgia, serif',
      name: "Garamond",
    },
    { family: "Georgia, serif", name: "Georgia" },
    {
      family:
        'Constantia, "Lucida Bright", Lucidabright, "Lucida Serif", Lucida, "DejaVu Serif", "Bitstream Vera Serif", "Liberation Serif", Georgia, serif',
      name: "Georgia Based",
    },
    {
      family:
        '"Palatino Linotype", Palatino, Palladio, "URW Palladio L", "Book Antiqua", Baskerville, "Bookman Old Style", "Bitstream Charter", "Nimbus Roman No9 L", Garamond, "Apple Garamond", "ITC Garamond Narrow", "New Century Schoolbook", "Century Schoolbook", "Century Schoolbook L", Georgia, serif',
      name: "Palatino",
    },
    { family: 'Times, "Times New Roman", serif', name: "Times" },
    {
      family:
        'Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif',
      name: "Times Based",
    },
  ],
}

const WebFonts = {
  sans: [
    "ABeeZee",
    "Abel",
    "Alegreya Sans",
    "Amaranth",
    "Archivo Narrow",
    "Arimo",
    "Armata",
    "Asap",
    "Assistant",
    "Barlow Condensed",
    "Cabin",
    "Cairo",
    "Catamaran",
    "Cuprum",
    "Didact Gothic",
    "Dosis",
    "Economica",
    "Exo",
    "Fira Sans",
    "Fjalla One",
    "Francois One",
    "Gudea",
    "Heebo",
    "Hind Siliguri",
    "Istok Web",
    "Josefin Sans",
    "Karla",
    "Lato",
    "Libre Franklin",
    "Maven Pro",
    "Merriweather Sans",
    "Monda",
    "Montserrat",
    "Muli",
    "Nanum Gothic",
    "News Cycle",
    "Noto Sans",
    "Nunito",
    "Nunito Sans",
    "Open Sans",
    "Open Sans Condensed",
    "Orbitron",
    "Oswald",
    "Oxygen",
    "PT Sans",
    "Pathway Gothic One",
    "Philosopher",
    "Play",
    "Pontano Sans",
    "Poppins",
    "Quattrocento Sans",
    "Questrial",
    "Quicksand",
    "Rajdhani",
    "Raleway",
    "Roboto",
    "Roboto Condensed",
    "Ropa Sans",
    "Rubik",
    "Russo One",
    "Signika",
    "Source Sans Pro",
    "Teko",
    "Titillium Web",
    "Ubuntu",
    "Varela Round",
    "Work Sans",
    "Yanone Kaffeesatz",
    "Yantramanav",
  ],
  serif: [
    "Adamina",
    "Alegreya",
    "Amiri",
    "Arapey",
    "Arvo",
    "Bitter",
    "Bree Serif",
    "Cardo",
    "Cinzel",
    "Cormorant Garamond",
    "Crete Round",
    "Crimson Text",
    "Domine",
    "EB Garamond",
    "Josefin Slab",
    "Libre Baskerville",
    "Lora",
    "Merriweather",
    "Neuton",
    "Noticia Text",
    "Noto Serif",
    "Old Standard TT",
    "PT Serif",
    "Playfair Display",
    "Playfair Display SC",
    "Quattrocento",
    "Roboto Slab",
    "Rokkitt",
    "Sanchez",
    "Slabo 27px",
    "Source Serif Pro",
    "Tinos",
    "Vidaloka",
    "Volkhov",
    "Vollkorn",
  ],
}

const getRandomFont = () => {
  const allFonts = []
    .concat(BrowserFonts.sans)
    .concat(BrowserFonts.serif)
    .concat(
      WebFonts.sans.map(font => {
        return { name: font, family: "'" + font + "', sans-serif" }
      })
    )
    .concat(
      WebFonts.serif.map(font => {
        return { name: font, family: "'" + font + "', serif" }
      })
    )
  return allFonts[Math.floor(Math.random() * allFonts.length)]
}

const hexToH = H => {
  let r = 0,
    g = 0,
    b = 0
  if (H.length === 4) {
    r = "0x" + H[1] + H[1]
    g = "0x" + H[2] + H[2]
    b = "0x" + H[3] + H[3]
  } else if (H.length === 7) {
    r = "0x" + H[1] + H[2]
    g = "0x" + H[3] + H[4]
    b = "0x" + H[5] + H[6]
  }
  r /= 255
  g /= 255
  b /= 255
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0

  if (delta === 0) h = 0
  else if (cmax === r) h = ((g - b) / delta) % 6
  else if (cmax === g) h = (b - r) / delta + 2
  else h = (r - g) / delta + 4
  h = Math.round(h * 60)

  if (h < 0) h += 360

  return h
}

const getLuminance = H => {
  let r = 0,
    g = 0,
    b = 0
  if (H.length === 4) {
    r = "0x" + H[1] + H[1]
    g = "0x" + H[2] + H[2]
    b = "0x" + H[3] + H[3]
  } else if (H.length === 7) {
    r = "0x" + H[1] + H[2]
    g = "0x" + H[3] + H[4]
    b = "0x" + H[5] + H[6]
  }
  r /= 255
  g /= 255
  b /= 255

  return r * 0.299 + g * 0.587 + b * 0.114
}

const getColorScheme = baseColor => {
  if (!baseColor) {
    baseColor = "#000000".replace(/0/g, function() {
      return (~~(Math.random() * 16)).toString(16)
    })
  }

  const scm = new ColorScheme()

  const isDarkMode = getLuminance(baseColor) > 0.7

  const colors = scm
    .from_hue(hexToH(baseColor))
    .scheme("triade")
    .colors()

  let colorPalette = {
    primary: baseColor,
    secondary: "#" + colors[0],
    text: isDarkMode ? "#FFFFFF" : "#000000",
    background: isDarkMode ? "#000000" : "#FFFFFF",
  }

  colors.splice(1).forEach(color => {
    const colorName = ntc
      .name(color)[1]
      .toLowerCase()
      .split(" ")
      .pop()
    colorPalette[colorName] = "#" + color
  })

  if (typeof colorPalette.white !== "undefined") {
    colorPalette.offwhite = colorPalette.white
    colorPalette.white = "#ffffff"
  }

  return colorPalette
}

export {
  ThemeContext,
  ThemeProvider,
  Themes,
  BrowserFonts,
  WebFonts,
  getRandomFont,
  getMainColors,
  getOtherColors,
  getColorScheme,
  isDark,
}

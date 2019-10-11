import { lighten } from "polished"

const getCodeTheme = theme => {
  return {
    hljs: {
      display: "block",
      overflowX: "auto",
      padding: "2em",
      color: theme.colors.text || "#000", // text
      background: lighten(0.1, theme.colors.background || "#ddd") || "#f4f4f4", // background * lighter or darker
    },
    "hljs-comment": {
      color: theme.colors.primary, // primary - lighter
      fontStyle: "italic",
    },
    "hljs-quote": {
      color: theme.colors.primary, // primary - lighter
      fontStyle: "italic",
    },
    "hljs-keyword": {
      color: theme.colors.secondary || theme.colors.red, // secondary
    },
    "hljs-selector-tag": {
      color: theme.colors.secondary || theme.colors.red, // secondary
    },
    "hljs-literal": {
      color: theme.colors.secondary || theme.colors.red, // secondary
    },
    "hljs-subst": {
      color: theme.colors.secondary || theme.colors.red, // secondary
    },
    "hljs-number": {
      color: "#40a070", // primary
    },
    "hljs-string": {
      color: theme.colors.primary, // primary
    },
    "hljs-doctag": {
      color: theme.colors.primary, // primary
    },
    "hljs-selector-id": {
      color: "#19469d", // blue darker
    },
    "hljs-selector-class": {
      color: "#19469d", // blue darker
    },
    "hljs-section": {
      color: "#19469d", // blue darker
    },
    "hljs-type": {
      color: "#19469d", // blue darker
    },
    "hljs-params": {
      color: "#00f", // blue
    },
    "hljs-title": {
      color: "#458",
      fontWeight: "bold", // dk gray
    },
    "hljs-tag": {
      color: "#000080", // blue darker
      fontWeight: "normal",
    },
    "hljs-name": {
      color: "#000080", // blue darker
      fontWeight: "normal",
    },
    "hljs-attribute": {
      color: "#000080", // blue darker
      fontWeight: "normal",
    },
    "hljs-variable": {
      color: "#008080",
    },
    "hljs-template-variable": {
      color: "#008080", // primary
    },
    "hljs-regexp": {
      color: "#b68", // red
    },
    "hljs-link": {
      color: "#b68", // red
    },
    "hljs-symbol": {
      color: "#990073", // red darker
    },
    "hljs-bullet": {
      color: "#990073", // red darker
    },
    "hljs-built_in": {
      color: "#0086b3", // cyan
    },
    "hljs-builtin-name": {
      color: "#0086b3", // cyan
    },
    "hljs-meta": {
      color: "#999",
      fontWeight: "bold",
    },
    "hljs-deletion": {
      background: "#fdd", // light red
    },
    "hljs-addition": {
      background: "#dfd", // light green
    },
    "hljs-emphasis": {
      fontStyle: "italic",
    },
    "hljs-strong": {
      fontWeight: "bold",
    },
  }
}

export default getCodeTheme

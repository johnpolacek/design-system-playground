import React from "react"
import { Global, css } from "@emotion/core"

const GlobalCSS = props => (
  <Global
    styles={css`
      button,
      hr,
      input {
        overflow: visible;
      }
      progress,
      sub,
      sup {
        vertical-align: baseline;
      }
      [type="checkbox"],
      [type="radio"],
      legend {
        box-sizing: border-box;
        padding: 0;
      }
      html {
        line-height: 1.2;
        -webkit-text-size-adjust: 100%;
      }
      body {
        margin: 0;
      }
      hr {
        box-sizing: content-box;
        height: 0;
      }
      code,
      kbd,
      pre,
      samp {
        font-family: monospace, monospace;
        font-size: 14px;
      }
      a {
        background-color: transparent;
      }
      abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        text-decoration: underline dotted;
      }
      b,
      strong {
        font-weight: bolder;
      }
      small {
        font-size: 80%;
      }
      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
      }
      sub {
        bottom: -0.25em;
      }
      sup {
        top: -0.5em;
      }
      img {
        border-style: none;
      }
      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }
      button,
      select {
        text-transform: none;
      }
      [type="button"],
      [type="reset"],
      [type="submit"],
      button {
        -webkit-appearance: button;
      }
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner,
      button::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }
      [type="button"]:-moz-focusring,
      [type="reset"]:-moz-focusring,
      [type="submit"]:-moz-focusring,
      button:-moz-focusring {
        outline: ButtonText dotted 1px;
      }
      fieldset {
        padding: 0.35em 0.75em 0.625em;
      }
      legend {
        color: inherit;
        display: table;
        max-width: 100%;
        white-space: normal;
      }
      textarea {
        overflow: auto;
      }
      [type="number"]::-webkit-inner-spin-button,
      [type="number"]::-webkit-outer-spin-button {
        height: auto;
      }
      [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }
      [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
      }
      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }
      details {
        display: block;
      }
      summary {
        display: list-item;
      }
      [hidden],
      template {
        display: none;
      }
      html {
        box-sizing: border-box;
      }
      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }
      body {
        margin: 0;
        font-family: ${props.theme.fonts.body};
        font-size: ${props.theme.fontSizes[1]}px;
      }
      button,
      input[type="submit"] {
        cursor: pointer;
        background: ${props.theme.colors.primary};
        color: white;
        padding: ${props.theme.space[3]}px ${props.theme.space[4]}px;
        border-radius: ${props.theme.radii[2]}px;
        border: none;
        font-size: ${props.theme.fontSizes[2]}px;
      }
      p {
        line-height: ${props.theme.lineHeights.body};
        margin: 0 0 ${props.theme.space[3]}px;
      }
      ul {
        margin-top: 0;
      }
      select {
        padding: 8px;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        text-rendering: optimizelegibility;
        line-height: ${props.theme.lineHeights.heading};
        margin: 0 0 ${props.theme.space[3]}px;
      }
      input,
      select,
      textarea {
        padding: 4px;
        border: solid 2px #aed7ff;
        font-size: 16px;
        font-family: inherit;
      }
      select {
        -webkit-appearance: menulist;
      }
      table {
        border-collapse: collapse;
      }
      input {
        text-align: inherit;
        padding-left: 4px;
      }
      a {
        color: ${props.theme.colors.primary};
      }
      * {
        transition: background 0.5s ease, color 0.25s ease;
      }
      @keyframes seesaw {
        0% {
          transform: rotate(-18deg) translateX(0);
        }
        50% {
          transform: rotate(18deg) translateX(2px);
        }
        100% {
          transform: rotate(-18deg) translateX(0);
        }
      }
      #seesaw {
        position: relative;
        animation: seesaw 8s infinite;
      }
    `}
  />
)

export default GlobalCSS

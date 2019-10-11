/** @jsx jsx */
import { jsx } from "theme-ui"
// eslint-disable-next-line
import React, { useContext } from "react"
import Header from "../components/Header"
import Nav from "../components/Nav"
import Main from "../components/Main"
import Playground from "../components/playground"
import Wrapper from "../components/Wrapper"
import Footer from "../components/Footer"
import { NavProvider } from "../context/NavContext"
import { ThemeContext, ThemeProvider } from "../context/ThemeContext"
import SEO from "../components/head/SEO"
import GlobalCSS from "../components/head/GlobalCSS"
import ReactGA from 'react-ga';

const IndexPage = () => {
  const { theme } = useContext(ThemeContext)
  
  ReactGA.initialize('UA-2821890-15')
  if (typeof window !== 'undefined') {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }

  return (
    <ThemeProvider>
      <GlobalCSS theme={theme} />
      <SEO title="Design System Playground" />
      <NavProvider>
        <Wrapper>
          <Header />
          <Playground />
          <Nav />
          <Main />
          <Footer />
        </Wrapper>
      </NavProvider>
    </ThemeProvider>
  )
}

export default IndexPage

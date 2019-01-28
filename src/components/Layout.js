import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import SEO from './SEO'
import theme from '../../config/theme'

const GlobalStyle = createGlobalStyle`
h1, h2, h3, h4, h5, h6 {
  color: ${theme.colors.black};
}
html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  color: ${theme.colors.greyDarker};
  background-color: ${theme.colors.bg};
}
::selection {
  color: ${theme.colors.bg};
  background-color: ${theme.colors.primary};
}
a {
  color: ${theme.colors.primary};
  transition: all 0.4s ease-in-out;
  text-decoration: none;
  font-weight: 700;
  font-style: italic;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
}
@media (max-width: ${theme.breakpoints.phone}) {
  h1 {
    font-size: 2.369rem !important;
  }
  h2 {
    font-size: 1.777rem !important;
  }
  h3 {
    font-size: 1.333rem !important;
  }
  h4 {
    font-size: 1rem !important;
  }
  h5 {
    font-size: 0.75rem !important;
  }
  h6 {
    font-size: 0.563rem !important;
  }
}
`

const Footer = styled.footer`
  text-align: center;
  padding: 3rem 1rem;
  span {
    font-size: 0.75rem;
  }
`

const Layout = ({ children, customSEO }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          buildTime(formatString: "YYYY-MM-DD")
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          {!customSEO && <SEO buildTime={data.site.buildTime} />}
          <GlobalStyle />
          {children}
          <Footer>
            &copy; 2019 by John Doe. All rights reserved. <br />
            <a href="https://github.com/LekoArts/gatsby-starter-minimal-blog">GitHub Repository</a> <br />
            <span>Last build: {data.site.buildTime}</span>
          </Footer>
        </React.Fragment>
      </ThemeProvider>
    )}
  />
)

export default Layout

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  customSEO: PropTypes.bool,
}

Layout.defaultProps = {
  customSEO: false,
}

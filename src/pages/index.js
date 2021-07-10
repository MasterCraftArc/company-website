import * as React from "react"
import Helmet from "react-helmet"
import siteHead from "../components/duHelmet"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}



// markup
const Train = () => {
  return (
    <main style={pageStyles}>
      <siteHead></siteHead>
      <Helmet>

      </Helmet>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        <span style={headingAccentStyles}>— Hello world</span>
      </h1>
    </main>
  )
}

export default Train

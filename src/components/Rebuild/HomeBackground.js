import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const BackgroundSection = ({ className, children }) => {
  const { desktopImage } = useStaticQuery(
    graphql`
      query {
        desktopImage: file(relativePath: { eq: "home-hero-bg.png" }) {
          childImageSharp {
            fluid(maxWidth: 3840, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const sources = [desktopImage.childImageSharp.fluid];

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      backgroundColor={`#040e18`}
      fluid={sources}
      preserveStackingContext={true}
      style={{
        // backgroundPosition: "70%",
        height: "100vh",
        width: "100vw",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      {children}
    </BackgroundImage>
  );
};

export default BackgroundSection;

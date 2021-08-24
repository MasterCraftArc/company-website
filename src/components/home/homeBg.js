import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className, children }) => {
  const { mobileImage, desktopImage } = useStaticQuery(
    graphql`
      query {
        mobileImage: file(relativePath: { eq: "home/mobileHero.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1655, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        desktopImage: file(relativePath: { eq: "home/hero.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 3840, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

const sources = [
  mobileImage.childImageSharp.fluid,
  {
    ...desktopImage.childImageSharp.fluid,
    media: `(min-width: 600px)`,
  },
]


  return (
    <BackgroundImage
      Tag="section"
      className={className}
      backgroundColor={`#040e18`}
      fluid={sources}
    >
      {children}
    </BackgroundImage>
  );
};

export default BackgroundSection;

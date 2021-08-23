import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className, children }) => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "home/hero.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 2725
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )

const image = getImage(placeholderImage)
const bgImage = convertToBgImage(image)

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      backgroundColor={`#040e18`}
      {...bgImage}
      preserveStackingContext
    >
      {children}
    </BackgroundImage>
  );
};

export default BackgroundSection;

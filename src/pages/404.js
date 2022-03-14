import * as React from "react";
import { graphql } from "gatsby";
import SiteHelmet from "../components/SiteHelmet";
import logo from "../images/logo.png";
import StyledBackgroundSection from "../components/contactBg";
import Button from "../components/button";

const NotFoundPage = ({ data, location }) => {
  // const siteTitle = data.site.siteMetadata.title

  return (
    <StyledBackgroundSection className="min-h-screen flex flex-col md:pt-24 xl:pt-0 justify-center items-center">
      <SiteHelmet route="404" />
      
      <h1 className="mt-16 text-7xl text-black text-center font-bold text-white">
        <span className="text-red-500">404 - Page not found</span>
      </h1>
      <h1 className="mt-6 mb-10 text-4xl text-black text-center font-bold text-white">
        Check the link or try again later.
      </h1>
      <Button
        linkTo="/"
        className="bg-blue-500 hover:bg-blue-400 text-white mr-5 mb-5"
        text="Home"
      />
      {/* <Footer/> */}
    </StyledBackgroundSection>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

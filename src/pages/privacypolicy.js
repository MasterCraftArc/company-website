import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/blogLayout";
import Seo from "../components/seo";
import unicorn from "../images/unicornStars.png";
import Button from "../components/button";

const metaStyles = {
  lineHeight: "0.5",
};

const navigationStyles = {
  width: '12vw',
  height: '30vw'
}

const PrivacyPolicy = ({ data }) => {
  const policyData = data.allMarkdownRemark.nodes[0];

  return (
    <Layout title={policyData.frontmatter.title}>
      <Seo route="Privacy Policy" description="Privacy Policy" />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
        className="relative"
      >
        <div className="metaData mt-10 mb-16 font-sans" style={metaStyles}>
          <p className="text-2xl mb-2">
            <span className="font-black text-blue-900">LAST UPDATED: </span>{" "}
            {policyData.frontmatter.date}
          </p>
        </div>

        <section className="navigationPange fixed blackBorder left-0 top-96 mt-24" style={navigationStyles}>

        </section>

        <section
          dangerouslySetInnerHTML={{ __html: policyData.html }}
          itemProp="articleBody"
          className="privacyPolicy"
        />

        <hr />
      </article>

      <div className="flex flex-col justify-center items-center mt-24 mb-5">
        <img
          className="w-2/6 xl:w-1/6 mx-auto"
          src={unicorn}
          alt="Unicorn with star trail"
        ></img>
        <Button
          linkTo="/"
          className=" bg-red-500 hover:bg-red-700 text-white"
          text="Home"
        />
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;

export const pageQuery = graphql`
  query PrivacyPolicy {
    allMarkdownRemark(
      filter: { frontmatter: { slug: { eq: "privacypolicy" } } }
    ) {
      nodes {
        html
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`;

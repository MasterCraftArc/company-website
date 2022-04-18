import { graphql } from "gatsby";
import { motion } from "framer-motion";
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Button from "../components/button";
import SiteHelmet from "../components/SiteHelmet";
import BackgroundSection from "../components/equipBg";
import PostContainer from "../components/postContainer";

const pageStyles = {
  color: "black",
  maxWidth: "100vw",
};

const battleText = {
  color: "#14498e",
  fontWeight: "500",
};

const Blog = ({ data }) => {
  let posts = data.allMarkdownRemark.nodes;
  const cardRefs = posts.map(() => React.createRef());

  return (
    <BackgroundSection className="bg-local">
      <div className="h-screen blog fontTitle" style={pageStyles}>
        <SiteHelmet route="Learn" description="DevSecOps Starter Pack" />
        <Header />
        <section className="hero flex flex-col justify-center">
          <div
            className="pb-8 h-full flex flex-col justify-center"
            style={{ color: "red" }}
          >
            <div className="pl-4 md:pl-6 lg:pl-16 pb-8 text-white text-4xl sm:text-5xl md:text-6xl  lg:text-7xl xl:text-8xl flex flex-col font-semibold">
              <p className="">DevSecOps Starter Pack</p>
            </div>
            <p className="heroText md:text-3xl text-2xl md:w-1/2 w-full text-white pl-4 md:pl-6 lg:pl-16">
              This blog is your source for context-first guides, stories and
              news on the categories, process and technology necessary to
              accelerate your mission.
            </p>
            <a
              aria-hidden="true"
              href="#latestPosts"
              className={`text-5xl xl:text-6xl 2xl:text-7xl absolute left-0 bottom-5 animate-bounce text-center w-full`}
            >
              <motion.i
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: "spring",
                  delay: 0.5,
                  default: { duration: 2.5 },
                }}
                className=" bi bi-chevron-down hover:text-white cursor-pointer"
              ></motion.i>
            </a>
          </div>
        </section>
        <section
          id="latestPosts"
          className="latestTrained min-h-screen mt-4 relative px-8"
        >
          <div className="mt-5 md:mt-16 mx-auto relative py-16 h-full">
            <div className="lg:px-24 xl:px-32 2xl:px-44 top-0 bg-white relative">
              <h2
                className="fontTitle text-left text-5xl md:text-6xl lg:text-7xl xl:text-7xl mb-16 flex flex-col sm:flex-row items-center w-full justify-between relative h-full"
                style={battleText}
              >
                <div className="flex items-center relative">
                  <span className="font-bold text-5xl">Latest Posts</span>
                </div>
              </h2>
            </div>

            <PostContainer posts={posts} ref={cardRefs} />

            <div className="flex justify-center">
              <Button
                linkTo="/contact"
                className=""
                text="Contact Us"
                width="166px"
                height="52px"
              />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </BackgroundSection>
  );
};
export default Blog;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    localSearchPages {
      index
      store
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMM DD, YYYY")
          title
          description
          author
          image {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        fields {
          readingTime {
            text
          }
        }
      }
    }
  }
`;

import * as React from "react";
import { graphql } from "gatsby";
import { motion } from "framer-motion";
import SiteHelmet from "../components/SiteHelmet";
import Header from "../components/header";
import Card from "../components/card";
import Footer from "../components/footer";
import pin from "../images/pin.png";
import unicornStars from "../images/unicornStars.png";

const pageStyles = {
  color: "black",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  width: "100vw",
};

const battleText = {
  // color: "#84b9ff", //for black background
  color: "#14498e",
  fontWeight: "normal",
};

const Equip = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes;
  console.log(posts.length);
  let cardRefs = [];
  let categoriesRef = React.createRef();
  for (let i = 0; i < posts.length; i++) {
    cardRefs[i] = React.createRef();
  }

  function updateCards(event) {
    if (event.target.innerText === "All") {
      cardRefs.forEach((card) => {
        card.current.style.display = "block";
      });
    } else {
      for (let i = 0; i < posts.length; i++) {
        if (cardRefs[i].current.dataset.category === event.target.innerText) {
          cardRefs[i].current.style.display = "block";
        } else {
          cardRefs[i].current.style.display = "none";
        }
      }
    }

    categoriesRef.current.childNodes.forEach((child) => {
      child.style.color = "#9CA3AF";
      child.style.fontWeight = "normal";
    });
    event.target.style.color = "#EF4444";
    event.target.style.fontWeight = "bold";
  }

  return (
    <div className="h-screen equip blog" style={pageStyles}>
      <SiteHelmet title="Equip" description="Defense Unicorns Blog"/>
      <Header />
      <section className="hero flex flex-col justify-center">
        <div className="pb-8 h-full flex flex-col justify-center" style={{ color: "red" }}>
        <p className="pinGlow  pb-8 text-white md:text-6xl text-5xl flex items-end align-bottom font-bold">
           <img src={pin} className="w-32 pt-12"/> The Defense Unicorns Blog
          </p>
          <div className="flex md:flex-row flex-col md:text-5xl text-4xl">
            <p className="pb-8 pl-16">Translating thoughts into&nbsp;</p>
            <p className="pb-8 font-bold">action</p>
          </div>
          <p className="heroText md:text-3xl text-2xl md:w-1/2 w-full text-white pl-16">
            We believe every organization has the capacity for digital
            transformation and that continuous learning delivers improved
            outcomes when we feel comfortable applying what we’ve learned. This
            blog is your source for context-first guides, stories, and news on
            the people, process, and technology necessary to accelerate your
            mission.
          </p>

          <a 
            aria-hidden="true" 
            href="#latestPosts" 
            className={`text-5xl xl:text-6xl 2xl:text-7xl w-1/12 absolute bottom-0 animate-bounce`}
            style={ {left: '50%'} }  
          >
            <motion.i
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                delay: 0.5,
                default: {duration: 2.5}
              }}
              className=" bi bi-chevron-down hover:text-blue-700 cursor-pointer">

            </motion.i>
          </a>
        </div>

      </section>
      <section 
      id="latestPosts"  
      className="latestTrained min-h-screen mt-16 pt-24 overflow-x-scroll md:overflow-auto"
      style={{background:{unicornStars}}}
      >
        <div className="container h-75 mt-16 mx-auto relative">
          <div className="px-16 sticky top-0 bg-white">
            <h2
              className="fontTitle text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
              style={battleText}
            >
              Latest Posts
            </h2>
            <div
              ref={categoriesRef}
              className="borderBottom textTab font-black md:pl-20 text-2xl text-bold w-full border-b-2 border-blue-900 mt-16 mb-16"
            >
              <button
                className="pr-4 md:pr-16 text-red-500 cursor-pointer hover:text-red-500"
                onClick={(event) => updateCards(event)}
              >
                All
              </button>
              <button
                className="tabButton pr-4 md:pr-16 text-gray-400 cursor-pointer hover:text-red-500"
                onClick={(event) => updateCards(event)}
              >
                AGILE ACQUISITIONS 
              </button>
              <button
                className="tabButton pr-4 md:pr-16 text-gray-400 cursor-pointer hover:text-red-500"
                onClick={(event) => updateCards(event)}
              >
                DEVSECOPS
              </button>
              <button
                className="tabButton pr-4 md:pr-16 text-gray-400 cursor-pointer hover:text-red-500"
                onClick={(event) => updateCards(event)}
              >
                CONTINUOUS DELIVERY
              </button>
            </div>
          </div>
          <div className="flex justify-evenly">
            {posts.map((post, i) => {
              console.log(post);
              return (
                <Card
                  imgDisplay={post.frontmatter.image.childImageSharp.fluid.src}
                  ref={cardRefs[i]}
                  category={post.frontmatter.category}
                  title={post.frontmatter.title}
                  description={post.frontmatter.description}
                  blogLink={`/blog${post.fields.slug}`}
                />
              );
            })} 
          </div>
        </div>
      </section>
      <img src={pin} className="w-2/12 ml-auto"/>

      <Footer background={true} />
    </div>
  );
};
export default Equip;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
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
          date(formatString: "MMMM DD, YYYY")
          title
          description
          category
          author
          image {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;

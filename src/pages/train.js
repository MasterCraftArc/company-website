import React, { useState } from "react";
import { Listbox } from '@headlessui/react'
import { graphql } from "gatsby";
import { motion } from "framer-motion";
import Card from "../components/card";
import Header from "../components/header";
import Footer from "../components/footer";
import pinBlue from "../images/pinBlue.png";
import SiteHelmet from "../components/SiteHelmet";
import unicornStars from "../images/unicornStars.png";
import BackgroundSection from "../components/equipBg";


const pageStyles = {
  color: "black",
  width: "100%",
};

const battleText = {
  color: "#14498e",
  fontWeight: "500",
};

const unicornStarStyle = {
  width: "14%",
  position: "absolute",
  top: "250px",
};

const pinBlueStyle = {
  width: "5%",
  position: "absolute",
  right: "52px",
};

const categories = [
  { id: 1, name: 'All Categories', unavailable: false },
  { id: 2, name: 'DevSecOps', unavailable: false },
  { id: 3, name: 'Agile Acquisitions', unavailable: false },
  { id: 4, name: 'Continuous Delivery', unavailable: false },
]

const Train = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;
  const cardRefs = posts.map(() => React.createRef());
  const [selectedPerson, setSelectedPerson] = useState(categories[0])

  const updateCards = (evt) => {
    if(evt.name === 'All Categories'){
      cardRefs.forEach( card => {
        card.current.hidden = false
      })
    }else{
      cardRefs.forEach( card => {
        card.current.hidden = true
      })
    }
    cardRefs.filter( card => card.current.dataset.category === evt.name).forEach(card => {
      card.current.hidden = false
    })
  }

  return (
    <BackgroundSection className="bg-local">
      <div className="h-screen equip blog fontTitle" style={pageStyles}>
        <SiteHelmet route="Train" description="Defense Unicorns Blog" />
        <Header />
        <section className="hero flex flex-col justify-center">
          <div
            className="pb-8 h-full flex flex-col justify-center"
            style={{ color: "red" }}
          >
            <div className="pl-4 md:pl-6 lg:pl-16 pb-8 text-white text-4xl sm:text-5xl md:text-6xl  lg:text-7xl xl:text-8xl flex flex-col font-bold">
              <p className="">The Defense Unicorns Blog</p>
              <p className="mt-5 text-red-600">translating thoughts</p>
              <p className="mt-5 text-red-600">into action</p>
            </div>
            <p className="heroText md:text-3xl text-2xl md:w-1/2 w-full text-white pl-4 md:pl-6 lg:pl-16">
              This blog is your source for context-first guides, stories and
              news on the categories, process and technology necessary to accelerate
              your mission.
            </p>
            <a
              aria-hidden="true"
              href="#latestPosts"
              className={`text-5xl xl:text-6xl 2xl:text-7xl w-1/12 absolute bottom-5 animate-bounce text-center w-full`}
              // style={{ left: "50%" }}
            >
              <motion.i
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: "spring",
                  delay: 0.5,
                  default: { duration: 2.5 },
                }}
                className=" bi bi-chevron-down hover:text-blue-700 cursor-pointer"
              ></motion.i>
            </a>
          </div>
        </section>
        <section
          id="latestPosts"
          className="latestTrained min-h-screen mt-4 relative px-8 "
        >
          <img
            className="z-10 right-0 2xl:right-24"
            src={unicornStars}
            style={unicornStarStyle}
            alt="unicorn with star trail"
          />
          <div className="mt-16 mx-auto relative py-16">
            <div className="md:px-16 sticky top-0 bg-white">
              <h2
                className="fontTitle text-left text-5xl md:text-6xl lg:text-7xl xl:text-7xl mb-16 flex items-center relative"
                style={battleText}
              >
                <img
                  className="justify-self-bottom"
                  style={{ maxWidth: "70px" }}
                  src={pinBlue}
                  alt="Unicorn standing on card"
                />
                <span>Latest Posts</span>
                
                <div className="w-1/4 borderColor border border-solid h-12 rounded-xl text-normal text-black text-2xl absolute">
                  <Listbox 
                    value={selectedPerson} 
                    onChange={(evt) => {setSelectedPerson(evt); updateCards(evt);} }
                    >
                    <Listbox.Button className="w-full h-full p-1">
                      {selectedPerson.name}
                      <i className="bi bi-chevron-expand absolute right-0"></i>
                    </Listbox.Button>

                    <Listbox.Options className="text-normal dropBorder text-center border border-solid mt-2 rounded-xl overflow-hidden">
                      {categories.map((person) => (
                        <Listbox.Option
                        className= 'hover:bg-gray-100 cursor-pointer'
                        key={person.id}
                        value={person}
                        disabled={person.unavailable}
                        >
                          {person.name}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                      
                  </Listbox>
                </div>
              </h2>
            </div>

            <div className="flex justify-center lg:justify-start flex-wrap min-h-screen sm:px-16 md:px-32 xl:px-10 pb-10">
              {posts.map((post, i) => {
                return (
                  <Card
                    key={`${post.fields.slug}-${i}`}
                    imgDisplay={
                      post.frontmatter.image.childImageSharp.fluid.src
                    }
                    ref={cardRefs[i]}
                    category={post.frontmatter.category}
                    title={post.frontmatter.title}
                    description={post.frontmatter.description}
                    cardLink={`/blog${post.fields.slug}`}
                    date={post.frontmatter.date}
                  />
                );
              })}
            </div>
          </div>
        </section>
        <img alt="Doug Pin" src={pinBlue} style={pinBlueStyle} className="" />
        <Footer />
      </div>
    </BackgroundSection>
  );
};
export default Train;

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

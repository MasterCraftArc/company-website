import { graphql } from "gatsby";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Button from "../components/button";
import { Listbox } from "@headlessui/react";
import SiteHelmet from "../components/SiteHelmet";
import { useFlexSearch } from "react-use-flexsearch";
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



const categories = [
  { id: 1, name: "All Categories", unavailable: false },
  { id: 2, name: "People", unavailable: false },
  { id: 3, name: "Process", unavailable: false },
  { id: 4, name: "Technology", unavailable: false },
];

const unFlattenResults = (results) =>
  results.map((post) => {
    const { date, slug, tags, title } = post;
    return { slug, frontmatter: { title, date, tags } };
    // https://www.emgoto.com/gatsby-search/ 09/22/2021
  });

const Learn = ({ data }) => {
  const [selectedCategory, setselectedCategory] = useState(categories[0]);
  const searchBar = React.createRef();

  const query = new URLSearchParams().get("search");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const [searches, updateSearch] = useState(data.allMarkdownRemark.nodes);
  let posts = data.allMarkdownRemark.nodes;
  const cardRefs = posts.map(() => React.createRef());

  const searchResults = useFlexSearch(
    searchQuery,
    data.localSearchPages.index,
    data.localSearchPages.store
  );
  const results = unFlattenResults(searchResults);

  const updateCards = (evt) => {
    let availableCards = cardRefs.filter((card) => card.current);

    if (evt.name === "All Categories") {
      availableCards.forEach((card) => {
        card.current.style.display = "block";
      });
    } else {
      availableCards.forEach((card) => {
        card.current.style.display = "none";
      });
      availableCards
        .filter((card) => card.current.dataset.category === evt.name)
        .forEach((card, i) => {
          card.current.style.display = "block";
        });
      availableCards
        .filter((card) => card.current.dataset.category === evt.name)
        .forEach((card) => {
          card.current.style.display = "block";
        });
    }

  };

  const displaySearch = () => {
    let filterSearch = posts.filter((post) => {
      if (searchQuery.length > 1) {
        return results.some((result) => result.slug === post.fields.slug);
      }
      return false;
    });
    filterSearch.length < 1 ? updateSearch(posts) : updateSearch(filterSearch);
  };

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

                {/* <div className="w-11/12 sm:w-1/2 md:w-2/5 borderColor border-solid border-r-0 h-16 2xl:h-20 rounded-xl text-normal text-2xl flex">
                  <label htmlFor="header-search">
                    <span className="visually-hidden">Search blog posts</span>
                  </label>
                  <input
                    className="w-1/2 px-2 my-2 divide-x divide-light-blue-400 border-r bg-transparent inline-block outline-none"
                    placeholder="Search..."
                    name="search"
                    type="text"
                    value={searchQuery}
                    onInput={(evt) => {
                      setSearchQuery(evt.target.value);
                      displaySearch();
                    }}
                    ref={searchBar}
                  />
                  <div className="relative w-1/2">
                    <Listbox
                      value={selectedCategory}
                      onChange={(evt) => {
                        setselectedCategory(evt);
                        updateCards(evt);
                      }}
                    >
                      <Listbox.Button className="searchText w-full h-full p-1 text-left">
                        {selectedCategory.name}
                        <i className="bi bi-chevron-down"></i>
                        <i className="bi bi-search searchButton text-3xl"></i>
                      </Listbox.Button>

                      <Listbox.Options className="text-lg dropBorder bg-white py-2 text-left border border-solid mt-2 rounded-xl overflow-hidden">
                        {categories.map((category) => (
                          <Listbox.Option
                            className="hover:bg-gray-100 cursor-pointer text-normal text-black text-lg py-1 px-1 text-center sm:text-left"
                            key={category.id}
                            value={category}
                            disabled={category.unavailable}
                          >
                            {category.name}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Listbox>
                  </div>
                </div> */}
              </h2>
            </div>

            <PostContainer posts={searches} ref={cardRefs} />

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
export default Learn;

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
        fields {
          readingTime {
            text
          }
        }
      }
    }
  }
`;

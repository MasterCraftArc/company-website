import * as React from "react";
import { Link, graphql } from "gatsby"
import SiteHelmet from "../components/SiteHelmet";
import Header from "../components/header";
// import pc from "../images/pc.png";
// import tech from "../images/tech.png";


import Card from "../components/card"
import Footer
 from "../components/footer";
const pageStyles = {
  color: "black",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  width: "100vw",
  // background: {topBG}
};

const buttonStyle = {
  borderRadius: "0",
  height: "45px",
  width: "150px",
  fontSize: "15px",
};

const battleText = {
  // color: "#84b9ff", //for black background
  color: "#14498e",
  fontWeight: "normal",
};


const Equip = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes
  console.log(posts.length)
  let cardRefs = []
  let categoriesRef = React.createRef();
  for (let i = 0; i < posts.length; i++) {
    cardRefs[i] = React.createRef();
  }
  
  function updateCards(event){
    if (event.target.innerText === "All"){
      cardRefs.forEach( card => {
        card.current.style.display = 'block'
      })
    }

    else{
      for (let i = 0; i < posts.length ; i++){
        if (cardRefs[i].current.dataset.category === event.target.innerText){
          cardRefs[i].current.style.display = 'block'
        }else{
          cardRefs[i].current.style.display = 'none'
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
      <SiteHelmet title="Blog" />

      <Header textColor="white" />
      <section className="hero flex flex-col justify-center">
        <div className="pl-12 pb-8" style={{ color: "red" }}>
          <p className="pb-8 text-white md:text-6xl text-5xl">
            The Defense Unicorns Blog
          </p>
          <div className="flex md:flex-row flex-col md:text-5xl text-4xl">
            <p className="pb-8">Translating thoughts into&nbsp;</p>
            <p className="pb-8 font-bold">action</p>
          </div>
          <p className="heroText md:text-3xl text-2xl md:w-1/2 w-full text-white">
            We believe every organization has the capacity for digital
            transformation and that continuous learning delivers improved
            outcomes when we feel comfortable applying what we’ve learned. This
            blog is your source for context-first guides, stories, and news on
            the people, process, and technology necessary to accelerate your
            mission.
          </p>
        </div>

        <div className="mt-8">
          <Link to="/contact" className="heroText w-50 pl-12">
            <button
              className="bg-blue-600 text-white hover:bg-blue-700"
              style={buttonStyle}
            >
              LEARN MORE
            </button>
          </Link>
        </div>
      </section>

      <section className="latestTrained min-h-screen mt-8 overflow-x-scroll md:overflow-auto">
        <div className="container h-75 mt-16 mx-auto relative">
        <div className="px-16 sticky top-0 bg-white">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl" style={battleText}>Latest Posts</h2>
            <div ref={categoriesRef} className="font-black md:pl-20 text-2xl text-bold w-full border-b-2 border-solid border-gray-400 mt-16 mb-16">
              <button className="pr-4 md:pr-16 text-red-500 cursor-pointer hover:text-red-500" onClick={ (event) => updateCards(event) }>All</button>
              <button className="pr-4 md:pr-16 text-gray-400 cursor-pointer hover:text-red-500" onClick={ (event) => updateCards(event) }>Agile Acquisitions</button>
              <button className="pr-4 md:pr-16 text-gray-400 cursor-pointer hover:text-red-500" onClick={ (event) => updateCards(event) }>DevSecOps</button>
              <button className="pr-4 md:pr-16 text-gray-400 cursor-pointer hover:text-red-500" onClick={ (event) => updateCards(event) }>Continuous Delivery</button>
            </div>
          </div>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-auto place-items-center w-full gap-y-3.5">
            
            {posts.map((post, i) => {
              console.log(post)
              return (
                  <Card imgDisplay={post.frontmatter.image.childImageSharp.fluid.src} ref={cardRefs[i]} category={post.frontmatter.category} title={post.frontmatter.title} description={post.frontmatter.description} blogLink={`/blog${post.fields.slug}`}/>
              )
            })}
            

          </div>

        </div>
      </section>

      {/* <section className="min-h-screen ">
        <div className="h-1/4 px-16 md:px-32 lg:px-44 xl:px-56  mt-16 mb-16">
          <h2
            className="border-b-2 border-solid border-gray-400 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            style={battleText}
          >
            Defense Unicorns Learning Videos
          </h2>
        </div>

        <div className="h-3/4 px-16 md:px-56 w-full">
          <h1 className="text-center text-3xl font-bold text-blue-400">
            Coming Soon!
          </h1>
        </div>
      </section> */}

      <Footer background={true}/>
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
      filter: {frontmatter: {published: {eq: true}}}
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
`
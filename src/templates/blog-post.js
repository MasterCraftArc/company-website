import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/blogLayout"
import Seo from "../components/seo"
import unicorn from "../images/unicornStars.png"
import Button from "../components/button"

const metaStyles = {
  lineHeight: '0.5'
}

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle} post={post}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <div className="metaData" style={metaStyles}>
          <p className="text-2xl mb-2"><span className="font-bold">AUTHOR: </span> {post.frontmatter.author}</p>
          <p className="text-2xl mb-2"><span className="font-bold">DATE: </span> {post.frontmatter.date}</p>
          <p className="text-2xl"><span className="font-bold">CATEGORY: </span> {post.frontmatter.category}</p>
        </div>

        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
      </article>
      <div className="flex flex-col justify-center items-center">
        <img className="w-1/6 mx-auto mt-24 pr-12" src={unicorn} alt="Unicorn with multicolored star trail"></img>
        <Button linkTo="/equip" className=" bg-red-500 hover:bg-red-700 text-white mr-5 mb-5" text="See More" />
      </div>

      <nav className="blog-post-nav mb-16 pt-5 font-black text-lg sm:text-3xl">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={`/blog${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/blog${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>

    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
        description
        category
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
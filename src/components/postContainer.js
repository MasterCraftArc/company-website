import * as React from "react";
import Card from './card'

const PostContainer = React.forwardRef((props, ref) => (
  <div  className="sm:pt-1 flex justify-center md:justify-between flex-wrap sm:px-4 xl:px-32 2xl:px-56 pb-10">
    {props.posts.map((post, i) => {
      return (
        <Card
          key={`${post.fields.slug}-${i}`}
          imgDisplay={
            post.frontmatter.image.childImageSharp.fluid.src
          }
          ref={ref[i]}
          category={post.frontmatter.category}
          title={post.frontmatter.title}
          description={post.frontmatter.description}
          cardLink={`/blog${post.fields.slug}`}
          date={post.frontmatter.date}
          readTime={post.fields.readingTime.text}
        />
      );
    })}
  </div>
));

export default PostContainer;

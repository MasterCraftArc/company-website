import * as React from "react";
import Card from './card'

const PostContainer = React.forwardRef((props, ref) => (
  <div  className="sm:pt-12 flex justify-center lg:justify-between flex-wrap min-h-screen sm:px-16 md:px-32 xl:px-44 pb-10">
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
        />
      );
    })}
  </div>
));

export default PostContainer;

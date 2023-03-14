import * as React from 'react';
import NavBar from './sections/NavBar/NavBar';
import BlogStyles from './blogStyles';
import Footer from './sections/Footer';

const Layout = (props) => {
  return (
    <>
      <NavBar />
      <div className="blogPage w-full">
        <BlogStyles />
        <header className="postHeader">
          <div className="postHeaderContainer flex items-end pb-16 " style={{ maxHeight: '35vh' }}>
            <div className="w-4/6 mx-auto flex">
              <h1 className="text-4xl sm:text-5xl md:text-6xl align-bottom xl:text-7xl 2xl:text-8xl font-bold text-white sm:pr-10 m-0 mt-10">
                {props.title || props.post.frontmatter.title}
              </h1>
            </div>
          </div>
        </header>
        <main className="w-4/6 mx-auto">{props.children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

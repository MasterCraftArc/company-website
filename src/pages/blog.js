import * as React from 'react';
import { Link } from 'gatsby';
import SiteHelmet from '../components/SiteHelmet';

const blog = () => {
  return (
    <div>
      <SiteHelmet title="Blog" /> 
      <h1>This is the blog page</h1>
      <button className="btn btn-primary">Home</button>
      
    </div>
  );
}

export default blog;
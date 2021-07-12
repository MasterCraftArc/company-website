import * as React from 'react';
import { Link } from 'gatsby';
import Application from '../components/duHelmet';

const blog = () => {
  return (
    <div>
      <Application title="Blog" /> 
      <h1>This is the blog page</h1>
      <button className="btn btn-primary">Home</button>
      
    </div>
  );
}

export default blog;
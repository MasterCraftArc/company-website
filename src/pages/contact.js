import * as React from 'react';
import { Link } from 'gatsby';
import Application from '../components/duHelmet';

const contact = () => {
  return (
    <div>
      <Application title="Contact" /> 
      <h1>This is the contact page</h1>
      <Link to="/"><button className="btn btn-primary">Home</button></Link>
    </div>
  );
}

export default contact;
import * as React from 'react';
import { Link } from 'gatsby';
import Application from '../components/duHelmet';

const equip = () => {
  return (
    <div>
      <Application title="Equip" /> 
      <h1>This is the equip page</h1>
      <Link to="/"><button className="btn btn-primary" >Home</button></Link>
      
    </div>
  );
}

export default equip;
import * as React from 'react';
import { Link } from 'gatsby';
import SiteHelmet from '../components/duHelmet';
import Footer from '../components/footer';

const equip = () => {
  return (
    <div>
      <SiteHelmet title="Equip" /> 
      <h1>This is the equip page</h1>
      <Link to="/"><button className="btn btn-primary" >Home</button></Link>

      
      <Footer></Footer>
    </div>
  );
}

export default equip;
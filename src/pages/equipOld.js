import * as React from 'react';
import { Link } from 'gatsby';
import SiteHelmet from '../components/SiteHelmet';
import Footer from '../components/footer';
import Header from '../components/header';

const equipOld = () => {
  return (
    <div>
      <SiteHelmet title="Equip" /> 
      <Header />
      <h1>This is the equip page</h1>
      <Link to="/"><button className="btn btn-primary" >Home</button></Link>

      
      <Footer></Footer>
    </div>
  );
}

export default equipOld;
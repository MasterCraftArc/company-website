import '../styles/reset.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/global.css'
import * as React from "react";
import { Helmet } from "react-helmet";
import { Link } from 'gatsby';

function Layout(props) {
    const buttonStyle = {
        borderRadius: '0',
        height: '45px',
        width: '150px',
        fontSize: '15px',
      }

    return (
        <Link to="/train"><button className="bg-blue-500 hover:bg-blue-400 text-white mr-5 mb-5" style={buttonStyle}>Home</button></Link>
    );
};

export default Layout;


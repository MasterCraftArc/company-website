import * as React from 'react';
import { Link } from 'gatsby';
import logo from "../images/logo.png"

const footerStyle = {
    height: "80vh"
}
function Footer() {
    return (
    <footer className="footer border" style = {footerStyle}> 
        <div className="container">
          <span className="text-muted">Place sticky footer content here.</span>
        </div>
        <div className= "border">
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    </footer>

    )
}

export default Footer



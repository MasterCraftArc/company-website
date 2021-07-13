import '../../public/static/reset.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../public/static/style.css'
import * as React from "react";
import { Helmet } from "react-helmet";
import { Link } from 'gatsby';

function SiteHelmet(props) {
    return (
        <div className="SiteHelmet">
            <Helmet>
                <title>{props.title}</title>
                <meta charSet="utf-8" />
                <meta name="robots" content="index, follow" />
                <meta name="description" content={props.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" /> 
            </Helmet>
        </div>
    );
};

export default SiteHelmet;
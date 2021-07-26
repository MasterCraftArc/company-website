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
                {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link> */}
                {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script> */}
            </Helmet>
        </div>
    );
};

export default SiteHelmet;
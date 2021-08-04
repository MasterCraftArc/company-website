import * as React from "react";

import { Helmet } from "react-helmet";

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
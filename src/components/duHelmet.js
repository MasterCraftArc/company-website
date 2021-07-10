import React from "react";
import { Helmet } from "react-helmet";

function Application(props) {
    return (
        <div className="Application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{props.title}</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        </div>
    );
};

export default Application;
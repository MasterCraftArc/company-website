import * as React from "react";

function header(props) {
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
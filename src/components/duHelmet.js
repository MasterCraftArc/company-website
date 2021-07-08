import React from "react";
import { Helmet } from "react-helmet";

class Application extends React.Component {
  render () {
    return (
        <div className="Application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Yay</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        </div>
    );
  }
};

export default Application;
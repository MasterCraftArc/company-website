import * as React from 'react';

import Seo from './seo';

function SiteHelmet(props) {
  return (
    <div className="SiteHelmet">
      <Seo {...props} />
    </div>
  );
}

export default SiteHelmet;

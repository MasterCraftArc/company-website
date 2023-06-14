import React from 'react';
import SiteHelmet from '../../SiteHelmet';

function CareersHelmet() {
  return (
    <SiteHelmet
      route="Careers"
      // Bring in the following stylesheets and scripts from the Ripling-ATS API
      link={[
        {
          rel: 'stylesheet',
          type: 'text/css',
          media: 'all',
          href: 'https://assets.rippling-ats.com/stylesheets/embed.css',
        },
      ]}
      script={[
        {
          src: 'https://assets.rippling-ats.com/javascripts/embed.js',
          type: 'text/javascript',
        },
        {
          type: 'text/javascript',
          innerHTML: `var ht_settings = ( ht_settings || new Object() ); 
              ht_settings.site_url = "defense-unicorns"; 
              ht_settings.open_jobs_in_new_tab = true;
              `,
        },
      ]}
    />
  );
}

export default CareersHelmet;

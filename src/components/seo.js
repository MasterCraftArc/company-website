/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import 'bootstrap-icons/font/bootstrap-icons.css';

import * as React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const TWITTER_IMAGE_URL = 'https://www.defenseunicorns.com/icons/icon-96x96.png';

const Seo = ({ description, lang, meta, title, url, image, author, route, twitterImage }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            keywords
            description
            image
            siteUrl
          }
        }
      }
    `
  );
  const metaDescription = description || site.siteMetadata.description;
  const metaTitle = title || site.siteMetadata.title;
  const metaImage = image || site.siteMetadata.image;
  const metaUrl = url || site.siteMetadata.siteUrl;
  const metaAuthor = author || site.siteMetadata.social?.twitter;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={metaTitle}
      titleTemplate={`%s | ${route}`}
      link={[]}
      meta={[
        {
          charSet: 'utf-8'
        },
        {
          name: 'robots',
          content: 'index, follow'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          name: `theme-color`,
          content: `#ffffff`
        },
        {
          name: `description`,
          content: metaDescription
        },
        {
          name: `keywords`,
          content: site.siteMetadata.keywords
        },
        {
          property: `og:title`,
          content: metaTitle
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:image`,
          content: metaImage
        },
        {
          property: `og:url`,
          content: metaUrl
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:image`,
          content: twitterImage || TWITTER_IMAGE_URL
        },
        {
          name: `twitter:creator`,
          content: metaAuthor
        },
        {
          name: `twitter:title`,
          content: metaTitle
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta)}
    />
  );
};

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  title: ``,
  url: ``,
  img: ``,
  author: ``,
  route: ``,
  twitterImage: ``
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  url: PropTypes.string.isRequired,
  image: PropTypes.string,
  twitterImage: PropTypes.string,
  author: PropTypes.string,
  route: PropTypes.string
};

export default Seo;

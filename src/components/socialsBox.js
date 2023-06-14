import PropTypes from 'prop-types';
import React from 'react';

function SocialsBox(props) {
  return (
    <div
      className={`socialsBox flex justify-center text-3xl  md:justify-start  ${props.wrapperStyle}`}
    >
      <a
        aria-hidden="true"
        className="outboundLink"
        data-gtm-label="LinkedIn"
        href="https://www.linkedin.com/company/defense-unicorns"
      >
        <i className={`bi bi-linkedin px-3 py-2 ${props.linkedInStyle}`} />
      </a>
      <a
        aria-hidden="true"
        className="outboundLink"
        data-gtm-label="Github"
        href="https://github.com/defenseunicorns"
      >
        <i className={`bi bi-github transition-all px-3 py-2 ${props.githubStyle}`} />
      </a>
    </div>
  );
}

SocialsBox.defaultProps = {
  linkedInStyle:
    'hover:bg-white hover:text-red-500 text-white rounded-full transition-all hover:bg-white',
  githubStyle: 'hover:bg-white hover:text-red-500 text-white rounded-full',
  wrapperStyle: 'text-white mt-12 sm:mt-6',
};

SocialsBox.propTypes = {
  linkedInStyle: PropTypes.string,
  githubStyle: PropTypes.string,
  wrapperStyle: PropTypes.string,
};

export default SocialsBox;

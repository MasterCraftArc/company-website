import * as SocialIcons from '../svg/social-icons';

export const namedLinks = {
  home: {
    url: '/',
    text: 'Home'
  },
  contact: {
    text: 'Contact',
    url: '/contact'
  },
  careers: {
    text: 'Careers',
    url: '/careers'
  },
  termsOfService: {
    text: 'Terms of Service',
    url: '/termsofservice'
  },
  privacyPolicy: {
    text: 'Privacy Policy',
    url: '/privacypolicy'
  },
  zarfDocs: {
    target: '_self',
    text: 'Docs',
    rel: 'noopener noreferrer',
    url: 'https://docs.zarf.dev/docs/zarf-overview'
  },
  github: {
    text: 'Github',
    target: '_blank',
    rel: 'noopener noreferrer',
    url: 'https://github.com/defenseunicorns',
    icon: SocialIcons.Github
  },
  linkedIn: {
    text: 'LinkedIn',
    target: '_blank',
    rel: 'noopener noreferrer',
    url: 'https://www.linkedin.com/company/defense-unicorns',
    icon: SocialIcons.LinkedIn
  },
  zarf: {
    text: 'Zarf',
    target: '_blank',
    rel: 'noopener noreferrer',
    url: 'https://zarf.dev'
  },
  zarfInstall: {
    text: 'Try Zarf Now',
    target: '_blank',
    rel: 'noopener noreferrer',
    url: 'https://zarf.dev/install'
  },
  podcast: {
    text: 'Podcast',
    target: '_blank',
    rel: 'noopener noreferrer',
    url: 'https://anchor.fm/defenseunicorns',
    icon: SocialIcons.Podcast
  },
  courses: {
    text: 'Courses',
    target: '_blank',
    rel: 'noopener noreferrer',
    url: 'https://training.linuxfoundation.org/training/introduction-to-devsecops-for-managers-lfs180x/'
  },
  blog: {
    text: 'Blog',
    target: '_blank',
    rel: 'noopener noreferrer',
    url: 'https://medium.com/@Defense_Unicorns'
  },
  twitter: {
    text: 'Twitter',
    target: '_blank',
    rel: 'noopener noreferrer',
    url: 'https://mobile.twitter.com/defenseunicorns',
    icon: SocialIcons.Twitter
  },
  youtube: {
    text: 'Youtube',
    target: '_blank',
    rel: 'noopener noreferrer',
    url: 'https://www.youtube.com/channel/UCWCPckStyw2R0vC4zG68LIg',
    icon: SocialIcons.Youtube
  }
};

export const navLinks = [namedLinks.home, namedLinks.zarf, namedLinks.careers, namedLinks.contact];

export const footerLinks = [
  namedLinks.home,
  namedLinks.zarf,
  namedLinks.blog,
  namedLinks.podcast,
  namedLinks.careers,
  namedLinks.contact
];

export const socialsBarLinks = [
  namedLinks.github,
  namedLinks.linkedIn,
  namedLinks.twitter,
  namedLinks.podcast,
  namedLinks.youtube
];

export const namedLinks = {
  home: {
    url: "/",
    text: "Home",
  },
  zarfDocs: {
    target: "_self",
    text: "Docs",
    rel: "noopener noreferrer",
    url: "https://docs.zarf.dev/docs/zarf-overview",
  },
  github: {
    text: "Github",
    target: "_blank",
    rel: "noopener noreferrer",
    url: "https://github.com/defenseunicorns",
  },
  linkedIn: {
    text: "LinkedIn",
    target: "_blank",
    rel: "noopener noreferrer",
    url: "https://www.linkedin.com/company/defense-unicorns",
  },
  zarf: {
    text: "Zarf",
    target: "_blank",
    rel: "noopener noreferrer",
    url: "https://zarf.dev",
  },
  careers: {
    text: "Careers",
    target: "_blank",
    rel: "noopener noreferrer",
    url: "https://defense-unicorns.rippling-ats.com/",
  },
  contact: {
    text: "Contact",
    rel: "noopener noreferrer",
    url: "/contact",
  },
  podcast: {
    text: "Podcast",
    target: "_blank",
    rel: "noopener noreferrer",
    url: "https://anchor.fm/defenseunicorns",
  },
  courses: {
    text: "Courses",
    target: "_blank",
    rel: "noopener noreferrer",
    url: "https://training.linuxfoundation.org/training/introduction-to-devsecops-for-managers-lfs180x/",
  },
  blog: {
    text: "Blog",
    target: "_blank",
    rel: "noopener noreferrer",
    url: "https://medium.com/@Defense_Unicorns",
  },
};

export const navLinks = [
  namedLinks.home,
  namedLinks.zarf,
  {
    text: "Learn",
    menuItems: [namedLinks.podcast, namedLinks.courses, namedLinks.blog],
  },
  namedLinks.careers,
  namedLinks.contact,
];

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
};

export const navLinks = [
  namedLinks.home,
  namedLinks.zarf,
  namedLinks.careers,
  namedLinks.contact,
];

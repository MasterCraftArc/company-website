export const createTabPropsFromNavLink = (navLink, index) => {
  return {
    value: navLink.url,
    label: navLink.text,
    href: navLink.url,
    target: navLink.target,
    id: `${navLink.text}-${index || ""}`,
    rel: navLink.rel,
    title: navLink.text,
  };
};

export const isLocalLink = (url) => url.startsWith("/");

import NextLink from "next/link";

const Link = ({ external, href, children }) => {
  if (external)
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  return (
    <NextLink href={href}>
      {/* eslint-disable-next-line */}
      <a css={{ textDecoration: "none", cursor: "pointer" }}>{children}</a>
    </NextLink>
  );
};

export default Link;

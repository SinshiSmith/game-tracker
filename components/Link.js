import NextLink from "next/link";

const Link = ({ external, href, children, className }) => {
  if (external)
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  return (
    <NextLink href={href}>
      {/* eslint-disable-next-line */}
      <a
        css={{ textDecoration: "none", cursor: "pointer" }}
        className={className}
      >
        {children}
      </a>
    </NextLink>
  );
};

export default Link;

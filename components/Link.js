import NextLink from "next/link";
import Button from "./Button";

const Link = ({ external, href, children, className, onClick }) => {
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
        {onClick ? (
          <Button
            css={{
              padding: 0,
              margin: 0,
              background: "unset",
              fontSize: "inherit",
              color: "inherit",
              width: "100%",
              height: "100%",
            }}
            onClick={onClick}
          >
            {children}
          </Button>
        ) : (
          children
        )}
      </a>
    </NextLink>
  );
};

export default Link;

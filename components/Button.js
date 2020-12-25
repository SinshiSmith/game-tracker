const Button = ({ onClick, className, type = "type", children }) => (
  <button
    type={type}
    onClick={onClick}
    className={className}
    css={{
      background: "#E2E2E2",
      padding: "10px 20px",
      border: "unset",
      borderRadius: 4,
      cursor: "pointer",
      outline: "none",
    }}
  >
    {children}
  </button>
);

export default Button;

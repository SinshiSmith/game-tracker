const Input = ({ value, onChange, placeholder, className }) => (
  <input
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={className}
    css={{
      border: "none",
      background: "#404040",
      padding: "5px 10px",
      outline: "none",
      color: "#E2E2E2",
      width: "100%",
      maxWidth: 200,
      borderRadius: 3,
      fontFamily: "'PT Sans', sans-serif",
    }}
  />
);

export default Input;

import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import Input from "./Input";

const Search = ({ onSearch, onClear, delay = 500 }) => {
  const [value, setValue] = useState("");
  const searchValue = useDebounce(value, delay);

  useEffect(() => {
    if (searchValue) {
      onSearch(searchValue);
    } else {
      onClear();
    }
  }, [searchValue]);

  return (
    <Input
      value={value}
      onChange={({ target }) => setValue(target.value)}
      placeholder="Search Games"
      css={{
        maxWidth: "unset",
        padding: "15px 10px",
        borderRadius: "unset",
      }}
    />
  );
};

export default Search;

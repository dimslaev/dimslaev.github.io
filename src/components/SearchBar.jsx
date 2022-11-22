import React from "react";
import TextField from "@mui/joy/TextField";
import IconButton from "@mui/joy/IconButton";
import CloseIcon from "@mui/icons-material/HighlightOff";

// Hook
const useDebounce = (value, delay = 100) => {
  const [debouncedValue, setDebouncedValue] = React.useState(value);
  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};

export const SearchBar = ({ search, setSearch }) => {
  const [searchTerm, setSearchTerm] = React.useState(search);

  const onChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  React.useEffect(
    () => {
      if (debouncedSearchTerm) {
        setSearch(debouncedSearchTerm);
      } else {
        setSearch("");
      }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  );

  return (
    <TextField
      placeholder="Search"
      onChange={onChange}
      value={searchTerm}
      endDecorator={
        searchTerm && (
          <IconButton
            onClick={() => {
              setSearch("");
              setSearchTerm("");
            }}
          >
            <CloseIcon />
          </IconButton>
        )
      }
      sx={{
        width: 232,
      }}
    />
  );
};

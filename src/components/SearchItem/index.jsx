import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

SearchItem.propTypes = {
  onSubmit: PropTypes.func,
};

SearchItem.defaultProps = {
  onSubmit: null,
};

function SearchItem(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const typingRef = useRef(null);
  const handleValueChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (!onSubmit) return;

    if (typingRef.current) {
      clearTimeout(typingRef.current);
    }

    typingRef.current = setTimeout(() => {
      const FormValue = {
        q: value,
      };
      onSubmit(FormValue);
    }, 300);
  };
  return (
    <form>
      <input type="text" value={searchTerm} onChange={handleValueChange} />
    </form>
  );
}

export default SearchItem;

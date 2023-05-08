import React, { useState } from "react";
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SearchBar = ({onSubmit, searchQuery}) => {
  const [query, setQuery] = useState(searchQuery || "");
  const [disabledBtn, setDisabledBtn] = useState(false);

  const handleOnChange = (event) => {
    setQuery(event.target.value);
    setDisabledBtn(false);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (query.trim() === "") {
        toast.error("Search is a required field");
        return;
      }
    onSubmit(query);
    setDisabledBtn(true);
  }

    return (
        <form onSubmit={handleOnSubmit}>
            <input type="text" 
            name="query"
            value={query}
            onChange={handleOnChange}/>
            <button type="submit" disabled={disabledBtn}>Search</button>
            </form>
    )

}

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    searchQuery: PropTypes.string
}
import React from "react";
import "./Search.css";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchWords } from "../../async/words";

const SearchBar = () => {
  const dispatch = useDispatch();
  const selectedWord = useSelector((state) => state.word.word);
  const setNewWord = (word) => {
    dispatch({ type: "ADD_WORD", payload: word });
  };
  return (
    <div className="search-bar">
      <div className="input">
        <TextField
          id="outlined-search"
          label="Type here..."
          type="search"
          variant="outlined"
          onChange={(e) => setNewWord(e.target.value)}
        />
      </div>
      <Button
        onClick={(e) => dispatch(fetchWords(selectedWord))}
        variant="outlined"
        size="large"
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;

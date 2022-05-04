import React from "react";
import SearchBar from "../Search-Bar/SearchBar";
import "./Header.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    mode: "dark",
  },
});

const Header = ({ word, setWord, setSearch }) => {
  return (
    <div className="header">
      <ThemeProvider theme={darkTheme}>
        <span className="title">Word definition</span>
        <SearchBar word={word} setWord={setWord} setSearch={setSearch} />
      </ThemeProvider>
    </div>
  );
};

export default Header;

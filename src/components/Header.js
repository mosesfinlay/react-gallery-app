import React from "react";

import Logo from "./Logo";
import SearchForm from "./SearchForm";
import SearchNav from "./SearchNav";

const Header = ({ history, match }) => {
  return (
    <React.Fragment>
      <Logo />
      <SearchForm history={ history } />
      <SearchNav />
    </React.Fragment>
  );
};

export default Header;
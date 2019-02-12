import React from "react";

import Logo from "./Logo";
import SearchForm from "./SearchForm";
import SearchNav from "./SearchNav";

const Header = ({ navItems, history }) => {
  return (
    <React.Fragment>
      <Logo />
      <SearchForm history={ history } />
      <SearchNav navItems={ navItems } />
    </React.Fragment>
  );
};

export default Header;
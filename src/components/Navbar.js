import React from "react";

const Navbar = (props) => {
  const { onChangePage } = props;

  const onChangeMenuClick = (type) => {
    onChangePage(type);
  };

  return (
    <nav>
      <button onClick={() => onChangeMenuClick("planets")}>Planets</button>
      <button onClick={() => onChangeMenuClick("people")}>People</button>
    </nav>
  );
};
export default Navbar;

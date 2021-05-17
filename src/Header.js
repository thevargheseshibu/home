import React from "react";

import About from "./About/About";
import Center from "./Center";
import Contactme from "./Contactme";

const Header = (props) => {
  if (props.Lat == "1") {
    return (
      <div>
        <Center />
      </div>
    );
  }

  if (props.Lat == "2") {
    return (
      <div>
        <Contactme />
      </div>
    );
  }

  if (props.Lat == "3") {
    return (
      <div>
        <About />
      </div>
    );
  }
};

export default Header;

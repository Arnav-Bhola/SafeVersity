import React from "react";

import styles from "./Header.module.scss";
import background from "../../images/mac.jpg";

const Header = () => {
  return (
    <header
      className={styles["bgimg-1"]}
      id='home'
      style={{ backgroundImage: `url(${background})` }}
    >
      <div
        className='w3-display-left w3-text-white'
        style={{ padding: "48px" }}
      >
        <span className='w3-jumbo w3-hide-small'>Report something that matters</span>
        <br />
        <span className='w3-xxlarge w3-hide-large w3-hide-medium'>
          Start something that matters
        </span>
        <br />
        <span className='w3-large'>You have the resources and support at your fingertips.</span>
        <p>
          <a
            href='#about'
            className='w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off'
          >
            Learn more
          </a>
        </p>
      </div>
    </header>
  );
};

export default Header;

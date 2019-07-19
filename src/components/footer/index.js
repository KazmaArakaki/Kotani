import React from "react";

import styles from "./styles";

import constants from "../../utils/constants";

const FooterComponent = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.copyright}>
        © 2019 {constants.shopInfo.name}
      </p>
    </footer>
  );
};

export default FooterComponent;


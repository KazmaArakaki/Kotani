import React from "react";

import {
  FontAwesomeIcon,
} from "@fortawesome/react-fontawesome";

import {
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./styles";

import constants from "../../utils/constants";

const FooterComponent = () => {
  return (
    <footer style={styles.footer}>
      <a href="tel:0722375695" style={styles.contact}>
        <FontAwesomeIcon style={styles.contactIcon}
            icon={faMobileAlt} />

        お電話でのお問い合わせ
      </a>

      <p style={styles.copyright}>
        © 2019 {constants.shopInfo.name}
      </p>
    </footer>
  );
};

export default FooterComponent;


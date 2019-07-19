import React, {
  useEffect,
  useState,
} from "react";

import Gallery from "../../components/gallery";

import colors from "../../utils/colors";

import styles from "./styles";

const HeaderComponent = ({ style, onNavigationItemPress }) => {
  const [isMobileL, setIsMobileL] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [gallerySize, setGallerySize] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(min-width: 425px)").matches) {
      setIsMobileL(true);
    }

    if (window.matchMedia("(min-width: 768px)").matches) {
      setIsTablet(true);
    }

    const windowWidth = window.innerWidth < 768 ? window.innerWidth : 768;
    const windowHeight = window.innerHeight;

    setGallerySize(windowWidth * (windowWidth > windowHeight ? 0.56 : 0.72));
  }, []);

  if (isMobileL) {
    styles.navigationItem = {
      ...styles.navigationItem,
      padding: "16px",
      fontSize: "16px",
    };
  }

  return (
    <div style={style}>
      <header style={styles.header}>
        <div style={styles.infoContainer}>
          <h1 style={styles.title}>
            小谷はり灸所
          </h1>

          <ul style={styles.infoList}>
            <li style={styles.infoItem}>
              072-237-5695

              <a href="tel:0722375695" style={styles.infoAction}>
                [TEL]
              </a>
            </li>

            <li style={styles.infoItem}>
              堺市東区大美野 158-23

              <a href="https://goo.gl/maps/zokENZeg2BzyzTsZ9" target="_blank" style={styles.infoAction}>
                [MAP]
              </a>
            </li>
          </ul>
        </div>

        <div style={styles.galleryContainer}>
          <Gallery style={{
                marginLeft: "auto",
                width: `${gallerySize}px`,
                height: `${gallerySize}px`,
              }}
              imageSources={[
                "/images/DSC00662.JPG",
                "/images/DSC00667.JPG",
                "/images/DSC00671.JPG",
                "/images/DSC00664.JPG",
                "/images/DSC00668.JPG",
                "/images/DSC00672.JPG",
                "/images/DSC00665.JPG",
                "/images/DSC00669.JPG",
                "/images/DSC00673.JPG",
                "/images/DSC00666.JPG",
                "/images/DSC00670.JPG",
                "/images/DSC00674.JPG",
              ]} />
        </div>
      </header>

      <nav style={styles.navigationContainer}>
        <ul style={styles.navigationList}>
          <li style={{
                ...styles.navigationItem,
                borderLeft: `solid 1px ${colors.beige}`,
                borderRight: `solid 1px ${colors.beige}`,
              }}
              onClick={() => { onNavigationItemPress("hours"); }}>
            診療時間
          </li>

          <li style={{
                ...styles.navigationItem,
                borderRight: `solid 1px ${colors.beige}`,
              }}
              onClick={() => { onNavigationItemPress("subjects"); }}>
            診療科目
          </li>

          <li style={{
                ...styles.navigationItem,
                borderRight: `solid 1px ${colors.beige}`,
              }}
              onClick={() => { onNavigationItemPress("bill"); }}>
            診療費
          </li>

          <li style={{
                ...styles.navigationItem,
                borderRight: `solid 1px ${colors.beige}`,
              }}
              onClick={() => { onNavigationItemPress("access"); }}>
            所在地
          </li>
        </ul>
      </nav>
    </div>
  );
};

HeaderComponent.defaultProps = {
  style: {},
  onNavigationItemPress: (target) => {},
};

export default HeaderComponent;


import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";
import Map from "../../components/map";

import colors from "../../utils/colors";

const MainPage = ({}) => {
  const [isTablet, setIsTablet] = useState(false);
  
  useEffect(() => {
    setIsTablet(window.matchMedia("(min-width: 768px)").matches);
  }, []);

  if (isTablet) {
    styles.sectionHeader = {
      ...styles.sectionHeader,
      paddingRight: "76px",
      paddingLeft: "76px",
      maxWidth: "616px",
      fontSize: "46px",
    };

    styles.sectionContent = {
      ...styles.sectionContent,
      paddingRight: "76px",
      paddingLeft: "76px",
      maxWidth: "616px",
      fontSize: "20px",
    };
  }

  const scrollToSectionHeader = (target) => {
    const targetRect = (() => {
      if (target === "hours") {
        return hoursSectionHeader.current;
      }

      if (target === "subjects") {
        return subjectsSectionHeader.current;
      }

      if (target === "bill") {
        return billSectionHeader.current;
      }

      if (target === "access") {
        return accessSectionHeader.current;
      }
    })().getBoundingClientRect();

    window.scrollTo(targetRect.x, targetRect.y);
  };

  const hoursSectionHeader = useRef();
  const subjectsSectionHeader = useRef();
  const billSectionHeader = useRef();
  const accessSectionHeader = useRef();

  return (
    <>
      <Header style={{ marginBottom: "8vw" }}
          onNavigationItemPress={scrollToSectionHeader} />

      <p style={{
        ...styles.sectionContent,
        textAlign: "center",
      }}>
        ４年間本場・台湾で修行をした女性鍼灸師が痛くない鍼灸治療をいたします。
      </p>

      <h2 style={styles.sectionHeader}
          ref={hoursSectionHeader}>
        診療時間
      </h2>

      <p style={styles.sectionContent}>
        午　前： 9:00 - 12:30

        <br />

        午　後： 15:00 - 21:00

        <br />

        休診日：木・土・日曜日および祝日
      </p>

      <h2 style={styles.sectionHeader}
          ref={subjectsSectionHeader}>
        診療科目
      </h2>

      <p style={styles.sectionContent}>
        肩こり・腰痛各種痛み
        <br />
        生理不良・逆子治療
        <br />
        自律神経失調・精神不安
      </p>

      <h2 style={styles.sectionHeader}
          ref={billSectionHeader}>
        診療費
      </h2>

      <p style={styles.sectionContent}>
        4000円（初診料 4500）
      </p>

      <h2 style={styles.sectionHeader}
          ref={accessSectionHeader}>
        所在地
      </h2>

      <p style={styles.sectionContent}>
        〒599-8126

        <br />

        大阪府堺市東区大美野 158-23

        <br />

        <a href="https://goo.gl/maps/TACKWyvRAxi3q37e9" target="_blank">
          南海北野田駅からバスで16分
        </a>
      </p>

      <Map />

      <Footer />
    </>
  );
};

const styles = {
  sectionHeader: {
    marginTop: "12vw",
    marginRight: "auto",
    marginBottom: "2vw",
    marginLeft: "auto",
    paddingRight: "10vw",
    paddingLeft: "10vw",
    maxWidth: "calc(768px - 20vw)",
    color: colors.darkBrown,
    lineHeight: 1.5,
    fontFamily: "\"Sawarabi Mincho\", serif",
    fontSize: "6vw",
    fontWeight: 800,
  },

  sectionContent: {
    marginTop: "1vw",
    marginRight: "auto",
    marginBottom: "8vw",
    marginLeft: "auto",
    paddingRight: "10vw",
    paddingLeft: "10vw",
    maxWidth: "calc(768px - 20vw)",
    color: colors.darkBrown,
    lineHeight: 1.5,
    fontFamily: "\"Sawarabi Mincho\", serif",
    fontSize: "4vw",
    fontWeight: 400,
  },
};

export default MainPage;


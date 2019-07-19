import colors from "../../utils/colors";

const styles = {
  header: {
    position: "relative",
    margin: "0 auto",
    maxWidth: "768px",
  },

  infoContainer: {
    position: "absolute",
    left: "16px",
    top: "50%",
    zIndex: 1,
  },

  galleryContainer: {
  },

  navigationContainer: {
    backgroundColor: colors.darkBrown,
  },

  title: {
    margin: 0,
    height: "24px",
    color: colors.darkBrown,
    lineHeight: "24px",
    textAlign: "right",
    fontFamily: "\"Sawarabi Mincho\", serif",
    fontSize: "24px",
    fontWeight: 400,
    textShadow: [-2, 0, 2].map((v) => {
      return [-2, 0, 2].map((h) => {
        return `${h}px ${v}px 4px ${colors.beige}`;
      });
    }).join(", "),
  },

  infoList: {
    margin: 0,
    marginTop: "16px",
    padding: 0,
    listStyle: "none",
  },

  infoItem: {
    margin: 0,
    marginTop: "8px",
    height: "16px",
    color: colors.darkBrown,
    lineHeight: "16px",
    textAlign: "right",
    fontFamily: "\"Sawarabi Mincho\", serif",
    fontSize: "16px",
    fontWeight: 400,
    textShadow: [-2, 0, 2].map((v) => {
      return [-2, 0, 2].map((h) => {
        return `${h}px ${v}px 4px ${colors.beige}`;
      });
    }).join(", "),
  },

  infoAction: {
    marginLeft: "8px",
    fontSize: "12px",
  },

  navigationList: {
    display: "flex",
    margin: "0 auto",
    padding: 0,
    maxWidth: "768px",
    listStyle: "none",
  },

  navigationItem: {
    flex: 1,
    display: "block",
    margin: 0,
    padding: "4vw",
    color: colors.beige,
    lineHeight: 1,
    textAlign: "center",
    fontFamily: "\"Sawarabi Mincho\", serif",
    fontSize: "4vw",
    fontWeight: 400,
  },
};

export default styles;


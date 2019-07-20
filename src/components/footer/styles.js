import colors from "../../utils/colors";

const styles = {
  footer: {
    backgroundColor: colors.darkBrown,
  },

  contact: {
    position: "sticky",
    bottom: 0,
    display: "block",
    margin: "0",
    paddingTop: "24px",
    paddingRight: "8px",
    paddingBottom: "24px",
    paddingLeft: "8px",
    height: "4vw",
    color: colors.beige,
    lineHeight: "4vw",
    textAlign: "center",
    fontFamily: "\"Sawarabi Mincho\", serif",
    fontSize: "4vw",
    fontWeight: 800,
  },

  contactIcon: {
    marginRight: "4px",
  },

  copyright: {
    margin: "0",
    paddingTop: "8px",
    paddingRight: "8px",
    paddingBottom: "8px",
    paddingLeft: "8px",
    height: "12px",
    color: colors.beige,
    lineHeight: "12px",
    textAlign: "center",
    fontFamily: "\"Sawarabi Mincho\", serif",
    fontSize: "12px",
    fontWeight: 400,
  },
};

export default styles;


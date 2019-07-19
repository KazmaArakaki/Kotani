import React from "react";
import Helmet from "react-helmet";

import constants from "../utils/constants";

const SEO = ({}) => {
  return (
    <Helmet
        htmlAttributes={{ lang: "ja" }}
        title={constants.shopInfo.name}
        titleTemplate={"%s"}
        meta={[
          {
            name: "description",
            content: "大阪府堺市の鍼灸治療院・小谷はり灸所では４年間本場・台湾で修行をした女性鍼灸師が痛くない鍼灸治療をいたします。",
          },
          {
            property: "og:title",
            content: constants.shopInfo.name,
          },
          {
            property: "og:description",
            content: "大阪府堺市の鍼灸治療院・小谷はり灸所では４年間本場・台湾で修行をした女性鍼灸師が痛くない鍼灸治療をいたします。",
          },
          {
            property: "og:type",
            content: "website",
          },
          {
            name: "twitter:card",
            content: "summary",
          },
          {
            name: "twitter:creator",
            content: "@KazmaArakaki",
          },
          {
            name: "twitter:title",
            content: constants.shopInfo.name,
          },
          {
            name: "twitter:description",
            content: "大阪府堺市の鍼灸治療院・小谷はり灸所では４年間本場・台湾で修行をした女性鍼灸師が痛くない鍼灸治療をいたします。",
          },
        ]}
        link={[
          {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css?family=Sawarabi+Mincho&display=swap",
          },
        ]}
      />
  )
};

SEO.defaultProps = {
};

export default SEO;


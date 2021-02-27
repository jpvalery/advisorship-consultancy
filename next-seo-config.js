const title = "𝔊 - Advisorship / Consultancy";
const description =
  "Advisorship and consultancy in Growth Operations and Customer Success";

const SEO = {
  title,
  description,
  canonical: "https://growthmontreal.com",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://growthmontreal.com",
    title,
    description,
    images: [
      {
        url: "https://jpvalery.me/static/images/jp-valery-banner.jpg",
        alt: title,
      },
    ],
  },
  twitter: {
    handle: "@jpvalery",
    site: "jpvalery.com",
    cardType: "summary_large_image",
  },
};

export default SEO;

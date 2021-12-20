const title = "𝔊 - Growth Advisorship / Consultancy";
const description =
  "Advisorship and consultancy in Growth Operations and Customer Success";
const siteUrl = "https://growthmontreal.com";

const SEO = {
  title: title,
  description: description,
  canonical: siteUrl,
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    title: title,
    description: description,
    images: [
      {
        url: "https://growthmontreal.com/static/og-banner.jpg",
        width: 1920,
        height: 1280,
        alt: "Open Graph Image",
      },
    ],
  },
  twitter: {
    handle: "@jpvalery",
    site: siteUrl,
    cardType: "summary_large_image",
  },
};

export default SEO;

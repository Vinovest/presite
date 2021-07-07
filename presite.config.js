const { createClient } = require("contentful");

const clientSettings = {};
clientSettings.host = "preview.contentful.com";
clientSettings.accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
clientSettings.space = process.env.CONTENTFUL_SPACE;

const contentfulClient = createClient(clientSettings);
const baseParams = {
    content_type: "pageBlogPost",
    select: "fields.blogAuthor,fields.heroImage,fields.slug,fields.postTitle,fields.postDate",
    order: "-fields.postDate",
};

const routes = {
    whyWine: "/why-wine",
    aboutUs: "/about-us",
    council: "/advisory-council",
    advisors: "/advisors",
    contactUs: "/contact-us",
    howItWorks: "/how-it-works",
    sustainability: "/sustainability",
    pricing: "/pricing",
    adSlider: "/advisory-council",
    satisfaction: "/the-vinovest-satisfaction-guarantee",
    wineFutures: "/wine-futures",
    terms: "/terms-conditions",
    vinovestHome: "/home",
    vinovest100Index: "/vinovest-100-index",
    privacyPolicy: "/privacy-policy",
    careers: "/careers",
    contactSupport: "/contact-support",
    help: "/help",
    press: "/press",
    helpCategory: "/help-category",
    blog: "/blog",
    accessibility: "/accessibility",
    // old paths for redirecting purposes
    support: "/support",
    supportCategory: "/support-category",
};
let blogPosts = [];
const getRoutes = async function ({ params = {} }) {
    const data = await contentfulClient.getEntries({ ...baseParams, ...params });

    // console.log("GETTING BLOG POSTS", data);
    const blogRoutes = data.items.map(({ fields: { slug } }) => `/blog/${slug}`);
    blogPosts = [...blogPosts, ...blogRoutes];
    if (data.total > data.limit) {
        getRoutes({ params: { skip: data.limit + data.skip } });
    }
    // fs.writeFileSync("contentful.json", JSON.stringify(blogPosts, null, 2));
    const allRoutes = [...Object.values(routes), ...blogRoutes];
    console.log("all routjs", allRoutes);
    return allRoutes;
};

const allR = async () => {
    const p = await getRoutes({});
    console.log("COM", p);
    return p;
};

let presite;

module.exports = {
    timeout: 99999,
    puppeteerOptions: { args: ["--headless", "--no-sandbox"] },
    maxConcurrent: 2,
    routes: ["/", "/blog"],
    crawlLinks: true,
};

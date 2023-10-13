import "@/styles/globals.scss";
import Head from "next/head";


export default function App({ Component, pageProps }) {
    return(
        <>
        <Meta
          name="Outernet ~ July 28th to 31st 2023 in Vermont" // site name
          title="Outernet ~ July 28th to 31st 2023 in Vermont" // page title
          description="In 2023 we ventured out to the Northeast Kingdom of Vermont for Outernet — a four-day experimental coding/camping trip. Together, we turned a semi-abandoned campsite into a bustling hacker oasis." // page description
          image="https://cloud-b4jjtkwg1-hack-club-bot.vercel.app/0github_screenshot__1_..png" // large summary card image URL
          color="#ec3750" // theme color
         />
        <Component {...pageProps} />
    </>);
}


const makeTitle = (title, name) =>
  title === name ? title : `${title} – ${name}`

const Meta = ({
  name = 'Hack Club', // site name
  title = 'Hack Club', // page title
  description,
  image,
  color = '#ec3750',
  manifest = 'https://assets.hackclub.com/favicons/site.webmanifest',
  children
}) => (
  <Head>
    <meta key="og_locale" property="og:locale" content="en_US" />
    <meta key="og_type" property="og:type" content="website" />
    <meta key="og_site" property="og:site_name" content={name} />
    <meta key="tw_site" name="twitter:site" content="@hackclub" />
    <title key="title">{makeTitle(title, name)}</title>
    <meta key="og_title" property="og:title" content={makeTitle(title, name)} />
    <meta
      key="tw_title"
      name="twitter:title"
      content={makeTitle(title, name)}
    />
    {description && (
      <>
        <meta key="desc" name="description" content={description} />
        <meta key="og_desc" property="og:description" content={description} />
        <meta key="tw_desc" name="twitter:description" content={description} />
      </>
    )}
    {image && (
      <>
        <meta key="og_img" property="og:image" content={image} />
        <meta key="tw_card" name="twitter:card" content="summary_large_image" />
        <meta key="tw_img" name="twitter:image" content={image} />
      </>
    )}
    <meta key="theme_color" name="theme-color" content={color} />
    <meta key="tile_color" name="msapplication-TileColor" content={color} />
    <link
      rel="shortcut icon"
      type="image/png"
      href="/favicon.png"
    />
    <link
      rel="icon"
      type="image/png"
      href="/favicon.png"
    />
    <link
      rel="favicon"
      type="image/png"
      href="/favicon.png"
    />
    {manifest && <link key="manifest" rel="manifest" href={manifest} />}
    {children}
    <link id="rainbow" rel="stylesheet" href="/rainbow.css" media="(min-width: 100000000000000000000000000px)"/>
    <script src="//cdn.rawgit.com/namuol/cheet.js/master/cheet.min.js" type="text/javascript"></script>
    <script src="/rainbow.js"></script>
  </Head>
)


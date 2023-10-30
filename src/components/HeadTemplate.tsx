import Head from "next/head";

interface HeadProps {
  subtitle?: string;
}

export default function HeadTemplate(props: HeadProps) {
  const title = props.subtitle
    ? `EEAAO Mini Puzzle Hunt | ${props.subtitle}`
    : "EEAAO Mini Puzzle Hunt";
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="EEAAO-themed mini puzzle hunt" />
      <meta
        name="keywords"
        content="EEAAO, Everything Everywhere All At Once, Puzzle, Hunt, Game"
      />
      <meta property="og:title" content="EEAAO Mini Puzzle Hunt" />
      <meta
        property="og:image"
        content="https://eeaao-mini-hunt.vercel.app/Thumbnail.png"
      />
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
}

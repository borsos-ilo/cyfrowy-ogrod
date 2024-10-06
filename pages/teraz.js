import Layout from "@/components/Layout";
import RandomColoredLinksContent from "@/components/RandomColoredLinksContent";
import Image from "next/image";

function stripHtml(html) {
  return html.replace(/<[^>]*>/g, '');
}

export default function Now({ pageData }) {
  const { title, content, update, featuredImage } = pageData[0].node;
  const ogTitle = title + " - co u mnie słychać?";
  const currentUrl = "/teraz";
  const cleanDescription = stripHtml(content).substring(0, 200) + '...';

  return (
    <Layout 
      title={ogTitle}
      description={cleanDescription}
      ogImage={featuredImage.node.sourceUrl}
      currentUrl={currentUrl}
    >
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-center font-heading">{title}</h1>
        <div className="flex flex-wrap -mx-3">
          <div className="md:w-2/5 px-3 mb-6 flex items-center justify-center">
              <div className="w-full flex items-center justify-center">
              <Image
                src={featuredImage.node.sourceUrl}
                alt={featuredImage.node.altText || title}
                width={400}
                height={400}
                layout="intrinsic"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="md:w-3/5 px-3 mb-6">
              <RandomColoredLinksContent content={content} />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
              <h2 className="text-2xl font-semibold mb-4 font-heading">Muzyka</h2>
              <RandomColoredLinksContent content={update.music} />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
              <h2 className="text-2xl font-semibold mb-4 font-heading">Książki</h2>
              <RandomColoredLinksContent content={update.books} />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
              <h2 className="text-2xl font-semibold mb-4 font-heading">Filmy & seriale</h2>
              <RandomColoredLinksContent content={update.moviesSeries} />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
              <h2 className="text-2xl font-semibold mb-4 font-heading">Projekty</h2>
              <RandomColoredLinksContent content={update.projects} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.WORDPRESS_API_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query GetNow {
          update(first: 1) {
            edges {
              node {
                title
                content
                update {
                  books
                  music
                  moviesSeries
                  projects
                }
                featuredImage {
                  node {
                    altText
                    sourceUrl
                  }
                }
              }
            }
          }
        }
        `,
    }),
  });

  const { data } = await response.json();

  return {
    props: {
      pageData: data.update.edges,
    },
  };
}

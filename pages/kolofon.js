import Layout from '@/components/Layout';
import RandomColoredLinksContent from '@/components/RandomColoredLinksContent';

export default function Colophone({ pageData }) {
  const { title, content } = pageData;

  return (
    <Layout title={title}>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
            <RandomColoredLinksContent content={content} />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.WORDPRESS_API_URL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query GetColophpnePage {
          pageBy(uri: "kolofon") {
            id
            title
            content
          }
        }
      `
    })
  });

  const { data } = await response.json();

  return {
    props: {
      pageData: data.pageBy
    }
  }
}
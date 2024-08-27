import Layout from '@/components/Layout';

function AboutPage({ post }) {
  if (!post) return <p>Nie znaleziono strony</p>;

  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ res }) {
  const query = `
    query GetAboutPage {
      postBy(slug: "old-content") {
        id
        title
        content
      }
    }
  `;

  try {
    const response = await fetch(process.env.WORDPRESS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const { data } = await response.json();

    // Ustawiamy nagłówki cache
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=3600, stale-while-revalidate=86400'
    );

    return {
      props: {
        post: data.postBy
      }
    };
  } catch (error) {
    console.error('Błąd podczas pobierania danych:', error);
    return {
      props: {
        post: null
      }
    };
  }
}

export default AboutPage;
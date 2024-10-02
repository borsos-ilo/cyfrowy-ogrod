import Layout from '@/components/Layout'
import PostCard from '@/components/PostCard'

export default function Home({ posts = [] }) {  // Dodajemy domyślną wartość
  return (
    <Layout 
      title="Strona główna"
      description="Mój cyfrowy ogród - osobisty zbiór różnych elementów świata, w którym żyjemy, które wyjaśniam sobie po to, żeby lepiej je zrozumieć, a przez to móc z ich pomocą doświadczać świata w coraz bogatszy sposób."
    >
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold font-heading mb-4">Mój cyfrowy ogród</h1>
        <p className="text-xl mb-8 font-body">To miejsce to mój cyfrowy strumień świadomości. Płynie on dość swobodnie, meandrując między różnymi tematami, które mnie interesują.</p>
        {posts.length > 0 ? (
          <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                featuredImage={post.featuredImage?.node?.sourceUrl}
                slug={post.slug}
              />
            ))}
          </section>
        ) : (
          <p>No posts available at the moment.</p>
        )}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  try {
    console.log('Fetching posts...');
    const response = await fetch(`${process.env.WORDPRESS_API_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query GetPosts {
            posts {
              nodes {
                id
                title
                excerpt
                slug
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
              }
            }
          }
        `
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { data } = await response.json();
    console.log('Received data:', data);

    if (!data || !data.posts || !data.posts.nodes) {
      throw new Error('Invalid data structure received from the API');
    }

    return {
      props: {
        posts: data.posts.nodes,
      },
    }
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      props: {
        posts: [],
      },
    }
  }
}
import { useRouter } from 'next/router'
import Image from 'next/image';
import { gql } from '@apollo/client';
import Layout from '@/components/Layout'
import RandomColoredLinksContent from '@/components/RandomColoredLinksContent';
import StatusCard from '@/components/StatusCard';
import { GET_POST } from '@/lib/queries';
import { Heart } from 'lucide-react';

function stripHtml(html) {
  if (typeof window === 'undefined') {
    return html.replace(/<[^>]*>?/gm, '');
  }
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}




export default function Post({ post }) {
  const router = useRouter()

  if (router.isFallback) {
    return <Layout><p>Ładowanie...</p></Layout>;
  }

  if (!post) return <Layout><p>Nie znaleziono posta</p></Layout>;

  const excerpt = post.excerpt ? stripHtml(post.excerpt).substring(0, 160) : '';
  const ogImage = post.featuredImage?.node?.sourceUrl || '';
  const currentUrl = `${post.slug}`;

  return (
    <Layout 
      title={post.title}
      description={excerpt}
      ogImage={post.featuredImage.node.sourceUrl}
      currentUrl={currentUrl}
    >
      <h1 className='text-4xl font-bold mb-4 mt-6 font-heading'>
        {post.title}
      </h1>
      
      <div>
      {post.featuredImage && (
          <div className="mb-6">
            <Image
              src={post.featuredImage.node.sourceUrl}
              alt={post.featuredImage.node.altText || post.title}
              width={800}
              height={400}
              layout="responsive"
              className="rounded-lg"
            />
          </div>
        )}
      </div>
      <StatusCard
        statusRozwoju={post.polaPostowCyfrowyOgrod.statusRozwoju}
        datePublished={post.date} 
        dateModified={post.modified}
      />
      <article className="wordpress-content">
        <RandomColoredLinksContent content={post.content}/>
      </article>
      <div className='flex justify-end items-center mt-4'>
        <span className="mr-2 text-sm font-body">Podoba Ci się ten post?</span>
        <Heart color="#ad1010" />
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {

  try {
    const response = await fetch(`${process.env.WORDPRESS_API_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query GetSlugs {
            posts {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      })
    });

    const { data } = await response.json()

    const paths = data.posts.edges.map(({node}) => ({
      params: { slug: node.slug },
    }));


    return {
      paths,
      fallback: 'blocking',
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return { paths: [], fallback: 'blocking' };
  }
}

export async function getStaticProps({ params }) {

  try {
    const  response  = await fetch(`${process.env.WORDPRESS_API_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: GET_POST,
        variables: { slug: params.slug }
      })
    });

    const { data } = await response.json()
    if (!data.post) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        post: data.post,
      },
    }
  } catch (error) {
    console.error('Error fetching post:', error);
    return {
      notFound: true,
    }
  }
}
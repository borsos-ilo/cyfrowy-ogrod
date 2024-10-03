import { useRouter } from 'next/router'
import { useQuery } from "@apollo/client";
import Image from 'next/image';
import Head from 'next/head';
import Layout from '@/components/Layout'
import { GET_POST } from "@/lib/queries";
import RandomColoredLinksContent from '@/components/RandomColoredLinksContent';
import StatusCard from '@/components/StatusCard';

function stripHtml(html) {
  if (typeof window === 'undefined') {
    return html.replace(/<[^>]*>?/gm, '');
  }
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

export default function Post() {
  const router = useRouter()
  const { slug } = router.query
  
  const { loading, error, data } = useQuery(GET_POST, {
    variables: { slug },
    skip: !slug,
  });

  if (loading) return <Layout><p>Ładowanie...</p></Layout>;
  if (error) return <Layout><p>Błąd: {error.message}</p></Layout>;
  if (!data?.post) return <Layout><p>Nie znaleziono posta</p></Layout>;

  const excerpt = data.post.excerpt ? stripHtml(data.post.excerpt).substring(0, 160) : '';
  const ogImage = data.post.featuredImage ? data.post.featuredImage.node.sourceUrl : '';
  const postUrl = `https://ilonaborsos.com/posts/${slug}`;

  return (
    <Layout title={data.post.title}>
      <Head>
        <meta property="og:title" content={data.post.title} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={postUrl} />
        {ogImage && <meta property="og:image" content={ogImage} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.post.title} />
        <meta name="twitter:description" content={excerpt} />
        {ogImage && <meta name="twitter:image" content={ogImage} />}
      </Head>
      <article className="wordpress-content">
        <h1>{data.post.title}</h1>
        {data.post.featuredImage && (
          <div className="mb-6">
            <Image
              src={data.post.featuredImage.node.sourceUrl}
              alt={data.post.featuredImage.node.altText || data.post.title}
              width={800}
              height={400}
              layout="responsive"
              className="rounded-lg"
            />
          </div>
        )}
        <StatusCard
          statusRozwoju={data.post.polaPostowCyfrowyOgrod.statusRozwoju}
          datePublished={data.post.date} 
          dateModified={data.post.modified}
        />
        <RandomColoredLinksContent content={data.post.content}/>
      </article>
    </Layout>
  )
}
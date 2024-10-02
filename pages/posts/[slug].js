import { useRouter } from 'next/router'
import { useQuery } from "@apollo/client";
import Image from 'next/image';
import Layout from '@/components/Layout'
import { GET_POST } from "@/lib/queries";
import RandomColoredLinksContent from '@/components/RandomColoredLinksContent';
import StatusCard from '@/components/StatusCard';

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

  return (
    <Layout title={data.post.title}>
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
import { useRouter } from 'next/router'
import { useQuery } from "@apollo/client";
import Layout from '@/components/Layout'
import { GET_PAGE } from "@/lib/queries";

export default function Page() {
  const router = useRouter()
  const { slug } = router.query
  
  const { loading, error, data } = useQuery(GET_PAGE, {
    variables: { slug },
    skip: !slug,
  });

  if (loading) return <Layout><p>Ładowanie...</p></Layout>;
  if (error) return <Layout><p>Błąd: {error.message}</p></Layout>;
  if (!data?.page) return <Layout><p>Nie znaleziono strony</p></Layout>;

  return (
    <Layout title={data.page.title}>
      <h1 className="text-4xl font-bold mb-4">{data.page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.page.content }} />
    </Layout>
  )
}
import Layout from "@/components/Layout";
import RandomColoredLinksContent from "@/components/RandomColoredLinksContent";

export default function Now ({pageData}) {
    console.log(JSON.stringify(pageData))
    const {title, content} = pageData[0].node;
    // const {books, music, moviesSeries, projects} = update
    return (
        <Layout title={title}>
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8">
                <RandomColoredLinksContent content={content} />
                </div>
            </div>
        </Layout>
    )

}



export async function getStaticProps() {
    const response = await fetch(`${process.env.WORDPRESS_API_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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
                    }
                }
            }
            }
        `
      })
    });
  
    const { data } = await response.json();
  
    return {
      props: {
        pageData: data.update.edges
      }
    }
  }
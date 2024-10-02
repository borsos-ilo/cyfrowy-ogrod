import Image from 'next/image'
import Link from 'next/link'

const stripHtml = (html) => {
  return html.replace(/<[^>]*>?/gm, '');
}

const truncate = (str, num) => {
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + '...'
}

const PostCard = ({ title, excerpt, featuredImage, slug }) => {
  const cleanExcerpt = truncate(stripHtml(excerpt), 1000) // Ograniczamy do 100 znaków

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      {featuredImage && (
        <Image
          src={featuredImage}
          alt={title}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-xl font-bold font-heading mb-2">{title}</h2>
        <p className="text-gray-700 font-body mb-4">{cleanExcerpt}</p>
        <Link href={`/posts/${slug}`} className="text-blue-600 font-body hover:underline">
          Czytaj więcej
        </Link>
      </div>
    </div>
  )
}

export default PostCard
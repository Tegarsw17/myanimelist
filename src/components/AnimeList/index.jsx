import Image from 'next/image'
import Link from 'next/link'

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.data?.map((anime, index) => {
        return (
          <Link
            href={`/anime/${anime.mal_id}`}
            className="cursor-pointer hover:text-color-accent text-color-primary transition-all"
            key={index}
          >
            <Image
              src={anime.images.webp.image_url}
              alt="default.png"
              width={350}
              height={350}
              className="w-full h-auto max-h-64 object-cover"
            />
            <h3 className="font-bold md:text-xl tex-md p-4 ">{anime.title}</h3>
          </Link>
        )
      })}
    </div>
  )
}

export default AnimeList

import AnimeList from '@/components/AnimeList'
import Header from '@/components/AnimeList/Header'
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from '@/libs/api-libs'
const Page = async () => {
  const topAnime = await getAnimeResponse('top/anime', 'limit=8')
  const topAnime22 = await getAnimeResponse('recommendations/anime')
  let recomendedAnime = await getNestedAnimeResponse(
    'recommendations/anime',
    'entry'
  )
  recomendedAnime = reproduce(recomendedAnime, 4)

  return (
    <>
      <section>
        <Header
          title="Paling Populer"
          linkHref="/populer"
          linkTitle="See All"
        />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Rekomendasi" />
        <AnimeList api={recomendedAnime} />
      </section>
    </>
  )
}

export default Page

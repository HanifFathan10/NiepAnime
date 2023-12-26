import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduceData,
} from "../libs/api-anime";
const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendationsAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recommendationsAnime = reproduceData(recommendationsAnime, 8);
  return (
    <>
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Rekomendasi" />
        <AnimeList api={recommendationsAnime} />
      </section>
    </>
  );
};

export default Page;

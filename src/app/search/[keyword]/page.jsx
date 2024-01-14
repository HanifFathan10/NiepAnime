import { getAnimeResponse } from "@/libs/api-anime";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyowrd = decodeURI(keyword);
  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyowrd}`);
  return (
    <section className="min-h-screen">
      <Header title={`Pencarian untuk ${decodedKeyowrd}...`} />
      <AnimeList api={searchAnime} />
    </section>
  );
};

export default Page;

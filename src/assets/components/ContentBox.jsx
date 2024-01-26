import { getAllMovies } from "../data/movies";
import SingleContent from "./singleContent";

export default function ContentBox() {
  const data = getAllMovies();

  return (
    <>
      <div className="content">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {data.map((single) => (
            <SingleContent key={single.id} single={single} />
          ))}
        </div>
      </div>
    </>
  );
}

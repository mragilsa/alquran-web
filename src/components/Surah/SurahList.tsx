import SurahCard from "./SurahCard";
import type { Surah } from "../../types/surah";

type SurahListProps = {
  surahs: Surah[];
};

function SurahList({ surahs }: SurahListProps) {
  return (
    <div className="flex flex-col gap-4 p-5">
      {surahs.map((surah) => (
        <SurahCard key={surah.nomor} surah={surah} />
      ))}
    </div>
  );
}

export default SurahList;

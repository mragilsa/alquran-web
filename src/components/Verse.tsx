type VerseProps = {
    verse: string;
    surah: string;
}

function Verse({verse, surah}: VerseProps) {
    return(
        <div className="bg-[url('/src/assets/VerseBackgroundImage.png')] bg-cover bg-no-repeat p-4 min-h-[155px] rounded-2xl text-left flex flex-col justify-between gap-2">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-light md:text-base">📖 Your daily verse</p>
          <p className="text-sm text-light font-regular md:text-base">{verse}</p>
        </div>
        <p className="text-xs text-light font-light md:text-base">{surah}</p>
        </div>
    );
}

export default Verse
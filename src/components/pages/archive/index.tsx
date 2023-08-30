import ArchiveContent from "@/components/common/archiveContent";
import ArchiveTitle from "@/components/common/archiveTitle";
import ImageSlide from "@/components/common/imageSlide";
import "@splidejs/splide/css";
import fs from "fs";
import path from "path";
interface ArchiveProps {
  archive: string;
}

const title = {
  "23SS": "A LUK++++++ GEEK",
  "23FW": "LUK-OUT SYUNDROME",
};
const content = {
  "23SS":
    "This season has a message of encouragement for a man who is utterly obsessed with his LUK.",
  "23FW": `Dressing up hard can take you to 'LUK-OUT' just like a burnout from hard work.

  Just because you take brakes, doesn’t mean your LUK is broken`,
};

const Archive = ({ archive }: ArchiveProps) => {
  const dirPath = path.join(process.cwd(), `public/${archive}`);
  console.log(dirPath);
  console.log(images);
  const images = fs.existsSync(dirPath) ? fs.readdirSync(dirPath) : [];
  return (
    <div className="text-[#FDE11D]">
      <div className="h-full  w-full bg-black">
        <ImageSlide
          archive={archive}
          images={images.map((img) => `/${archive}/${img}`)}
        />
        <ArchiveTitle title={title[archive as keyof typeof title] ?? ""} />
        <ArchiveContent
          content={content[archive as keyof typeof content] ?? ""}
        />
      </div>
    </div>
  );
};

export default Archive;

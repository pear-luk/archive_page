import TopBar from "@/components/layout/TopBar";
import Image from "next/image";
import Link from "next/link";

const Main = () => {
  return (
    <div className="h-full  w-full bg-black">
      <TopBar />
      <div className="flex  justify-center p-12">
        <Link href="/about">
          <Image
            src="/main_img.svg"
            width={200}
            height={298}
            alt="main"
            className="cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};
export default Main;

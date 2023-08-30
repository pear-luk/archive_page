import Image from "next/image";

interface TopBarProps {
  isVisible?: boolean;
  isImage?: boolean;
}

const TopBar = ({ isVisible = true, isImage = false }: TopBarProps) => {
  return (
    <div
      className={`text-#FDE11D-100 flex min-h-[160px] ${
        !isImage && "-scale-x-100"
      } transform justify-center bg-transparent py-8`}
    >
      <div className="flex flex-col justify-center">
        <div
          className={`text-[70px] font-black text-${
            isVisible ? "[#FDE11D]" : "black"
          }`}
        >
          {isImage ? (
            <Image src={"/nav_home.svg"} alt="" width={119.27} height={32} />
          ) : (
            "PEARLUK"
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;

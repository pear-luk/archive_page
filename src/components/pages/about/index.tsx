import TopBar from "@/components/layout/TopBar";
import Image from "next/image";
const AboutMenu = ["23 S/S", "23 F/W"];

const About = () => {
  return (
    <main>
      <TopBar isVisible={false} />
      <div className="text-[#FDE11D]">
        <div className="flex  justify-center p-12">
          <Image src="/about_img.svg" width={196} height={298} alt="main" />
        </div>
        <div className="flex justify-center p-[32px] text-center text-[20px] font-extrabold">
          <div className="flex flex-col space-y-[80px]">
            {AboutMenu.map((menu, i) => (
              <div key={`${menu}-${i}`}>{menu}</div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;

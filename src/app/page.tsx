import FootBar from "@/components/layout/FootBar";
import TopBar from "@/components/layout/TopBar";
import Main from "@/components/pages/main";

export default function Home() {
  return (
    <>
      <TopBar isVisible={false} />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Main />
      </main>
      <FootBar isVisible={false} />
    </>
  );
}

import FootBar from "@/components/layout/FootBar";
import TopBar from "@/components/layout/TopBar";
import About from "@/components/pages/about";

export default function AboutPage() {
  return (
    <>
      <TopBar isVisible={true} />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <About />
      </main>
      <FootBar isVisible={true} />
    </>
  );
}

AboutPage.footbar = true;

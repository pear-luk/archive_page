import FootBar from "@/components/layout/FootBar";
import TopBar from "@/components/layout/TopBar";
import Archive from "@/components/pages/archive";

export default function Home({ params }: { params: { archive: string } }) {
  const { archive } = params;
  return (
    <>
      <TopBar isVisible={true} isImage={true} />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Archive archive={archive} />
      </main>
      <FootBar isVisible={true} />
    </>
  );
}

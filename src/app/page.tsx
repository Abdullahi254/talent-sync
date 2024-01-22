import PageOne from "./components/PageOne";
import PartnersCard from "./components/PartnersCard";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between py-20 px-6 max-w-7xl mx-auto">
      <PageOne />
      <PartnersCard/>
    </main>
  );
}

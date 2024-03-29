import Footer from "./components/Footer";
import PageFive from "./components/PageFive";
import PageFour from "./components/PageFour";
import PageOne from "./components/PageOne";
import PageThree from "./components/PageThree";
import PageTwo from "./components/PageTwo";
import PartnersCard from "./components/PartnersCard";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between pt-20 px-6 max-w-7xl mx-auto">
      <PageOne />
      <PartnersCard/>
      <PageTwo/>
      <PageThree/>
      <PageFour/>
      <PageFive/>
      <Footer/>
    </main>
  );
}

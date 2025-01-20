import Banner from "@/components/shared/Banner";
import About from "@/components/Home/About";
import HomeBanner from "@/components/Home/Banner";
import Process from "@/components/Home/Process";
import dog_large_banner from "@/public/images/dog_large_banner.jpg"
import Header from "@/components/Home/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeBanner />
      <main className="px-5 pt-6">
        <About />
        <Process />
      </main>
      <Banner
          title="Want a pet for your loved ones?"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
          imageUrl={dog_large_banner}
          buttonText="ADOPT NOW"
        />
    </div>
  );
}

import Banner from "@/components/atoms/Banner";
import About from "@/components/molecules/About.home";
import HomeBanner from "@/components/molecules/Banner.home";
import Process from "@/components/molecules/Process.home";
import dog_large_banner from "@/public/images/dog_large_banner.jpg"

export default function Home() {
  return (
    <div className="">
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

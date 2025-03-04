import Image from "next/image";
import Link from "next/link";
import { featureCards, integraionCards, newFeatureCards, sponsorsCards, workManagements } from "@/constants/constants";
import FeatureCard from "@/components/software/FeatureCard";
import NewFeatureCard from "@/components/software/NewFeatureCard";
import SponsorBrandCard from "@/components/software/SponsorBrandCard";
import WorkManagementCard from "@/components/software/WorkManagementCard";
import Accordeon from "@/components/software/Accordeon";
import IntegrationCard from "@/components/software/IntegrationCard";

export default async function Home() {
  return (
    <main className="">
      <article className="w-full flex items-center flex-col bg-gray-100">
        <section className="max-w-5xl w-full py-6 lg:py-20 flex justify-between flex-col lg:flex-row gap-8 lg:gap-10">
          <div className="py-4 lg:py-8 px-4 lg:min-w-[480px]">
            <h1 className="text-5xl py-8 ">
              <span className="font-extrabold">Great outcomes</span> start with&nbsp;
              <span className="inline-flex flex-col">
                Jira
                <span className="w-full h-2 bg-yellow-300">&nbsp;</span>
              </span>
            </h1>
            <h2 className="text-xl">The only project management tool you need to plan and track work across every team.</h2>
          </div>

          <div className="py-4 lg:py-8 px-4 lg:min-w-[450px] flex flex-col space-y-4">
            <form action="" className="flex flex-col gap-2">
              <label htmlFor="email" className="font-bold text-sm">
                Work Email
              </label>
              <input 
                id="email"
                type="text" 
                placeholder="you@company@com"
                className="py-2 pl-5 pr-2 rounded-3xl outline-none border-gray-400/30 border-[1px]"
              />
              <p className="text-gray-500 text-[10px]">Find teammates, plus keep work and life separate by using your work email.</p>
              <button type="submit" className="w-full flex justify-center bg-blue-500 hover:bg-blue-700 py-1 px-3 rounded-3xl text-xl font-semibold text-white mt-2">Sign up</button>
            </form>

            <div className="flex justify-center items-center px-2">
              <div className="border-solid border-b-[1px] -translate-y-1/2 border-gray-400/40 w-full" />
              <div className="text-sm text-center w-full">Or continue with</div>
              <div className="border-solid border-b-[1px] -translate-y-1/2 border-gray-400/40 w-full" />
            </div>

            <div className="flex justify-between items-center gap-3">
              <button className="bg-white rounded-3xl py-1 px-3 w-full border-[1px] shadow-sm hover:bg-gray-100 flex items-center justify-center gap-2">
                <Image 
                  src="/svg/google.png"
                  width={18}
                  height={18}
                  alt="google icon"
                  className="size-[18px]"
                />
                Google
              </button>
              <button className="bg-white rounded-3xl py-1 px-3 w-full border-[1px] shadow-sm hover:bg-gray-100 flex items-center justify-center gap-2">
                <Image 
                  src="/svg/microsoft.png"
                  width={18}
                  height={18}
                  alt="google icon"
                  className="size-[18px]"
                />
                Microsoft
              </button>
            </div>
          </div>
        </section>
        
        <section className="flex overflow-x-hidden w-full">
          <div className="flex gap-5 py-6 overflow-x-auto w-full 2xl:justify-center px-2">
            {workManagements.map((card, index) => (
              <WorkManagementCard 
                key={index}
                title={card.title} 
                subtitle={card.subtitle} 
                imageUrl={card.imagePreviewUrl} 
              />
            ))}
          </div>
        </section>

        <section className="w-full grid grid-cols-3 2xl:grid-cols-6 py-4">
          {sponsorsCards.map((card) => (
            <SponsorBrandCard 
              key={card.imageAlt}
              imageUrl={card.imageUrl} 
              height={card.height} 
              width={card.width} 
              imageAlt={card.imageAlt} 
            />
          ))}
        </section>
      </article>

      <article className="flex justify-center">
        <Accordeon />
      </article>

      <article className="bg-blue-600 text-white flex flex-col items-center">
        <section className="max-w-5xl w-full flex flex-col gap-6 items-center py-16 px-5">
          {/* <div className="size-12 bg-white" /> */}
          <Image
            src="/images/ai.png"
            width={126}
            height={120}
            alt="ai logo"
            className="size-14"
          />
          <h3 className="text-2xl lg:text-4xl font-bold text-center">Your next move, suggested by AI</h3>
          <p className="text-lg text-center">Atlassian Intelligence takes your big ideas and automatically suggests the tasks to help get it done.</p>
          <button className="text-xl border-2 font-semibold border-white py-2 px-6 rounded-md hover:bg-blue-700/50">Explore Atlassian Intelligence</button>
          <Image
            src="/images/ai-img.webp"
            width={2752}
            height={1838}
            alt="ai suggestions"
            className="w-full h-auto px-4 py-4 block 2xl:hidden"
          />
          <video autoPlay muted className="hidden 2xl:block w-full h-auto px-4 py-4">
            <source src="/videos/CSD-13376_Jira_Product_Tour_AI_Video_update.mp4" type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        </section>
      </article>

      <article className="flex flex-col items-center py-6">
        <section className="px-5 pt-8 w-full flex flex-col items-center">
          <h2 className="text-xl lg:text-3xl font-bold py-5 text-center">Bring every team together under one roof</h2>
          <div className="max-w-[812px] px-[50px]">
            <p className="text-lg text-center min-w-[316px]">Spend less time trying to get aligned and more time driving projects forward with confidence.</p>
          </div>
          <Image
            src="/images/new-staggered-double-feature-1.webp"
            width={2269}
            height={1664}
            alt="taggered-double-feature 1"
            className="max-w-[600px] max-h-[440px] w-full h-auto px-4 pt-8"
          />
        </section>

        {featureCards.map((card) => (
          <FeatureCard 
            key={card.title} 
            title={card.title} 
            subtitle={card.subtitle} 
            btnTitle={card.btnTitle} 
            imageUrl={card?.imageUrl} 
          />
        ))}
      </article>

      <article className="flex flex-col items-center py-16 px-4">
        <h3 className="text-xl lg:text-3xl font-bold py-5 text-center">Never lose sight of the big picture</h3>

        <div className="relative flex flex-col items-center max-w-5xl w-full">
          <section className="pt-8 pb-6  grid grid-cols-1 gap-5 2xl:grid-cols-2 z-20">
            {newFeatureCards.map((card) => (
              <NewFeatureCard 
                key={card.title}
                title={card.title} 
                subtitle={card.subtitle} 
                imageUrl={card.imageUrl} 
              />
            ))}
          </section>

          <svg className="absolute bottom-0 translate-y-20 w-screen h-[250px]" viewBox="0 0 100 100"  preserveAspectRatio="none">
            <polygon points="0,30 100,0 100,100 0,100" fill="black" />
          </svg>
          <div className="bg-black w-screen h-[10px] lg:h-[50px]" />
        </div>
      </article>

      <article className="flex 2xl:flex-row justify-center items-center w-full py-16 bg-gray-100">
        <div className="max-w-5xl w-full max-2xl:px-10 flex flex-col 2xl:flex-row items-center">
          <section className="max-w-5xl w-full flex flex-col 2xl:items-start items-center gap-8 py-5">
            <h2 className="text-3xl font-bold text-center 2xl:text-left 2xl:text-5xl">Meets teams where they work</h2>
            <p className="text-lg text-center 2xl:text-left">If your team uses it, we integrate with it. Easily add your favorite tools from the Atlassian Marketplace, keeping Jira as your central source of truth.</p>
            <button className="border-2 border-black w-fit px-8 py-3 rounded-3xl text-lg 2xl:text-2xl hover:bg-gray-200 duration-300">See all integrations</button>
          </section>

          <section className="flex flex-wrap justify-center items-center gap-5 max-2xl:max-w-[400px] 2xl:w-full p-2">
            {integraionCards.map((card) => (
              <IntegrationCard 
                key={card.imageAlt}
                imageUrl={card.imageUrl} 
                width={card.width} 
                height={card.height} 
                imageAlt={card.imageAlt} 
              />
            ))}
          </section>
        </div>
      </article>

      <article className="bg-black text-white w-screen pt-8 2xl:pt-24 pb-17 flex flex-col items-center">
        <section className="max-w-5xl w-full flex flex-col 2xl:flex-row justify-center items-center">
          <div className="self-start hidden 2xl:block">
            <Image
              src="/images/star.webp"
              width={68}
              height={78}
              alt="star"
            />
          </div>
          <div className="flex flex-col max-lg:gap-5 gap-10 pb-14 pl-1 pr-10 2xl:max-w-[350px]">
            <h2 className="text-3xl lg:text-5xl font-bold text-center 2xl:text-left">For teams big & small</h2>
            <p className="text-md px-12 lg:px-0 lg:text-2xl text-center 2xl:text-left">Hear from start-ups & large enterprises that prefer Atlassian</p>
            <Link 
              href="/"
              className="text-center text-blue-600 text-sm lg:text-lg 2xl:text-left"
            >
              See more customer stories
            </Link>
          </div>

          <div className="relative text-black bg-white lg:max-w-[776px] max-w-[350px] w-full py-4 rounded-bl-3xl rounded-tr-3xl flex flex-col lg:flex-row">
            <div className="relative min-w-[245px] min-h-[228px]">
              <Image
                src="/images/testimonial-roblox.webp"
                height={510}
                width={476}
                alt="testimonal-roblox"
                className="absolute max-w-[255px] max-h-[248px] max-lg:-translate-x-4 max-lg:-translate-y-2 -translate-x-8 -translate-y-8 2xl:-translate-x-6 2xl:-translate-y-6"
              />
            </div>
          
            <div className="px-4 lg:px-2 pb-6 lg:pb-3 rounded-tr-3xl max-lg:px-6 relative py-5">
              <p className="lg:text-2xl text-xl pb-4">“Before, our team saw Atlassian as individual tools...Now, [features & integrations] like Jira macros & Smart Links have really been pivotal in collaboration, productivity, & discoverability.”</p>
              <h4 className="font-bold text-xl border-t-2 border-gray-500 w-fit pt-1">Joe Cotant</h4>
              <p className="lg:text-2xl text-xl">Senior Technical Program Manager, Roblox</p>

              <Image
                src="/images/quote.webp"
                height={47}
                width={78}
                alt="quotes"
                className="hidden lg:block w-[78px] h-[47px] absolute -top-6 -right-10"
              />
            </div>
          </div>
        </section>
        
        <div className="relative h-[40px] w-screen">
          <svg className="absolute bottom-0 translate-y-20 w-screen h-[100px]" viewBox="0 0 100 100"  preserveAspectRatio="none">
            <polygon points="0,0 0,30 100,100 100,0" fill="black" />
          </svg>
        </div>
      </article>

      <article className="bg-blue-600 w-screen flex justify-center">
        <section className="max-w-5xl px-8 w-full pt-24 flex flex-col lg:flex-row items-center gap-5">
          <div className="flex flex-col items-center lg:items-start gap-[40px]">
            <p className="max-w-[765px] text-4xl text-center lg:text-left font-extrabold text-white">No matter what you're trying to dream up, Jira helps you get it done</p>
            <button className="bg-yellow-500 hover:bg-yellow-300 duration-300 text-bas text-black font-semibold w-fit px-10 py-2 rounded-md">Get Jira free</button>
          </div>
        
          <div className="relative">
            <Image
              src="/images/closing-banner-graphic.webp"
              width={1213}
              height={1211}
              alt="jira get it done"
              className="max-w-[303px] max-h-[302px]"
            />

            <Image
              src="/images/artboard-stars.webp"
              width={95}
              height={97}
              alt="artboard-stars"
              className="absolute top-0 left-12"
            />
          </div>
        </section>
      </article>
    </main>
  );
}
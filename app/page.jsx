import { Button } from "@/components/ui/button"
import {FiDownload} from "react-icons/fi"

//Components
import Social from "@/components/ui/Social"
import Photo from "@/components/ui/Photo"
import { Stats } from "@/components/ui/Stats"


const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*Text here*/ }
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Computer Science student at Grenoble INP - Ensimag</span>
            <h1 className="h1 mb-6">
                Hello I&apos;m <br/><span className="text-accent">Reda Belfaida</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Creative Problem-Solver and Data-Driven Strategist, Bridging Technology and Business with a Passion for Sustainable Innovation.
            </p>
          {/*Button Stuffs*/ }
            <div className="flex flex-col xl:flex-row items-center gap-8">
                <a href="/assets/MyCVEN.pdf" download>
                    <Button
                      variant="outline"
                      size="lg"
                      className="uppercase flex items-center gap-2"
                    >
                      <span>Download CV</span>
                      <FiDownload className="text-xl" />
                    </Button>
                </a>
                <div className="mb-8 xl:mb-0">
                <Social
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex 
                justify-center items-center text-accent text-base hover:bg-accent
                hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/*Photo here*/ }
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  )
}

export default Home

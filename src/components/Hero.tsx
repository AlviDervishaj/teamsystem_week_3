import { Button } from "primereact/button"

export const Hero = () => {
  return (
    <div className="grid grid-nogutter surface-0 text-800">
      <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <section>
          <span className="block text-6xl font-bold mb-1">Frontend developer</span>
          <div className="text-6xl text-primary font-bold mb-3">who uses Arch ( btw )</div>
          <p className="mt-0 mb-4 text-700 line-height-3">
            Just a guy looking to make my developer workflow more awesome, build performant projects, understand memory, and ultimately craft really awesome software. </p>
          <Button label="Check Github" type="button" className="mr-3 p-button-raised" />
        </section>
      </div>
      <div className="col-12 md:col-6 overflow-hidden">
        <img src="/shrek.jpg" alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
      </div>
    </div>
  )
}

import { Button } from "primereact/button"

export const Cta = () => {
  return (
    <div className="surface-0 text-700 text-center">
      <div className="text-blue-600 font-bold mb-3"><i className="pi pi-discord"></i>&nbsp;POWERED BY DISCORD ( Thank you Primeagen )</div>
      <div className="text-900 font-bold text-5xl mb-3">Join the most productive server ever !</div>
      <div className="text-700 text-2xl mb-5">Yes. There is also a channel for you know what. </div>
      <p className="mt-0 mb-4 text-700 line-height-3">Memes obviously...</p>
      <Button label="Join Now" icon="pi pi-discord" className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap" />
    </div>
  )
}

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";

export default function Contact() {
  return (
    <div className="flex align-items-center justify-content-center pt-12">
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
          <img src="/alvi-logo-transparent-black.svg" alt="Alvi Logo" height={160} width={160} className="mx-auto py-2 aspect-square " />
          <div className="text-900 text-3xl font-medium mb-3">Leave a Message !</div>
          <span className="text-600 font-medium line-height-3">I will do my best to keep up with loads of daily messages ( There are none )</span>
        </div>

        <div className="flex flex-col items-center content-center justify-center gap-4">
          <div className="w-1/2 mx-auto p-2">
            <label htmlFor="username" className="block text-900 font-medium mb-2">Username</label>
            <InputText id="username" type="text" placeholder="Username" className="w-full p-3 border-2 border-slate-900/50" />
          </div>

          <div className="w-1/2 mx-auto p-2">
            <label htmlFor="Message" className="block text-900 font-medium mb-2">Message</label>
            <InputTextarea id="message" placeholder="Message..." className="w-full p-3 border-2 border-slate-900/50" />
          </div>

          <Button label="Sign In" icon="pi pi-user" />
        </div>
      </div>
    </div>
  )
}

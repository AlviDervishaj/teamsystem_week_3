export const Features = () => {
  return (
    <div className="surface-0 text-center pt-16">
      <div className="mb-3 font-bold text-3xl">
        <span className="text-900">One Developer, </span>
        <span className="text-blue-600">Many Languages</span>
      </div>
      <div className="text-700 mb-6">Not to brag but I know some things that other devs might not know ...</div>
      <div className="grid">
        <div className="col-12 md:col-4 mb-4 px-5">
          <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
            <i className="pi pi-desktop text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">Tailwind</div>
          <span className="text-700 line-height-3">Makes writing css such a breeze.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
          <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
            <i className="pi pi-lock text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">Typescript</div>
          <span className="text-700 line-height-3">Forget type errors when using this Javascript addition</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
          <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
            <i className="pi pi-check-circle text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">React</div>
          <span className="text-700 line-height-3">React .</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
          <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
            <i className="pi pi-globe text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">Vercel</div>
          <span className="text-700 line-height-3">Makes deploying such an easy task.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
          <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
            <i className="pi pi-github text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">Git</div>
          <span className="text-700 line-height-3">Always committing and pushing to branches.</span>
        </div>
        <div className="col-12 md:col-4 md:mb-4 mb-0 px-3">
          <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
            <i className="pi pi-tiktok text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">Tik Tok</div>
          <span className="text-700 line-height-3">What did you expect ? I am also a human ...</span>
        </div>
      </div>
    </div>

  )
}

/* eslint-disable @next/next/no-img-element */
export default function Hero() {
  return <>
    <div className="w-full bg-gray-100 flex-1">
      <div 
        className="flex w-full h-full px-4 py-28 max-w-screen-xl mx-auto justify-center items-center"
      >
        <div className="flex flex-col gap-4 items-center">
          <h1 className="md:text-8xl text-6xl font-back-to-1982 text-orange-400"
          >
            HitBox
          </h1>
          <h2 className="text-4xl font-bold text-orange-400 mt-5">
            GAMES
          </h2>
          <p className="text-center">
            Unending Fun and Thrill! We are offering all in one place.
          </p>
          <div className="flex flex-col self-start mt-9 gap-4">
            <h1 className="font-bold">Download For Free</h1>
            <div className="flex gap-3">
              <img src="/images/play-store.png" width={150} height={50}  alt="play-store"/>
              <img src="/images/app-store.png"  width={150} height={50} alt="app-store"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}
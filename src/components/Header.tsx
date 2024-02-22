/* eslint-disable @next/next/no-img-element */

export default function Header() {
  return <header className={`w-full  bg-gray-200`}>
    <div className="flex flex-wrap gap-5 md:flex-nowrap md:gap-0  py-6 px-4 max-w-screen-xl mx-auto items-center">
      <h1 className="font-bold text-xl">HIT BOX</h1>

      {/* Links */}
      <div className="flex md:ml-8 gap-4">
        <a className="cursor-pointer text-gray-700 active:text-black hover:underline">Games</a>
        <a className="cursor-pointer text-gray-700 active:text-black hover:underline">Contact</a>
        <a className="cursor-pointer text-gray-700 active:text-black hover:underline">About Us</a>
      </div>

      {/* social cards */}
      <div className="flex md:ml-auto gap-4">
        <img src="/images/facebook.png" alt="facebook_logo"  width={30} height={30}/>
        <img src="/images/twitter.png" alt="facebook_logo"  width={30} height={30}/>
        <img src="/images/instagram.png" alt="facebook_logo" width={30} height={30} />
        <img src="/images/youtube.png" alt="facebook_logo" width={30} height={30} />
      </div>
    </div>
  </header>
}

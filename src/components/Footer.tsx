const FooterLinks = [
  'Terms of services',
  'Privacy Policy',
  'Our Games',
  'Other legal Docs',
]

/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  return (
    <div className="w-full py-5 px-5 bg-white border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-2">
        <div className="w-full flex items-center flex-wrap gap-4 justify-center md:justify-start">
          <div className="flex flex-col gap-3 w-full md:w-auto border-b border-gray-200 pb-4 md:border-0">
            <h3 className="text-md font-medium">Follow us on</h3>
            <div className="flex gap-2">
              <img
                src="/images/facebook.png"
                alt="facebook_logo"
                width={30}
                height={30}
              />
              <img
                src="/images/twitter.png"
                alt="facebook_logo"
                width={30}
                height={30}
              />
              <img
                src="/images/instagram.png"
                alt="facebook_logo"
                width={30}
                height={30}
              />
              <img
                src="/images/youtube.png"
                alt="facebook_logo"
                width={30}
                height={30}
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full md:w-auto md:ml-auto border-b border-gray-200 pb-4 md:border-0">
            <h3 className="text-md font-medium">Download our games on</h3>
            <div className="flex gap-2">
              <img
                src="/images/play-store.png"
                width={120}
                height={40}
                alt="play-store"
              />
              <img
                src="/images/app-store.png"
                width={120}
                height={40}
                alt="app-store"
              />
            </div>
          </div>
        </div>

        <div className="w-full flex gap-4 md:gap-5 flex-wrap justify-center md:justify-start py-6 md:border-t border-gray-200">
          {FooterLinks.map((link, i) => {
            return (
              <a
                key={i}
                className="text-gray-800 active:underline hover:underline cursor-pointer"
              >
                {link}
              </a>
            )
          })}
        </div>

        <div className="w-full flex py-4 items-end gap-6 flex-wrap">
          <div className="flex flex-col ">
            <p className="font-bold">HitBox Games</p>
            <p className="text-xs text-neutral-600">
              44 D1 MM Alam Rd, Block D1 Gulberg III
            </p>
            <p className="text-xs text-neutral-600">Lahore, Punjab Pakistan</p>
          </div>
          <div className="md:ml-auto font-mono text-xs text-neutral-600">
            &copy; HitBox 2024 All rights reserved.
          </div>
        </div>
      </div>
    </div>
  )
}

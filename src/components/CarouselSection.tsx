/* eslint-disable @next/next/no-img-element */
export default function CarouselSection() {
  return <div className="flex w-full bg-white py-3 px-3">
    <div className="max-w-screen-md mx-auto w-full">
      <div className="grid grid-cols-6 gap-2">
        <div className="h-20 sm:col-span-4 col-span-6"
          style={{
            height: 'auto'
          }}
        >
          <img 
            src="/images/games/grand_vegas.webp"
            alt="grand_vegas"
            style={{
              width: '100%',
              maxHeight: '300px',
              minHeight: '286px'
            }}
          />
        </div>
        <div className="h-20 sm:col-span-2 col-span-3" style={{
          height: 'auto'
        }}>
          <img 
            src="/images/games/slowmorun.webp"
            alt="grand_vegas"
            style={{
              width: '100%',
              maxHeight: '286px',
              minHeight: '286px',
            }}
          />
        </div>
        <div className="h-20 sm:col-span-2 col-span-3" style={{
          height: 'auto'
        }}>
          <img 
            src="/images/games/slowmorun.webp"
            alt="grand_vegas"
            style={{
              width: '100%',
              maxHeight: '286px',
              minHeight: '286px'
            }}
          />
        </div>
        <div className="h-20 sm:col-span-4 col-span-6"
          style={{
            height: '100%',
          }}
        >
          <img 
            src="/images/games/grand_vegas.webp"
            alt="grand_vegas"
            style={{
              width: '100%',
              maxHeight: '286px',
              minHeight: '286px'
            }}
          />
        </div>
      </div>
    </div>
  </div>
}


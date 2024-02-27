/* eslint-disable @next/next/no-img-element */
import ShowcaseLayout from '@/layout/ShowcaseLayout'
import { accountGames } from '@/lib/constant'
import { AnimatedTooltip } from './ui/AnimatedTooltip'

export default function AmazingGames() {
  return (
    <ShowcaseLayout
      className="py-20"
      props={{
        className: 'justify-center items-center gap-8',
      }}
    >
      <h1 className="text-6xl md:text-8xl w-full md:text-center font-serif font-extrabold">
        Welcome to
        <span
          className="mx-3"
          style={{
            background:
              'linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'pan 2s linear infinite',
          }}
        >
          HitBox GAMES
        </span>
        🚀
      </h1>

      <div className="flex w-full flex-col gap-8">
        <h1 className="self-center text-xl">Discover our thrilling games</h1>
        <div className="flex flex-row items-center md:justify-center mb-10 w-full flex-wrap">
          <AnimatedTooltip
            items={accountGames.map((game, id) => {
              return {
                id,
                designation: '',
                image: game.img,
                name: game.title,
                link: game.src,
              }
            })}
          />
        </div>
      </div>
    </ShowcaseLayout>
  )
}

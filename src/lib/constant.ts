/*
  Array.from($0.children).map(child => {
   const src = child.querySelector('a').href 
   const img = child.querySelector('img').src
   const title = child.querySelector('[title]').title
   return { src, img, title }
  })
*/

import { GameMetaData } from "@/types/GameMetaData"

export const accountGames = [
  {
    src: 'https://play.google.com/store/apps/details?id=com.gf.bike.race.free.racing.games',
    img: 'https://play-lh.googleusercontent.com/QDnWPQLiJvZDbN-G4FvV4Hz_KXcvI9Sl0vt0gf122y41iGZMjw83HKollBZYYc-lpihi=s256-rw',
    title: 'Indian Bike Gangster Simulator',
  },
  {
    src: 'https://play.google.com/store/apps/details?id=com.hbg.horror.grand.gangster.theft.survival.crime.city',
    img: 'https://play-lh.googleusercontent.com/d6uAkIIX2SLRvkPygi-1XivOurqJZA-yyDK5TvUqg_vT59kXOzE4zHNXm-vC9gC6rKhL=s256-rw',
    title: 'Grand Vegas Simulator',
  },
  {
    src: 'https://play.google.com/store/apps/details?id=com.rlg.future.robot.transform.car.racing',
    img: 'https://play-lh.googleusercontent.com/i3gpK5fDk_oGtirLymT2owjamTm9I-12OdvdqBxHBq0hv7X2oXr5DR7HSJ_q9WYUYw=s256-rw',
    title: 'Spider Rope Games - Crime Hero',
  },
  {
    src: 'https://play.google.com/store/apps/details?id=com.gf.car.wash.service.station.gas.station.garage',
    img: 'https://play-lh.googleusercontent.com/rEOC2ENY8LgPq58S4N2Ig66OPcblpWGMumuZY9stcwx3UEXn2oJdojG5w_JzzYQvxA=s256-rw',
    title: 'Car Saler Game: Car Dealership',
  },
  {
    src: 'https://play.google.com/store/apps/details?id=com.hb.going.rolling.balls.race.ball.games',
    img: 'https://play-lh.googleusercontent.com/dIVDLOS030en08aJ-z4dxVsnxypIuUPM6k_z89HTtXKFqwtZ-nMKUJY9NmtEnEkYBTw=s256-rw',
    title: 'Racing Ball Game: Rolling Game',
  },
  {
    src: 'https://play.google.com/store/apps/details?id=com.ga.stickman.rope.spider.hero.crime.games',
    img: 'https://play-lh.googleusercontent.com/YcKqOFH5Td0LFgG8YReuCeZyiX83mJh_Ub9RHuS_jKTX4LlNDeSrtO-9HPMpgNAuCTI=s256-rw',
    title: 'Stickman Spider Rope Games',
  },
  {
    src: 'https://play.google.com/store/apps/details?id=com.hb.Slow.Mo.Hero.Running.Game',
    img: 'https://play-lh.googleusercontent.com/S6ZJxIuhxSlzLebw0SNn81PruLG8iX3rr80Fdylnll7KK9Mi3XQcIlagLhqHlXVAj0E=s256-rw',
    title: 'Slow Mo Hero - Running Game',
  },
  {
    src: 'https://play.google.com/store/apps/details?id=com.brg.freegames.trafficcar.cargames.trafficcity',
    img: 'https://play-lh.googleusercontent.com/OTLPtquEolRjx03JNR3tidmleT-xcV-wFad9-rCuvTtJUQfNeWE4KhlhPjRH9fMKhyI=s256-rw',
    title: 'Mini Car Games – Traffic Games',
  },
  {
    src: 'https://play.google.com/store/apps/details?id=com.hb.grand.city.thug.gangster.vegas.cirme.simulator.game',
    img: 'https://play-lh.googleusercontent.com/yGTyq-ZR6EupBIDjiiFzgcXLyB5wyh54BrsQSzMGo0sS-u1fMK88LKpaAplZRJWzfco=s256-rw',
    title: 'Gangster City Thug Crime Game',
  },
  {
    src: 'https://play.google.com/store/apps/details?id=com.hgs.extremeracing.citydriving.driftcar',
    img: 'https://play-lh.googleusercontent.com/zuGL_tmoYyIymiGF0is0uNF831uFVKi7Z42XJnkKcUPuUB82n3TkcIQnT7VE7M6yHMzx=s256-rw',
    title: 'Superhero Car Stunt- Car Games',
  },
  {
    src: 'https://play.google.com/store/apps/details?id=com.hb.kniferunner.game',
    img: 'https://play-lh.googleusercontent.com/k-Sug3yrX9QpS6iJurosOa6B2EUu3vkVm657BXqMNPYlUhbOZrtekyGado1l2nnORA=s256-rw',
    title: 'Knife Runner 3D - Knife Games',
  },
  {
    src: 'https://play.google.com/store/apps/details?id=com.gt.wildhunter.bullattack.hungrybull.attackrampage',
    img: 'https://play-lh.googleusercontent.com/SD9ryCkrMfRI_wnLq0OC9w8Gvf3AF9gM4ryC1IvBfHYEIN5T7R_1ebl8Q6O0wAsAA9k=s256-rw',
    title: 'Bull Games - Wild Animal Games',
  },
  {
    src: 'https://play.google.com/store/apps/details?id=com.gf.mobile.car.wash.servicestation.workshop',
    img: 'https://play-lh.googleusercontent.com/CTrcDXexi-doqEEW_Ib9bBac0WDXtfNkTgqSxHNLTc83E-YhTsD4Q4q9y7mBogGmkXI=s256-rw',
    title: 'Mobile Car Wash: Car Games 3d',
  },
  {
    src: 'https://play.google.com/store/apps/details?id=com.hb.dozer.demolish.adventure',
    img: 'https://play-lh.googleusercontent.com/4qxZt5mf5BTJ6LYYPPzv762VJKN5hDu9uCglmGVEQXZEc7YFcrcCzEpik_BEohggFcwA=s256-rw',
    title: 'Demolish Adventure: Dozer Game',
  },
  {
    src: 'https://play.google.com/store/apps/details?id=com.hb.shapeshifting.transform.race.car.games',
    img: 'https://play-lh.googleusercontent.com/9Y0qunVZqq_1Tdwxl76OX83gFkdJGiQyAw6RYNEB2-b9LiW-S3MG7hTVo5D4d5jh-yY=s256-rw',
    title: 'Multi Shape Shift Car Game',
  },
]

export const actionGames: Array<GameMetaData> = [
  {
    url: 'https://play-lh.googleusercontent.com/mvnNHGqfdnfqUo5X4xAxOHh9aS_G7fbt9P_7V83JQoOdaWVaLm8PsTZf20S176H8ZUI2=w1024-h720-rw',
    alt: 'grand_vegas',
    link: 'https://play.google.com/store/apps/details?id=com.hbg.horror.grand.gangster.theft.survival.crime.city',
  },
  {
    url: 'https://play-lh.googleusercontent.com/jk3_AAZJfYU_D3GFVdpohUqPhmSecx1gv1-glgJ7m53vZKuorSlEf9vgb1qZsXCB5g=w1024-h720-rw',
    alt: 'grand_vegas',
    link: 'https://play.google.com/store/apps/details?id=com.hbg.horror.grand.gangster.theft.survival.crime.city',
  },

  {
    url: 'https://play-lh.googleusercontent.com/Ef7GDNqkZov4MvwQecJQgr1cY2M3AQ1PXlswf4F-usC6lL_2GKPcn0_JmpSn_s5UxJ4=w1024-h720-rw',
    alt: 'grand_vegas',
    link: 'https://play.google.com/store/apps/details?id=com.rlg.future.robot.transform.car.racing',
  },
  {
    url: 'https://play-lh.googleusercontent.com/akKkkdfSqZ06rA9YEcCOYRNy_G3oumhhMU0Ds_cxZLx2BhrCa4IU2kn2vcwi567lYA=w1024-h720-rw',
    alt: 'grand_vegas',
    link: 'https://play.google.com/store/apps/details?id=com.rlg.future.robot.transform.car.racing',
  },

  {
    url: 'https://play-lh.googleusercontent.com/yjSpK8pHqKiEG0KbixhjQIoczv-0zvebdNEudYeY5wcH3P3VEy-sCdj48o-glbBWQoY=w1024-h720-rw',
    alt: 'game_logo',
    link: 'https://play.google.com/store/apps/details?id=com.ga.stickman.rope.spider.hero.crime.games'
  },
  {
    url: 'https://play-lh.googleusercontent.com/CqpXJyTZTEZea_yNrEkXfztDk4PnMquUYLsiQHZjZAf5-h-LlVQ7OI8gBUeDYa-SLOua=w1024-h720-rw',
    alt: 'game_logo',
    link: 'https://play.google.com/store/apps/details?id=com.ga.stickman.rope.spider.hero.crime.games'
  }
]

export const adventurerGames: Array<GameMetaData> = [
  {
    url: 'https://play-lh.googleusercontent.com/MXNL9LG_Op1dViES3kjWaGrd5tjcDH42LlJ4mXGwWdxAxdK4FbTHC7r8ysUUtQqbbuc=w1024-h720-rw',
    alt: 'Superhero_Car_Stunt',
    link: 'https://play.google.com/store/apps/details?id=com.hgs.extremeracing.citydriving.driftcar'
  },
  {
    url: 'https://play-lh.googleusercontent.com/YmzCmFPvYwYbeOl4ebue__JJCk7hhVVSpJ6qSbXESAAXTd8QN-j6tQmHjZP6B-DkXQ=w1024-h720-rw',
    alt: 'Superhero_Car_Stunt',
    link: 'https://play.google.com/store/apps/details?id=com.hgs.extremeracing.citydriving.driftcar'
  },

  {
    url: 'https://play-lh.googleusercontent.com/kkKTig34to5J8q3QuD9EkeqFJXmIPnhaYek54EMbNl2cRrg_TkKpVNuu9WuKcy6pmZGa=w1024-h720-rw',
    alt: 'Car Saler Game',
    link: 'https://play.google.com/store/apps/details?id=com.gf.car.wash.service.station.gas.station.garage'
  },
  {
    url: 'https://play-lh.googleusercontent.com/E1Ezw6L6I9K9NrKZuG5QRpkGcS8h4M2RyfMRQYwbA0HQuuLRZK7taFTZOYSxhPPa4g=w1024-h720-rw',
    alt: 'Car Saler Game',
    link: 'https://play.google.com/store/apps/details?id=com.gf.car.wash.service.station.gas.station.garage'
  },


  {
    url: 'https://play-lh.googleusercontent.com/y59URkXYwlH_4CXC7acD-mC-8g-11ssOWBwj_n8RWH-iuGyQ9q4RMkx2EWWCULBmC8U=w1024-h720-rw',
    alt: 'Mobile Car Wash',
    link: 'https://play.google.com/store/apps/details?id=com.gf.mobile.car.wash.servicestation.workshop'
  },
  {
    url: 'https://play-lh.googleusercontent.com/M1SepP77ZQ2rl32CnKPoC1HVndFYyG0m_jBXzE1sx3Ty1jP1D-FICi3AgQyBQ0tXt-M=w1024-h720-rw',
    alt: 'Mobile Car Wash',
    link: 'https://play.google.com/store/apps/details?id=com.gf.mobile.car.wash.servicestation.workshop'
  },
]

export const hyperCasualGames: Array<GameMetaData> = [
  {
    url: 'https://play-lh.googleusercontent.com/fBsPlXsxa2o8pYUHEmTdy0YBGIMyZjzE91lNuc1xR2WF2Q0nTK-ubDGKjReiGUxHgA=w1024-h720-rw',
    alt: 'Knife Runner 3D',
    link: 'https://play.google.com/store/apps/details?id=com.hb.kniferunner.game'
  },
  {
    url: 'https://play-lh.googleusercontent.com/-BmELRilhu0CdAEc-mFhRzjN-Qz9Bjj5yCqI-sZXXuo52Bu3hoDiXRlfBGDdzMcTzQ=w1024-h720-rw',
    alt: 'Knife Runner 3D',
    link: 'https://play.google.com/store/apps/details?id=com.hb.kniferunner.game'
  },


  {
    url: 'https://play-lh.googleusercontent.com/vAMqhwGaFCjllmKds1c2ZYT4bRBDJWYCuaGXw4PTFQ_x9cA0moTjqiqElhp2V-4vqIjf=w1024-h720-rw',
    alt: 'Racing Ball Game',
    link: 'https://play.google.com/store/apps/details?id=com.hb.going.rolling.balls.race.ball.games'
  },
  {
    url: 'https://play-lh.googleusercontent.com/lWpEMtuJQ3yxIHMJq5mycGF35M_DQAwsxrsRNuLj0xmIPWU_kZ3UmzTjgJyZus2BC9I=w1024-h720-rw',
    alt: 'Racing Ball Game',
    link: 'https://play.google.com/store/apps/details?id=com.hb.going.rolling.balls.race.ball.games'
  }

  ,
  {
    url: 'https://play-lh.googleusercontent.com/w5OHXQfUV1a_bD3xtINYxU5h0xUEp2mff7X7DTYD1TemST7q_dK67ImWgTEKC-HmqdU=w1024-h720-rw',
    alt: 'Mini Car Games',
    link: 'https://play.google.com/store/apps/details?id=com.brg.freegames.trafficcar.cargames.trafficcity'
  },
  {
    url: 'https://play-lh.googleusercontent.com/jipGex2PFNgLEc1U1ehduJ2LYLrF4_pL7XDMZDamALVZ-by_2x7EpgVO2Ys-RiOlYHE=w1024-h720-rw',
    alt: 'Mini Car Games',
    link: 'https://play.google.com/store/apps/details?id=com.brg.freegames.trafficcar.cargames.trafficcity'
  },

]

export const hackathonGames: Array<GameMetaData> =  [
  {
    url: 'https://play-lh.googleusercontent.com/xd6Qndq5t_VaoHzhs-mo1I8fXwvsW-vX5NM0G6WLzoHDYvTvHrD9PrQDR0_B3gvonqw=w1024-h720-rw',
    alt: 'Slow Mo Hero',
    link: 'https://play.google.com/store/apps/details?id=com.hb.Slow.Mo.Hero.Running.Game'
  },
  {
    url: 'https://play-lh.googleusercontent.com/1CWfHuVHIkpWkyBVGsHzvUrPhvrlpMJL7-agpSaVCUqajMY6J08KleEOON_oP_sk_Q=w1024-h720-rw',
    alt: 'Slow Mo Hero',
    link: 'https://play.google.com/store/apps/details?id=com.hb.Slow.Mo.Hero.Running.Game'
  },
  
  {
    url: 'https://play-lh.googleusercontent.com/uNVM1SjNw7hYpVLLwR1MpGoSUTQ7MOd5xdQBAnrp7T0ynjOLOFQ27teIoggnP3uP2i4=w1024-h720-rw',
    alt: 'Multi Shape Shift',
    link: 'https://play.google.com/store/apps/details?id=com.hb.shapeshifting.transform.race.car.games'
  },
  {
    url: 'https://play-lh.googleusercontent.com/npLZyQF02RY9Gub7FL71A7gLCw9kj1ytfKhtMDEfUlHkMrEq9cqJ2YQkJHE_6NnYlLc=w1024-h720-rw',
    alt: 'Multi Shape Shift',
    link: 'https://play.google.com/store/apps/details?id=com.hb.shapeshifting.transform.race.car.games'
  }
]

export const otherPortraitGames: Array<GameMetaData> = [
  {
    url: 'https://play-lh.googleusercontent.com/MXMth2yQpCnXct3h6Cf8lCwGYb4RVBoq_f67luCL1z54HrQpEvsOvKnp1pZE39uhJJg=w1024-h720-rw',
    alt: 'Multi Shape Shift',
    link: 'https://play.google.com/store/apps/details?id=com.hb.shapeshifting.transform.race.car.games'
  },
  {
    url: 'https://play-lh.googleusercontent.com/w5OHXQfUV1a_bD3xtINYxU5h0xUEp2mff7X7DTYD1TemST7q_dK67ImWgTEKC-HmqdU=w1024-h720-rw',
    alt: 'Mini Car Games',
    link: 'https://play.google.com/store/apps/details?id=com.brg.freegames.trafficcar.cargames.trafficcity'
  },
  {
    url: 'https://play-lh.googleusercontent.com/Joh6rGm6Qe_kDDq1rDDsiR0AnOXUhJd4bq1DTQp8Hw4zuErQMpSI5pQq_a_QrWorJnQ=w1024-h720-rw',
    alt: 'Mini Car Games',
    link: 'https://play.google.com/store/apps/details?id=com.brg.freegames.trafficcar.cargames.trafficcity'
  },
  {
    url: 'https://play-lh.googleusercontent.com/PBTpslOXveHVK5RbjeBWItRKP0v8KddfHryrbD2Lpl5x_fYuGBAJ343LKi6biZW7vNNc=w1024-h720-rw',
    alt: 'Slow Mo Hero',
    link: 'https://play.google.com/store/apps/details?id=com.hb.Slow.Mo.Hero.Running.Game'
  },

]

export const accountLinks = {
  'google': 'https://play.google.com/store/apps/dev?id=4693730298341895537',
  'apple': 'https://play.google.com/store/apps/dev?id=4693730298341895537'
}
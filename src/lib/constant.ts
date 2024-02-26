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
    description: `Game Indian bike and car game lovers and bike master are welcome to play Indian driving in this bike simulator. This bike wali game will provide you the chance to play with most realistic Indian bikes. You can perform ultimate Indian driving with an amazing collection provided in the bike simulator of this Indian bike game. Be a best bike driver of Indian bike simulator who can show driving skills in realistic Indian bikes and car games. Highly optimized Indian driving controls and realistic physics will make a bike master addictive to play stunt driving unlike other bike games. Let’s full the craze of Indian bike driving by playing Indian bike and car game.`
  },
  {
    src: 'https://play.google.com/store/apps/details?id=com.hbg.horror.grand.gangster.theft.survival.crime.city',
    img: 'https://play-lh.googleusercontent.com/d6uAkIIX2SLRvkPygi-1XivOurqJZA-yyDK5TvUqg_vT59kXOzE4zHNXm-vC9gC6rKhL=s256-rw',
    title: 'Grand Vegas Simulator',
    description: `Greeting to embellish a bit part of grand vegas simulator crime in the gang games offline. this gangster crime journey starts in gangster nation to go for the Miami simulator crime game in the grand vegas police games. if you like to go for the gangster games in the world of gangster city towns to fight for peace against criminal cops. the grand war happens between player and the city of the mafia action game. this gangster world of Vegas is based on a gang story to experience different modes in the gangster city of mafia crime to enhance your action fight against city crime. the story is about criminal cops and the city of mafia where shooter gang do city bank robbery which cause of violence against the peace of city people in the gang wars of vegas. gang action is always prepared for`
  },
  {
    src: 'https://play.google.com/store/apps/details?id=com.rlg.future.robot.transform.car.racing',
    img: 'https://play-lh.googleusercontent.com/i3gpK5fDk_oGtirLymT2owjamTm9I-12OdvdqBxHBq0hv7X2oXr5DR7HSJ_q9WYUYw=s256-rw',
    title: 'Spider Rope Games - Crime Hero',
    description: `Welcome to the spider rope game, where you take on the gangster city mafia crime hero in this open-world action game. Immerse yourself in the exciting superhero rope games to restore justice and bring hope to the grand gangster city in this spider game.
    Take control of the flying spider game and tackle the power of incredible spider rope abilities. Fly like a spider through the tallest buildings and navigate the gangster city hero battle with unmatchable flying superhero ability. The intuitive controls of spider rope games allow you to perform incredible stunts as a city action hero` 
  },
  {
    src: 'https://play.google.com/store/apps/details?id=com.gf.car.wash.service.station.gas.station.garage',
    img: 'https://play-lh.googleusercontent.com/rEOC2ENY8LgPq58S4N2Ig66OPcblpWGMumuZY9stcwx3UEXn2oJdojG5w_JzzYQvxA=s256-rw',
    title: 'Car Saler Game: Car Dealership',
    description: `Welcome to the car saler game that puts you in the driver’s seat of your very own car dealership. Build your own car dealership, purchase, repair, and sell advanced cars. Choose from a diverse selection of vehicles like classic cars, luxury cars & sports cars. Make deals in neighborhood, car auctions, car markets & dealerships anywhere in the city.
    Start with the used car dealer and gradually expand your car showroom in the car Saler simulator game. Customize your car showroom to attract a broad range of customers & enjoy ultimate car trading, car buying, and selling adventures of used cars.`
  },
  {
    src: 'https://play.google.com/store/apps/details?id=com.hb.going.rolling.balls.race.ball.games',
    img: 'https://play-lh.googleusercontent.com/dIVDLOS030en08aJ-z4dxVsnxypIuUPM6k_z89HTtXKFqwtZ-nMKUJY9NmtEnEkYBTw=s256-rw',
    title: 'Racing Ball Game: Rolling Game',
    description: `Do you love a wild ball game with tons of challenges and unexpected obstacles? Navigate through the unexpected barriers in the addictive ball race that keep you entertained. Roll, spin, jump and master the racing ball controls to get maximum points. Try not to fall and lose your life because ultimate challenges lie ahead in action ball game. Get into the exciting ball races in cool environments to have a lot of fun in this rolling ball game 3d.
    Tap to roll the epic ball quickly and steadily to balance it carefully in challenging levels. Break your new record in ball run game and overcome the challenges to become ball race master. Collect the different bonuses on the racing ramp to be stronger and finish the`
  },
  {
    src: 'https://play.google.com/store/apps/details?id=com.ga.stickman.rope.spider.hero.crime.games',
    img: 'https://play-lh.googleusercontent.com/YcKqOFH5Td0LFgG8YReuCeZyiX83mJh_Ub9RHuS_jKTX4LlNDeSrtO-9HPMpgNAuCTI=s256-rw',
    title: 'Stickman Spider Rope Games',
    description: `An action-packed stickman spider rope hero game is here. Enjoy!`
  },
  {
    src: 'https://play.google.com/store/apps/details?id=com.hb.Slow.Mo.Hero.Running.Game',
    img: 'https://play-lh.googleusercontent.com/S6ZJxIuhxSlzLebw0SNn81PruLG8iX3rr80Fdylnll7KK9Mi3XQcIlagLhqHlXVAj0E=s256-rw',
    title: 'Slow Mo Hero - Running Game',
    description: `Slow Mo Hero is an interesting drag running game where you can run and fight with people in various action styles. This slow mo game allows you to move your character in slow motion. Drag, kick, punch, jump, avoid bullets and navigate through obstacles in a variety of custom ways. Make a fighting pose by dragging limbs to attack enemies and enjoy slow mo game offline.`
  },
  {
    src: 'https://play.google.com/store/apps/details?id=com.brg.freegames.trafficcar.cargames.trafficcity',
    img: 'https://play-lh.googleusercontent.com/OTLPtquEolRjx03JNR3tidmleT-xcV-wFad9-rCuvTtJUQfNeWE4KhlhPjRH9fMKhyI=s256-rw',
    title: 'Mini Car Games – Traffic Games',
    description: `Car games lovers are welcome to play mini car race in traffic games. If you are an expert traffic driver then take the ultimate car run challenge in crazy traffic game. In this gadi game, you are going to experience real traffic car racing game on heavy traffic road. Do you want the next level of entertainment with traffic games then be ready to drive amazing cars in these mini car racing games. The traffic road in these mini car games will challenge your traffic driving game skills. So, drive carefully and enjoy mini car race to become a traffic driver of kar games. Latest collections of vehicles for car run are available in this gadi wala game. Are you a crazy traffic driver? then, you will experience the real feel of chasing and drifting through the streets of a real city rush. Show your driving skills in the city`
  },
  {
    src: 'https://play.google.com/store/apps/details?id=com.hb.grand.city.thug.gangster.vegas.cirme.simulator.game',
    img: 'https://play-lh.googleusercontent.com/yGTyq-ZR6EupBIDjiiFzgcXLyB5wyh54BrsQSzMGo0sS-u1fMK88LKpaAplZRJWzfco=s256-rw',
    title: 'Gangster City Thug Crime Game',
    description: `Welcome to the gangster city thug game with ultimate thrill and exciting open-world gameplay. Try to conquer the city with grand gangster mafia war and rule over the gangster sin city. Drive bikes and cars in a huge city with full of mafia crime gangster in this gangster city crime game. Fight with other criminal gangsters in epic gang war by using ultimate modern weapons and RPG elements. Experience the thrill of gangster bike driving in crime city game offline.`
  },
  {
    src: 'https://play.google.com/store/apps/details?id=com.hgs.extremeracing.citydriving.driftcar',
    img: 'https://play-lh.googleusercontent.com/zuGL_tmoYyIymiGF0is0uNF831uFVKi7Z42XJnkKcUPuUB82n3TkcIQnT7VE7M6yHMzx=s256-rw',
    title: 'Superhero Car Stunt- Car Games',
    description: `Superhero car stunt games lovers are welcome to enjoy crazy car driving in spider car games. Get ready for do crazy car stunts in spider superhero car games where you will get a chance to drive your favorite car in this gadi wala game. You will find an amazing collection of crazy cars unseen in other mega ramp car games or spider superhero car racing games. To fulfill your crazy car driving madness, we have designed impossible tracks for ultimate car stunts to do in stunt driving games. If you love superhero car stunt games or mega ramp car racing games then, be ready for crazy car driving in this spider car stunt game. Add another crazy car stunts gameplay in the list of your favorite mega ramp car stunt games`
  },
  {
    src: 'https://play.google.com/store/apps/details?id=com.hb.kniferunner.game',
    img: 'https://play-lh.googleusercontent.com/k-Sug3yrX9QpS6iJurosOa6B2EUu3vkVm657BXqMNPYlUhbOZrtekyGado1l2nnORA=s256-rw',
    title: 'Knife Runner 3D - Knife Games',
    description: `Welcome to the knife game 3d, the ultimate knife run and slicing experience that redefined the genre. Dive into the epic world of action games where every slicing with skills & accuracy. The power and precision of each slice turning you into the knife master.
    Experience the thrill of knife cutting game and action game like never before. Navigate through the challenging levels with the skills of knife master. Collect the knives and cut or slice fruits, vegetables, pumpkins, wooden crates, bottles, bubble wraps, cakes, jelly, soap, even everything in your way. Challenge yourself with moving targets and dynamic obstacles in this knife game.`
  },
  {
    src: 'https://play.google.com/store/apps/details?id=com.gt.wildhunter.bullattack.hungrybull.attackrampage',
    img: 'https://play-lh.googleusercontent.com/SD9ryCkrMfRI_wnLq0OC9w8Gvf3AF9gM4ryC1IvBfHYEIN5T7R_1ebl8Q6O0wAsAA9k=s256-rw',
    title: 'Bull Games - Wild Animal Games',
    description: `Welcome to the wild animal games where you will enjoy exciting modes of bull fight game in this angry bull attack simulator. This wild animal attack game contains challenging missions to play in different arenas of bull fighting games i.e., seesaw, sand, street arena. Each mode of wild animal simulator games has sub mode with different gameplay which is unseen in other wild animals or bull games. Angry bull fighting game will give a tough time to survive in animal simulator unlike other animal hunting games. Stop the angry bull from the city attack and survive like a champion in animal attack games. If you want action packed features in wild animal games then get the experience of crazy bull fight game by having this animal attack simulator.` 
  },
  {
    src: 'https://play.google.com/store/apps/details?id=com.gf.mobile.car.wash.servicestation.workshop',
    img: 'https://play-lh.googleusercontent.com/CTrcDXexi-doqEEW_Ib9bBac0WDXtfNkTgqSxHNLTc83E-YhTsD4Q4q9y7mBogGmkXI=s256-rw',
    title: 'Mobile Car Wash: Car Games 3d',
    description: `Car wash games lovers are welcome to become a car cleaning master in this washing car game. Unlike other car games 3d, this car wash simulator will provide you the chance perform multiple tasks i.e. mobile car wash, car paint and polish with power washing service. Don’t let your customers go to auto workshop garage in your car wash game. Provide modern car wash service at their destination for ease of playing fun car washing games. Many car wash games and offline car games are available in google play store where you will have to go to automobile workshop service station to car cleanup. Mobile carwash games will provide a different process of to wash cars that you are going to enjoy in these car cleaning games. All you need is to wash the muddy cars in car wash`
  },
  {
    src: 'https://play.google.com/store/apps/details?id=com.hb.dozer.demolish.adventure',
    img: 'https://play-lh.googleusercontent.com/4qxZt5mf5BTJ6LYYPPzv762VJKN5hDu9uCglmGVEQXZEc7YFcrcCzEpik_BEohggFcwA=s256-rw',
    title: 'Demolish Adventure: Dozer Game',
    description: `Welcome to your favorite city demolish dozer game where you get to destroy giant city with your bulldozer. Brace yourself in thrilling adventures to master the destruction simulator game.
    Get ready to demolition in a satisfying way through diverse challenges in this destruction game. Take control of immersive bulldozer with a massive wrecking ball and do a city smash in this bulldozer game. Plan your demolition city strategically to smash & rebuild in city demolish dozer game. Conquer the giant city with powerful wheel dozers, choose the right machine to tear down the giant city an`
  },
  {
    src: 'https://play.google.com/store/apps/details?id=com.hb.shapeshifting.transform.race.car.games',
    img: 'https://play-lh.googleusercontent.com/9Y0qunVZqq_1Tdwxl76OX83gFkdJGiQyAw6RYNEB2-b9LiW-S3MG7hTVo5D4d5jh-yY=s256-rw',
    title: 'Multi Shape Shift Car Game',
    description: `Be ready to join the ultimate transform race in shape shifting car game. This shapeshift game will allow you to shift and shape into interesting vehicles on various terrain i.e., road, water and air. Adapt to your surroundings and stay one step ahead of the competition by doing instant shape transform. Transform into a variety of amazing cars 🚕, helicopters 🚁, bicycle 🚲, monster trucks each with its unique abilities in shape shifting game. Each level offers a different shape shift transform race challenge where you can showcase your shape shifting and transform skills. Enjoy transform race against AI opponents and beat them all to become an expert shape changer!`
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

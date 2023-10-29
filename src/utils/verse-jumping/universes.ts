import { Trait } from "~/utils/verse-jumping/trait";

export interface Universe {
  description: string;
  result: string;
  addsTraits: Trait[];
  removesTraits: Trait[];
  isCorrectChoice: boolean;
}

const UNIVERSE_OPTIONS_0: Universe[] = [
  {
    description: "Brian is a really cool name",
    result:
      "Your parents, wanting only the best for you, named you Brian. What a beautiful name for a beautiful baby.",
    addsTraits: [Trait.BRIAN],
    removesTraits: [Trait.NOT_BRIAN],
    isCorrectChoice: true,
  },
  {
    description: "everyone is a Teletubby",
    result:
      "Even though it's really convenient to be able to watch Netflix on your own stomach, you have a feeling this isn't going to lead you any closer to becoming Brian.",
    addsTraits: [Trait.TELETUBBY],
    removesTraits: [],
    isCorrectChoice: false,
  },
  {
    description: "the lizard people run the shadow government",
    result:
      "That's already the reality in your universe — you've basically wasted a jump.",
    addsTraits: [Trait.TRUTH],
    removesTraits: [],
    isCorrectChoice: false,
  },
];

const UNIVERSE_OPTIONS_1: Universe[] = [
  {
    description: "Expedia buys Airbnb",
    result:
      "The Vrbo team is working double time to centralize the vacation rental codebase. Thank god you're not on that team. Are you?",
    addsTraits: [Trait.OVERTIME],
    removesTraits: [],
    isCorrectChoice: false,
  },
  {
    description: "Barbie makes a Vegan Barbie",
    result:
      "Vegan Barbies fly off the shelves! Kids in your generation quit meat en masse. For better or worse, this is the opposite of becoming Brian.",
    addsTraits: [Trait.VEGAN],
    removesTraits: [],
    isCorrectChoice: false,
  },
  {
    description: "Popeye's laced their chicken with cocaine",
    result:
      "Man, that nation-wide fried chicken coke epidemic of '97 was crazy. Luckily, the coke offsets the weight gain of the chicken, but your health is in dire straits at the ripe young age of 6. Your physique is now more Brian-like than ever.",
    addsTraits: [Trait.WEAK],
    removesTraits: [Trait.FIT],
    isCorrectChoice: true,
  },
];

const UNIVERSE_OPTIONS_2: Universe[] = [
  {
    description: "plastic surgery is cheap and accessible",
    result:
      "Everyone gets to choose what they look like! You're not just good-looking, you're drop-dead gorgeous... and that's why you're further away from being Brian than you've ever been.",
    addsTraits: [Trait.GORGEOUS],
    removesTraits: [Trait.GOOD_LOOKING],
    isCorrectChoice: false,
  },
  {
    description: "home gym equipment is cheap and accessible",
    result:
      "Having your own bench press is amazing, but your weak constitution causes you to drop the bar on your face. Repeatedly. You look more and more like Brian every day. Yay!",
    addsTraits: [Trait.DISFIGURED],
    removesTraits: [Trait.GOOD_LOOKING],
    isCorrectChoice: true,
  },
  {
    description: "microchips are cheap and accessible",
    result:
      "Not only that, but you can make so many of them from a single potato! The texture is absolutely amazing, you can't wait to try a micronacho. This was a worthwhile jump, but you should get back to becoming Brian.",
    addsTraits: [],
    removesTraits: [],
    isCorrectChoice: false,
  },
];

const UNIVERSE_OPTIONS_3: Universe[] = [
  {
    description: "you went to college at MIT",
    result:
      'You spend a full year at school before realizing you\'re enrolled at "Mississippi Institute of Tacos" instead of that other place. The parties go real hard on Tuesdays though!',
    addsTraits: [Trait.TACO_BELL],
    removesTraits: [],
    isCorrectChoice: false,
  },
  {
    description: "you went to college at LVU",
    result:
      "Las Vegas University is exactly what it sounds like. You're deep in debt, thanks to that midterm exam in \"Blackjack 101\". Others may wonder how this makes you closer to becoming Brian, but you've got it alllll planned out.",
    addsTraits: [Trait.BROKE],
    removesTraits: [],
    isCorrectChoice: true,
  },
  {
    description: "you went to college at UCB",
    result:
      "You learn quantum physics and become a world-renowned scientist. At 28 years old, you create the world's first verse-jumping machine. You gotta share this technology with the other universes!",
    addsTraits: [Trait.VERSE_JUMPING],
    removesTraits: [],
    isCorrectChoice: false,
  },
];

const UNIVERSE_OPTIONS_4: Universe[] = [
  {
    description: "you're oddly fixated on the letter X",
    result:
      "You also name your children using symbols and numbers. You seem to be getting further away from becoming Brian, and much much closer to an equally problematic individual...",
    addsTraits: [],
    removesTraits: [],
    isCorrectChoice: false,
  },
  {
    description: "the dress is white and gold",
    result: "What have you done??? You need to go back. NOW.",
    addsTraits: [
      Trait.ERROR_DISFIGURED,
      Trait.ERROR_WEAK,
      Trait.ERROR_FRIENDS,
      Trait.ERROR_BRIAN,
      Trait.ERROR_BROKE,
    ],
    removesTraits: [
      Trait.DISFIGURED,
      Trait.WEAK,
      Trait.FRIENDS,
      Trait.BRIAN,
      Trait.BROKE,
    ],
    isCorrectChoice: false,
  },
  {
    description: "friends are a commercially traded currency",
    result:
      "Instead of becoming bankrupt, you were forced to sell all your friends on eBay to pay off your debt. Friendless and alone, you are one step closer to becoming Brian! Huzzah!",
    addsTraits: [],
    removesTraits: [Trait.FRIENDS, Trait.BROKE],
    isCorrectChoice: true,
  },
];

const UNIVERSE_OPTIONS_5: Universe[] = [
  {
    description: "anime is a core subject in school",
    result:
      'You\'ve stopped interacting with people entirely to focus on your "studies", which may have stunted your emotional growth... but who needs that! You do spectacularly in school, and your parents are proud of you for once :)',
    addsTraits: [Trait.LOW_EQ, Trait.GOOD_GRADES],
    removesTraits: [],
    isCorrectChoice: true,
  },
  {
    description: "puzzle design is a core subject in school",
    result:
      "Well, if you'd paid ANY attention in class, you certainly wouldn't be able to come up with something as bad as whatever you're playing right now. Go back 3 spaces, and do not pass GO.",
    addsTraits: [],
    removesTraits: [],
    isCorrectChoice: false,
  },
  {
    description: "mental health is a core subject in school",
    result:
      "You learn that self-deprecation humor is a crutch for playing off your low self esteem and impostor syndrome. You make small steps to become healthier every day — eating better, exercising more, making new friends, and getting more sleep. You need to turn back RIGHT NOW if you want any chance of becoming Brian.",
    addsTraits: [Trait.PEACE, Trait.TRYING],
    removesTraits: [],
    isCorrectChoice: false,
  },
];

const UNIVERSE_OPTIONS_6: Universe[] = [
  {
    description: "politics are cool",
    result:
      "Oh my gosh, do you remember the presidential debate from 2012? O-dawg absolutely wrecked Rom-Rom with that double-backflip into a triple-axel on the edge of a live volcano. They're selling a GIF of it as an NFT next month, I heard Keanu Reeves is gonna fight Prince Harry for it.",
    addsTraits: [Trait.POLITICS],
    removesTraits: [],
    isCorrectChoice: false,
  },
  {
    description: "eating chicken is illegal",
    result:
      "Remember all that cocaine-flavored fried chicken you ate? Yeah. You got caught and had to spend your prepubescent years in juvie, thus dropping out of school. Hope you enjoyed those A's while they lasted; the real Brian never got to.",
    addsTraits: [],
    removesTraits: [Trait.GOOD_GRADES],
    isCorrectChoice: true,
  },
  {
    description: "Verizon doesn't suck",
    result: "[404: Universe Not Found]",
    addsTraits: [],
    removesTraits: [],
    isCorrectChoice: false,
  },
];

const UNIVERSE_OPTIONS_7: Universe[] = [
  {
    description: "Peter Kern is your best friend",
    result:
      "Oh my gosh! Is it even worth getting the answer right anymore? It's PK!!! Who wants to solve puzzles if you can hang with PK! Oh my gosh oh my gosh oh my gosh–",
    addsTraits: [Trait.HAPPINESS, Trait.MEANING_OF_LIFE],
    removesTraits: [],
    isCorrectChoice: false,
  },
  {
    description: "everyone is a Teletubby",
    result:
      "...Weren't you already presented with this choice at the start?? You went through 7 universes... just to pick this universe again? You REALLY want to watch Netflix on your own stomach, don't you? Well, who am I to judge. If you're happy, I'm happy ❤️",
    addsTraits: [Trait.TELETUBBY],
    removesTraits: [],
    isCorrectChoice: false,
  },
  {
    description: "EEAAO is one of your favorite movies of all time",
    result:
      "As a big fan of EEAAO, you decide to build an EEAAO-themed interactive puzzle hunt website within a single weekend. It goes about as well as one would expect.",
    addsTraits: [Trait.BUGGY_WEBSITES, Trait.BAD_PUZZLES, Trait.SLEEPY],
    removesTraits: [],
    isCorrectChoice: true,
  },
];

export const UNIVERSES: Universe[][] = [
  UNIVERSE_OPTIONS_0,
  UNIVERSE_OPTIONS_1,
  UNIVERSE_OPTIONS_2,
  UNIVERSE_OPTIONS_3,
  UNIVERSE_OPTIONS_4,
  UNIVERSE_OPTIONS_5,
  UNIVERSE_OPTIONS_6,
  UNIVERSE_OPTIONS_7,
];

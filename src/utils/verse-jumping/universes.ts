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
    description: "",
    result: "",
    addsTraits: [],
    removesTraits: [],
    isCorrectChoice: false,
  },
  {
    description: "",
    result: "",
    addsTraits: [],
    removesTraits: [],
    isCorrectChoice: false,
  },
  {
    description: "Popeye's laced their chicken with cocaine",
    result:
      "Man, that nation-wide fried chicken coke epidemic of '97 was crazy. Unfortunately, ingesting too many drugs in your formative years was quite bad for your health.",
    addsTraits: [Trait.WEAK],
    removesTraits: [Trait.FIT],
    isCorrectChoice: true,
  },
];

const UNIVERSE_OPTIONS_2: Universe[] = [
  {
    description: "",
    result: "",
    addsTraits: [],
    removesTraits: [],
    isCorrectChoice: false,
  },
  {
    description: "human hands secrete olive oil",
    result:
      "Oily hands are dangerous — bench pressing is the leading cause of facial injuries in this universe. You do your part in contributing to that statistic.",
    addsTraits: [Trait.DISFIGURED],
    removesTraits: [Trait.GOOD_LOOKING],
    isCorrectChoice: true,
  },
  {
    description: "",
    result: "",
    addsTraits: [],
    removesTraits: [],
    isCorrectChoice: false,
  },
];

const UNIVERSE_OPTIONS_3: Universe[] = [
  {
    description: "",
    result: "",
    addsTraits: [],
    removesTraits: [],
    isCorrectChoice: false,
  },
  {
    description: "you went to college at LVU",
    result:
      "Las Vegas University is exactly what it sounds like. A drunken night at the Black Jack table went wrong and you lost all your savings.",
    addsTraits: [Trait.BROKE],
    removesTraits: [],
    isCorrectChoice: true,
  },
  {
    description: "",
    result: "",
    addsTraits: [],
    removesTraits: [],
    isCorrectChoice: false,
  },
];

const UNIVERSE_OPTIONS_4: Universe[] = [
  {
    description: "",
    result: "",
    addsTraits: [],
    removesTraits: [],
    isCorrectChoice: false,
  },
  {
    description: "",
    result: "",
    addsTraits: [],
    removesTraits: [],
    isCorrectChoice: false,
  },
  {
    description: "friends are a commercially traded currency",
    result:
      "Instead of becoming bankrupt, you were forced to sell all your friends on eBay to pay off your debt.",
    addsTraits: [],
    removesTraits: [Trait.FRIENDS, Trait.BROKE],
    isCorrectChoice: true,
  },
];

const UNIVERSE_OPTIONS_5: Universe[] = [
  {
    description: "anime is a core subject in school",
    result:
      'You\'ve stopped interacting with people entirely to focus on your "studies". You do very well in school.',
    addsTraits: [Trait.LOW_EQ, Trait.GOOD_GRADES],
    removesTraits: [],
    isCorrectChoice: true,
  },
  {
    description: "",
    result: "",
    addsTraits: [],
    removesTraits: [],
    isCorrectChoice: false,
  },
  {
    description: "",
    result: "",
    addsTraits: [],
    removesTraits: [],
    isCorrectChoice: false,
  },
];

const UNIVERSE_OPTIONS_6: Universe[] = [
  {
    description: "",
    result: "",
    addsTraits: [],
    removesTraits: [],
    isCorrectChoice: false,
  },
  {
    description: "eating chicken is illegal",
    result:
      "Remember all that cocacine-flavored fried chicken you ate? You got caught eating it and had to spend your prepubescent years in jail, thus dropping out of school.",
    addsTraits: [],
    removesTraits: [Trait.GOOD_GRADES],
    isCorrectChoice: true,
  },
  {
    description: "",
    result: "",
    addsTraits: [],
    removesTraits: [],
    isCorrectChoice: false,
  },
];

const UNIVERSE_OPTIONS_7: Universe[] = [
  {
    description: "",
    result: "",
    addsTraits: [],
    removesTraits: [],
    isCorrectChoice: false,
  },
  {
    description: "",
    result: "",
    addsTraits: [],
    removesTraits: [],
    isCorrectChoice: false,
  },
  {
    description: "EEAAO is one of your favorite movies of all time",
    result:
      "As a big fan of EEAAO, you decide to build an EEAAO-themed interactive puzzle hunt website within a single weekend.",
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

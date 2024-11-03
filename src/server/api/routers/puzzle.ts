import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

// I got tired of reactivating the free tier DB...
const USE_STATIC_DATA = true;

interface StaticPuzzleData {
  id: number;
  title: string;
  answer: string;
}

const STATIC_PUZZLE_DATA: Record<number, StaticPuzzleData> = {
  1: {
    id: 1,
    title: "Tax Forms",
    answer: "BARON",
  },
  2: {
    id: 2,
    title: "Very Busy!",
    answer: "ETA",
  },
  3: {
    id: 3,
    title: "Verse-Jumping",
    answer: "ESTRANGE",
  },
  4: {
    id: 4,
    title: "Raccoontouille",
    answer: "LEASH",
  },
  5: {
    id: 5,
    title: "META",
    answer: "BUYFROMHOLEFOODS",
  },
};

export const puzzleRouter = createTRPCRouter({
  getPuzzle: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ ctx, input }) => {
      if (USE_STATIC_DATA) {
        return STATIC_PUZZLE_DATA[input.id];
      }
      return ctx.db.puzzle.findUnique({
        where: {
          id: input.id,
        },
      });
    }),

  postGuess: publicProcedure
    .input(z.object({ guess: z.string().min(1), puzzleId: z.number() }))
    .mutation(async ({ ctx, input }) => {
      if (USE_STATIC_DATA) return;
      return ctx.db.guess.create({
        data: {
          guess: input.guess,
          puzzleId: input.puzzleId,
        },
      });
    }),

  postWinner: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      if (USE_STATIC_DATA) return;
      return ctx.db.winner.create({
        data: {
          name: input.name,
        },
      });
    }),

  getWinners: publicProcedure.query(async ({ ctx }) => {
    if (USE_STATIC_DATA) return;
    return ctx.db.winner.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });
  }),
});

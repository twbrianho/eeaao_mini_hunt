import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const puzzleRouter = createTRPCRouter({
  getPuzzle: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.db.puzzle.findUnique({
        where: {
          id: input.id,
        },
      });
    }),

  postGuess: publicProcedure
    .input(z.object({ guess: z.string().min(1), puzzleId: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.guess.create({
        data: {
          guess: input.guess,
          puzzleId: input.puzzleId,
        },
      });
    }),
});

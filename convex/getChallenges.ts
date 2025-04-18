// filepath: /C:/Users/user/OneDrive/Desktop/code-quest/convex/getChallenges.ts
import { query } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {
    // Optional: Add args for filtering, e.g., by language
    language: v.optional(v.string()), // Added key 'language'
    difficulty: v.optional(v.number()), // Added optional difficulty filter
  },
  handler: async (ctx, args) => {
    // Start building the query
    let challengesQuery = ctx.db.query("challenges");

    // Apply filters based on arguments provided
    if (args.language) {
      challengesQuery = challengesQuery.filter((q) => q.eq(q.field("language"), args.language));
    }
    if (args.difficulty !== undefined && args.difficulty !== null) { // Check for existence, as 0 is a valid difficulty
        challengesQuery = challengesQuery.filter((q) => q.eq(q.field("difficulty"), args.difficulty));
    }

    // Execute the query and collect results
    const challenges = await challengesQuery.collect();

    return challenges;
  },
});
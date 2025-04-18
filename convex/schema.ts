import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Users table to store basic info, linked to Clerk user ID
  users: defineTable({
    name: v.string(),
    // Store Clerk user ID for linking
    // This should be the 'subject' field from the JWT token
    clerkIdentifier: v.string(),
    level: v.number(),
    xp: v.number(),
    // Add other user-specific fields: characterClass, avatarUrl, etc.
  }).index("by_clerk_identifier", ["clerkIdentifier"]), // Index for efficient lookup

  // Challenges table
  challenges: defineTable({
    title: v.string(),
    description: v.string(),
    difficulty: v.number(), // e.g., 1-5
    language: v.string(), // e.g., "javascript", "python"
    // Add other fields: starterCode, testCases, rewards (XP, items), etc.
  }),

  // User progress on challenges (example)
  userChallengeProgress: defineTable({
    userId: v.id("users"),
    challengeId: v.id("challenges"),
    status: v.union(
        v.literal("not_started"),
        v.literal("in_progress"),
        v.literal("completed")
    ),
    completedAt: v.optional(v.number()), // Timestamp
  })
  .index("by_user_challenge", ["userId", "challengeId"]), // Index for efficient lookup

  // Add other tables as needed: guilds, items, leaderboards, etc.
});
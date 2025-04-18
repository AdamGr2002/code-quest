// filepath: /C:/Users/user/OneDrive/Desktop/code-quest/convex/users.ts
import { internalMutation, query } from "./_generated/server";
import { v } from "convex/values";

// Function to get the Convex user ID from the Clerk user ID
export const getUserId = query({
    args: {}, // No args needed, identity comes from context
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) {
            // Not logged in
            return null;
        }
        // Find user by Clerk's tokenIdentifier (subject field)
        const user = await ctx.db
            .query("users")
            .withIndex("by_clerk_identifier", (q) =>
                q.eq("clerkIdentifier", identity.subject)
            )
            .unique();

        return user?._id; // Return Convex user ID or null
    },
});


// Internal mutation to create/update user data based on Clerk info
// This is often called from an HTTP endpoint webhook or directly if needed
// For automatic sync with ConvexProviderWithClerk, Convex handles this implicitly
// based on the JWT token, but you might need a function like this for specific updates.
export const storeOrUpdateUser = internalMutation({
    args: {
        clerkIdentifier: v.string(),
        name: v.string(),
        // Add other fields from Clerk if needed, like email, picture etc.
     },
    handler: async (ctx, args) => {
        const existingUser = await ctx.db
            .query("users")
            .withIndex("by_clerk_identifier", (q) =>
                q.eq("clerkIdentifier", args.clerkIdentifier)
            )
            .unique();

        if (existingUser === null) {
            // Create new user
            await ctx.db.insert("users", {
                clerkIdentifier: args.clerkIdentifier,
                name: args.name, // Use name from Clerk token or a default
                level: 1, // Default starting values
                xp: 0,
            });
        } else {
            // Optional: Update existing user if needed (e.g., name change)
            // await ctx.db.patch(existingUser._id, { name: args.name });
            console.log("User already exists:", existingUser._id);
        }
    },
});

// You might need an HTTP action endpoint to receive Clerk webhooks
// for user creation/updates if not relying solely on JWT sync.
// See Convex docs for Clerk webhooks.
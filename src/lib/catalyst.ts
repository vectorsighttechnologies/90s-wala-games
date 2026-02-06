import catalyst from 'zcatalyst-sdk-node';

/**
 * Catalyst Server-side Utility
 * This uses the Node.js SDK to interact with Catalyst DataStore.
 * 
 * Environment Variables Required:
 * CATALYST_PROJECT_ID - Your Catalyst Project ID
 * CATALYST_CLIENT_ID - OAuth Client ID (for local dev)
 * CATALYST_CLIENT_SECRET - OAuth Client Secret (for local dev)
 * CATALYST_REFRESH_TOKEN - Refresh Token (for local dev)
 */

export const getCatalystApp = (req?: any) => {
    // If running in production on Zoho Catalyst, initialize without arguments
    if (process.env.CATALYST_PROJECT_ID && !process.env.CATALYST_CLIENT_ID) {
        return catalyst.initialize(req);
    }

    // For local development or external hosting
    // We need to provide the credentials explicitly
    if (process.env.CATALYST_CLIENT_ID && process.env.CATALYST_CLIENT_SECRET && process.env.CATALYST_REFRESH_TOKEN) {
        return catalyst.initialize({
            clientId: process.env.CATALYST_CLIENT_ID,
            clientSecret: process.env.CATALYST_CLIENT_SECRET,
            refreshToken: process.env.CATALYST_REFRESH_TOKEN,
            projectId: process.env.CATALYST_PROJECT_ID
        });
    }

    // Fallback default
    return catalyst.initialize(req);
};

export const insertWaitlistRow = async (data: { Email: string; Source: string }) => {
    const app = getCatalystApp();
    const datastore = app.datastore();
    const table = datastore.table('Waitlist');

    return await table.insertRow(data);
};

export const insertSuggestionRow = async (data: { GameName: string; Email: string }) => {
    const app = getCatalystApp();
    const datastore = app.datastore();
    const table = datastore.table('GameSuggestions');

    return await table.insertRow(data);
};

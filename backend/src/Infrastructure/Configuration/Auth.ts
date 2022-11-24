export const steamAuthConfig = {
    returnURL : process.env.STEAM_RETURN_URL,
    realm: process.env.STEAM_REALM,
    apiKey: process.env.STEAM_API_KEY || (() => {
        console.error("Steam API Key is not defined!")
        process.exit(1)
    })()
}
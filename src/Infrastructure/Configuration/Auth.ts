export const steamAuthConfig = {
    returnURL : `http://localhost:3001/api/auth/steam/return`,
    realm: `http://localhost:3001/`,
    apiKey: process.env.STEAM_API_KEY || (() => {
        console.error("Steam API Key is not defined!")
        process.exit(1)
    })()
}
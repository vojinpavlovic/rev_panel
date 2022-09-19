export const steamOAuthConfig = {
    returnURL : `http://localhost${parseInt(<string>process.env.PORT ?? 3000)}/api/auth/steam/return`,
    realm: 'http://localhost${parseInt(<string>process.env.PORT ?? 3000)}/',
    apiKey: process.env.STEAM_API_KEY || (() => {
        console.log("Steam API Key is not defined!")
        process.exit(1)
    })()
}
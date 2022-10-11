export default store => {
    return {
        store: store,
        secret: process.env.SESSION_SECRET ?? "",
        saveUninitialized: false,
        resave: false,
        sameSite : 'none',
        secure: false,
        cookie: {
            maxAge: 3600000
        },
        httpOnly: false,
    }
}
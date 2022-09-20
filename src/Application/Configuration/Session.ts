export default store => {
    return {
        store: store,
        secret: process.env.SESSION_SECRET ?? "",
        saveUninitialized: true,
        resave: false,
        cookie: {
            maxAge: 3600000
        }
    }
}
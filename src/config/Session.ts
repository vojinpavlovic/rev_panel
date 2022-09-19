export const sessionConfig = {
    secret: process.env.SESSION_SECRET || (() => {
        console.log("Session Secret is not defined!")
        process.exit(1)
    }),
    saveUninitialized: true,
    resave: false,
    cookie: {
        maxAge: 3600000
    }
       
} 
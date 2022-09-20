import auth from "../../Infrastructure/Services/AuthService";

export default app => {
    const passport = auth.setup();
    app.use(passport.initialize());
    app.use(passport.session());
}
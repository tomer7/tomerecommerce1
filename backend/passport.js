import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
passport.use(
   new GoogleStrategy(
      {
         clientID: process.env.CLIENT_ID_G,
         clientSecret: process.env.CLIENT_SECRET_G,
         callbackURL: '/auth/google/callback'
      },
      function (accessToken, refreshToken, profile, cb) {
         User.findOrCreate({ googleId: profile.id }, function (err, user) {
            return cb(err, user)
         })
      }
   )
)

passport.serializeUser((user, cb) => {
   cb(null, user)
})
passport.deserializeUser((user, cb) => {
   cb(null, user)
})

export * from './passport.js'

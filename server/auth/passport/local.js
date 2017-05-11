import passport from 'passport'
import LocalStrategy from 'passport-local'
import User from '../../api/user/user.model'


export default function(User, config) {

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  let localStrategyCb = (email, password, done) => {
    User.findOne({email}, (err, user) => {
      if (err) { return done(err); }
      if (!user) {  return done(null, false, {message: 'This email is not registered.'}); }
      if (!user.authenticate(password)) { return done(null, false, {message: 'This password is not correct.'}); }
      return done(null, user);
    })
  };

  passport.use(new LocalStrategy({usernameField: 'email', passwordField: 'password'}, localStrategyCb));
}
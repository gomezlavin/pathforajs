var module = new pathfora.Form({
  id: 'social-form',
  layout: 'slideout',
  headline: 'Sign Up!',
  msg: 'Submit this form to get updates',
  showSocialLogin: true
});

pathfora.integrateWithFacebook('YOUR FACEBOOK APP ID');
pathfora.integrateWithGoogle('YOUR GOOGLE CLIENT ID');
pathfora.initializeWidgets([module]);

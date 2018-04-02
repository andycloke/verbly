import * as React from 'react';
import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedButton';

import './SignUpForm.css';

const SignUpForm = () => (
  <div id="mc_embed_signup" className="SignUpForm">
    <h1 className="SignUpForm__title">Newsletter</h1>
    <p className="SignUpForm__message">
      Hear about major features when they're added.
    </p>
    <form
      action="https://github.us15.list-manage.com/subscribe/post?u=9aea0e2bc4fdecfc0af9c9b3b&amp;id=4d43310977"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate SignUpForm__form"
      target="_blank"
      noValidate
    >
      <div id="mc_embed_signup_scroll">
        <div className="mc-field-group">
          <TextField
            type="email"
            name="EMAIL"
            className="required email"
            id="mce-EMAIL"
            floatingLabelText="Email Address"
            floatingLabelFixed
            floatingLabelStyle={{ color: 'black' }}
            fullWidth
          />
        </div>
        <div id="mce-responses" className="clear">
          <div
            className="response"
            id="mce-error-response"
            style={{ display: 'none' }}
          />
          <div
            className="response"
            id="mce-success-response"
            style={{ display: 'none' }}
          />
        </div>
        <div style={{ position: 'absolute', left: '-5000px' }}>
          <input
            type="text"
            name="b_9aea0e2bc4fdecfc0af9c9b3b_4d43310977"
            tabIndex={-1}
          />
        </div>
        <div className="clear">
          <div className="SignUpForm__buttonOuter">
            <input
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button SignUpForm__button"
              value="SIGN UP"
            />
          </div>
        </div>
      </div>
    </form>
    <p className="SignUpForm__footer">
      Verbly is made by{' '}
      <a target="_blank" rel="nofollow" href="https://twitter.com/clokehead">
        Andy Cloke
      </a>
    </p>
  </div>
);

export default SignUpForm;

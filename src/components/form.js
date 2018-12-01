import React from 'react'

const Form = () => (
  <div className="field">
    <form className="control" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="bot-field"/>
      <input className="input" name="email" type="text" id="email" placeholder="Put in a valid email and press enter"/>
      <input className="button" type="submit" value="Submit" style={{float: "right"}} />
    </form>
  </div>
)

export default Form

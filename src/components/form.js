import React from 'react'

const Form = () => (
  <div className="field">
    <form className="control" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="bot-field"/>
      <input className="input" name="email" type="text" id="email" placeholder="Put in a valid email and press enter"/>
      <div>
        <input className="button" type="submit" placeholder="Submit" style={{float: "right"}} />
      </div>
    </form>
  </div>
)

export default Form

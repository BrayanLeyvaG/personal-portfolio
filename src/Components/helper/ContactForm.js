import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
export function ContactForm() {
  const [state, handleSubmit] = useForm("xyyoekrb");
  if (state.succeeded) {
      return <div className='div-ty'><p className='thanks'>Thanks for your message!</p><p className='tyhappy'>☺</p></div>;
  }
  return (
    <form onSubmit={handleSubmit} className='all-form' method='post'>
      <label htmlFor="email">
          Email Address:
      </label>
      <input className='email-input' placeholder='name@email.com'
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="email">
          Message:
      </label>
      <textarea className='text-area' placeholder="Hey! let's work together"
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className='button-sub'>
        Submit
      </button>
    </form>
  );
}
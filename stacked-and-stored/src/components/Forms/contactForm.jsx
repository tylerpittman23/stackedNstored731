import { useForm, ValidationError } from '@formspree/react';

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("xbjnpbvl");

  if (state.succeeded) {
      return <p className='text-center text-3xl'>Thank you for reaching out! </p>;
  }
  return (
      <form id='contactForm' onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>
        <label htmlFor="name" className='w-full'>
        Name
        </label>
            <input
              id="name"
              type="name" 
              name="name"
              required
              className='mb-2 border-2 border-gray-400 p-2 w-full rounded-sm'
            />
        <label htmlFor="phone" className='w-full'>
        Phone
        </label>
            <input
              id="phone"
              type="phone" 
              name="phone"
              placeholder='(optional)'
              className='mb-2 p-2 w-full border-2 border-gray-400 rounded-sm'
            />
      <label htmlFor="email" className='w-full'>
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        required
        className='mb-10 p-2 w-full border-2 rounded-sm border-gray-400'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        required
        placeholder='How can I help?'
        className='mb-2 h-40 p-2 w-full rounded-sm border-2 border-gray-400 resize-none'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className='w-52 bg-gray-400 rounded-sm text-white text-lg p-2'>
        Submit
      </button>
    </form>
  );
}
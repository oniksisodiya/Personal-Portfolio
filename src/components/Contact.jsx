import React from 'react';

const Contact = () => {
  return (
    <section
      name='contact'
      className='flex h-screen w-full items-center justify-center bg-lightBg dark:bg-darkBg p-4'
    >
      <form
        method='POST'
        action='https://getform.io/f/lakmgdwa'
        className='flex w-full max-w-[600px] flex-col'
      >
        <div className='pb-8'>
          <h2 className='inline border-b-4 border-secondary dark:border-primary text-4xl font-bold text-lightText dark:text-darkText'>
            Contact
          </h2>
          <p className='py-4 text-lightText dark:text-darkText'>
            Submit the form below or shoot me an email - oniksisodiya7@gmail.com
          </p>
        </div>
        
        <label htmlFor='name' className='sr-only'>
          Name
        </label>
        <input
          className='bg-lightInput dark:bg-darkInput p-2 text-lightText dark:text-darkText'
          type='text'
          placeholder='Name'
          name='name'
          id='name'
        />

        <label htmlFor='email' className='sr-only'>
          Email
        </label>
        <input
          className='my-4 bg-lightInput dark:bg-darkInput p-2 text-lightText dark:text-darkText'
          type='email'
          placeholder='Email'
          name='email'
          id='email'
        />

        <label htmlFor='message' className='sr-only'>
          Message
        </label>
        <textarea
          className='bg-lightInput dark:bg-darkInput p-2 text-lightText dark:text-darkText'
          name='message'
          id='message'
          rows='10'
          placeholder='Message'
        ></textarea>

        <button
          type='submit'
          className='group mx-auto my-8 flex items-center border-2 border-secondary dark:border-primary px-4 py-3 text-secondary dark:text-primary hover:border-[#D3C1A5] hover:bg-[#D3C1A5] hover:text-darkBg'
        >
          Let's Collaborate 🤝
        </button>
      </form>
    </section>
  );
};

export default Contact;

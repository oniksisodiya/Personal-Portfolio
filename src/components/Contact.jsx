import React from 'react';

const Contact = () => {
  return (
    <section
      name='contact'
      className="w-full h-screen bg-[length:200%_200%] bg-gradient-to-r from-[#ffe4e1] via-[#add8e6] to-[#e6e6fa] dark:bg-gradient-to-r dark:from-[#1A202C] dark:via-[#2D3748] dark:to-[#4A5568] animate-movingBg text-lightText dark:text-darkText flex flex-col justify-center items-center"
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

    <div className="mt-6">  </div>
        <button 
          type='submit'
          className="bg-neutral-950 text-neutral-400 border border-neutral-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
          <span class="bg-neutral-400 shadow-neutral-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
        
          Let's Colaborate 🤝
        </button>
      </form>
    </section>
  );
};

export default Contact;

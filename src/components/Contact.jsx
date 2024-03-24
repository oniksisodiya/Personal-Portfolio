import React from "react";

const Contact = () => {
  return (
    <section
      name="contact"
      className="flex h-screen w-full items-center justify-center bg-[#2E2E2E] p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/lakmgdwa"
        className="flex w-full max-w-[600px] flex-col"
      >
        <div className="pb-8">
          <h2 className="inline border-b-4 border-[#B89B7D] text-4xl font-bold text-[#F0E8D9]">
            Contact
          </h2>
          <p className="py-4 text-[#F0E8D9]">
            Submit the form below or shoot me an email - oniksisodiya7@gmail.com
          </p>
        </div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          className="bg-[#F0E8D9] p-2 text-[#000000]"
          type="text"
          placeholder="Name"
          name="name"
          id="name"
        />

        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          className="my-4 bg-[#F0E8D9] p-2 text-[#000000]"
          type="email"
          placeholder="Email"
          name="email"
          id="email"
        />

        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          className="bg-[#F0E8D9] p-2 text-[#000000]"
          name="message"
          id="message"
          rows="10"
          placeholder="Message"
        ></textarea>

        <button
          type="submit"
          className="group mx-auto my-8 flex items-center border-2 border-[#B89B7D] px-4 py-3 text-[#B89B7D] hover:border-[#D3C1A5] hover:bg-[#D3C1A5] hover:text-[#2E2E2E]"
        >
          Let's Collaborate 🤝
        </button>
      </form>
    </section>
  );
};

export default Contact;

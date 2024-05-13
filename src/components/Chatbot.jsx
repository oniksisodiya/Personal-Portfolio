import React, { useState } from 'react';
import { FaComments } from 'react-icons/fa';

const faqResponses = {
  'hello': 'Hello! How can I assist you today?',
  'portfolio': 'This is my portfolio showcasing my skills and projects.',
  'contact': 'You can reach out to me via the contact form on this page!',
  'email': 'My email is oniksisodiya7@gmail.com',

};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you?', sender: 'bot' }
  ]);
  const [userInput, setUserInput] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (userInput.trim() === '') return;

    // Add user's message
    setMessages([...messages, { text: userInput, sender: 'user' }]);

    // Generate bot's response
    const botReply = faqResponses[userInput.toLowerCase()] || 'Sorry, I didn’t understand that.';
    setMessages((prev) => [...prev, { text: botReply, sender: 'bot' }]);

    // Clear input field
    setUserInput('');
  };

  return (
    <div className='fixed bottom-10 right-10 flex flex-col items-end'>
      {/* Chatbot Icon Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className='bg-blue-600 text-white p-4 rounded-full shadow-lg focus:outline-none'
      >
        <FaComments size={24} />
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className='mt-4 w-72 bg-white dark:bg-gray-800 shadow-lg rounded-lg'>
          {/* Chat Header */}
          <div className='bg-blue-600 text-white p-3 rounded-t-lg'>
            Simple Chatbot
          </div>

          {/* Chat Messages */}
          <div className='p-3 h-48 overflow-y-auto'>
            {messages.map((msg, index) => (
              <div key={index} className={`my-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span
                  className={`inline-block px-3 py-2 rounded-lg ${
                    msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 dark:bg-gray-600 dark:text-white'
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSendMessage} className='p-3 flex'>
            <input
              type='text'
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className='flex-grow border rounded-l-lg p-2 dark:bg-gray-700 dark:text-white'
              placeholder='Type your message...'
            />
            <button type='submit' className='bg-blue-600 text-white px-4 py-2 rounded-r-lg'>
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

import React, { useState, useEffect } from 'react';
import { OpenAI } from 'openai';

const Chatbot = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([{ role: "system", content: "You are a helpful assistant." }]);

    const openai = new OpenAI({ apiKey : '<api key goes here>', dangerouslyAllowBrowser: true });

    const handleSend = async () => {
        console.log('INPUT:', input.trim());
        if (input.trim() === '') return;

        const userMessage = { role: 'user', content: input };
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);

        try {
            console.log('Sending request to OpenAI API...');
            const completion = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: updatedMessages
            });
            console.log('API Response:', completion.choices[0]);
            const botMessage = { role: 'assistant', content: completion.choices[0].message.content.trim() };
            setMessages([...updatedMessages, botMessage]);
        } catch (error) {
            console.error('Error:', error);
            const botMessage = { role: 'assistant', content: "Sorry, this service is currently unavailable. Contact host for more information." };
            setMessages([...updatedMessages, botMessage]);
        }

        setInput('');
    };

    return (
        <div className='w-100'>
            <div className="messages space-y-4 p-3 text-sm rounded-lg border border-black bg-white h-64 overflow-y-auto">
            {messages.filter(message => message.role !== 'system').map((message, index) => (
                <div
                    key={index}
                    className={`message ${message.role} ${
                        message.role === 'user' ? 'text-right' : 'text-left'
                    }`}
                >
                    {message.content}
                </div>
            ))}
            </div>
            <div className="flex items-center space-x-4">
                <input
                    placeholder="Message"
                    className='w-full p-3 text-sm rounded-lg border border-black'
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <button onClick={handleSend} className='px-12 py-3 text-sm font-medium text-culturedWhite bg-mnBlue rounded shadow active:bg-blue-500 hover:bg-carolinaBlue focus:outline-none focus:ring'>Send</button>
            </div>
        </div>
    );
};

export default Chatbot;

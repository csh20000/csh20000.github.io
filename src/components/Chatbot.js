import React, { useState } from 'react';
import { OpenAI } from 'openai';

const Chatbot = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    // const configuration = new Configuration({
    //     apiKey: 'YOUR_OPENAI_API_KEY',
    // });
    const openai = new OpenAI({apiKey : 'NONE', dangerouslyAllowBrowser: true });
    //openai.apiKey = ;

    const handleSend = async () => {
        if (input.trim() === '') return;

        const userMessage = { sender: 'user', text: input };
        setMessages([...messages, userMessage]);

        try {
            const response = await openai.chat.completions.create({
                model: 'gpt-4o-mini',
                prompt: input,
                max_tokens: 150,
                n: 1,
                stop: null,
                temperature: 0.7,
            });
            console.log('API Response:', response.data);
            const botMessage = { sender: 'bot', text: response.data.choices[0].text.trim() };
            setMessages([...messages, userMessage, botMessage]);
        } catch (error) {
            console.error('Error:', error);
            const botMessage = { sender: 'bot', text: "Sorry, this service is currently unavailable. Contact host for more information." };
            setMessages([...messages, userMessage, botMessage]);
        }

        setInput('');
    };

    return (
        <div className='w-100'>
            <div className="messages space-y-4 p-3 text-sm rounded-lg border border-black bg-white h-64 overflow-y-auto">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`message ${message.sender} ${
                            message.sender === 'user' ? 'text-right' : 'text-left'
                        }`}
                    >
                        {message.text}
                    </div>
                ))}
            </div>
            <div  className="flex items-center space-x-4">
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

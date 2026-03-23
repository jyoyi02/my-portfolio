
import { useState, useRef, useEffect } from 'react'
import { IconMessageCircle, IconX, IconSend, IconRobot } from '@tabler/icons-react'

interface Message {
    role: 'user' | 'assistant'
    content: string
}

const SYSTEM_PROMPT = `You are Jyoti Kumari's personal portfolio assistant. Answer questions about Jyoti professionally and helpfully. Here is everything about her:

NAME: Jyoti Kumari
ROLE: Senior Software Developer
LOCATION: Bhopal, Madhya Pradesh, India
PHONE: +91 7970560817
GITHUB: https://github.com/jyoyi02
LINKEDIN: https://www.linkedin.com/in/jyoti-kumari-29091419a

EDUCATION:
- Master of Computer Application (MCA)
- Lakshmi Narain College of Technology, Bhopal
- June 2020 - August 2022
- CGPA: 9.5

SKILLS:
- Frontend: React.js, TypeScript, Tailwind CSS, Ant Design, Zustand, Axios, React Query, React Hook Form, Mantine
- Backend: Laravel, Node JS, Core PHP, REST APIs, Socket.IO,Firebase
- Database: MySQL, PostgreSQL, ,DBeaver
- Tools: Docker, GitLab/hub, Postman, VS Code

EXPERIENCE:
1. Senior Software Developer at Central Information Commission (CIC) — June 2025 to Present
   - Led full-stack development using React.js and Laravel
   - Built complex role-based dashboards with Docker and DBeaver integration
   - Implemented secure REST APIs and role-based access control

2. Full Stack Developer at DeepMindz Innovations — February 2024 to May 2025
   - Developed web applications using React JS and Laravel
   - Implemented file upload, validation, and management modules
   - Built attendance, employee onboarding, and ticketing modules

3. Laravel Developer at Agicent Technologies — March 2022 to January 2024
   - Developed and maintained web applications using React and Laravel
   - Built dynamic modals and forms with React, Axios, and Ant Design

PROJECTS:
1. CIC Management (Appcoms 2.0) - Scalable full-stack solution for CIC with role-based access control and Docker integration. Stack: Laravel, React.js, TypeScript, Docker
2. HRMS Web & Mobile App - Comprehensive HR solution with Leave Management, Reimbursement Systems, and secure authentication. Stack: Laravel Sanctum, React, Tailwind CSS
3. MeeToShine Mobile App - Backend with REST APIs, Cashfree payment gateway, and database optimization. Stack: Laravel, MySQL, Cashfree API
4. UBTEO Real Estate Web App - American Real Estate Marketplace with advanced search filters and admin panel. Stack: Laravel, JavaScript, MySQL

Only answer questions related to Jyoti's portfolio, skills, experience, and projects. If asked anything unrelated, politely redirect the conversation back to Jyoti's professional profile. Keep answers concise and friendly.`

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'assistant',
            content: "Hi! 👋 I'm Jyoti's portfolio assistant. Ask me anything about her skills, experience, or projects!",
        },
    ])
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    const sendMessage = async () => {
        if (!input.trim() || loading) return

        const userMessage: Message = { role: 'user', content: input.trim() }
        const updatedMessages = [...messages, userMessage]
        setMessages(updatedMessages)
        setInput('')
        setLoading(true)

        try {
            const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
                },
                body: JSON.stringify({
                    model: 'llama-3.1-8b-instant',
                    max_tokens: 500,
                    messages: [
                        { role: 'system', content: SYSTEM_PROMPT },
                        ...updatedMessages,
                    ],
                }),
            })

            const data = await response.json()
            const assistantMessage: Message = {
                role: 'assistant',
                content: data.choices[0].message.content,
            }
            setMessages((prev) => [...prev, assistantMessage])
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                {
                    role: 'assistant',
                    content: 'Sorry, something went wrong. Please try again!',
                },
            ])
        } finally {
            setLoading(false)
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            sendMessage()
        }
    }

    return (
        <>
            {/* Chat Toggle Button */}
            <button
                onClick={() => setIsOpen((o) => !o)}
                className="fixed bottom-6 right-6 z-50 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg shadow-blue-500/40 transition duration-300 hover:scale-110"
            >
                {isOpen ? <IconX size={24} /> : <IconMessageCircle size={24} />}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-[#1e293b] rounded-2xl shadow-2xl border border-slate-700 flex flex-col overflow-hidden">

                    {/* Header */}
                    <div className="bg-blue-500 px-4 py-3 flex items-center gap-3">
                        <div className="bg-white/20 p-1.5 rounded-full">
                            <IconRobot size={20} className="text-white" />
                        </div>
                        <div>
                            <p className="text-white font-semibold text-sm">Jyoti's Assistant</p>
                            <p className="text-blue-100 text-xs">Ask me anything about Jyoti</p>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="ml-auto text-white/80 hover:text-white transition"
                        >
                            <IconX size={18} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-80">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                                        ? 'bg-blue-500 text-white rounded-br-sm'
                                        : 'bg-[#0f172a] text-gray-300 rounded-bl-sm'
                                        }`}
                                >
                                    {msg.content}
                                </div>
                            </div>
                        ))}

                        {/* Loading dots */}
                        {loading && (
                            <div className="flex justify-start">
                                <div className="bg-[#0f172a] text-gray-300 px-4 py-3 rounded-2xl rounded-bl-sm text-sm flex items-center gap-1">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-3 border-t border-slate-700 flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Ask about Jyoti..."
                            className="flex-1 bg-[#0f172a] text-gray-300 placeholder-gray-600 text-sm px-3 py-2 rounded-lg border border-slate-600 focus:outline-none focus:border-blue-500 transition"
                        />
                        <button
                            onClick={sendMessage}
                            disabled={!input.trim() || loading}
                            className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-lg transition"
                        >
                            <IconSend size={18} />
                        </button>
                    </div>

                </div>
            )}
        </>
    )
}

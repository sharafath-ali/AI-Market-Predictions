// import OpenAI from 'openai'
import dotenv from 'dotenv'

dotenv.config()

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// })

const messages = [
  {
    role: 'system',
    content: 'You are a helpful general knowledge expert.'
  },
  {
    role: 'user',
    content: 'Who invented the television?'
  }
]
console.log(process.env.openrouter_AI_API_KEY)
// const response = await openai.chat.completions.create({
//   model: 'babbage-002',
//   messages
// })

const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.openrouter_AI_API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'openai/gpt-4o',
    messages
  }),
});

const responseData = await response.json();
console.log(responseData);
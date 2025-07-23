import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

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

const response = await openai.chat.completions.create({
  model: 'babbage-002',
  messages
})

console.log(response.choices[0].message.content)
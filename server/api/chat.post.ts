import { streamText } from 'ai'
import { createWorkersAI } from 'workers-ai-provider'

export default defineEventHandler(async (event) => {
  const { messages } = await readBody(event)

  const workersAI = createWorkersAI({ binding: hubAI() })
  const model = workersAI('@cf/meta/llama-3.1-8b-instruct')

  return streamText({ model, messages }).toDataStreamResponse()
})

const Fastify = require('fastify')
const server = Fastify({ logger: true })

server.post('/ocr', async (req, reply) => {
  // Return fake extracted text
  return { text: 'This is dummy OCR output from the AI stub.' }
})

server.post('/suggest-format', async (req, reply) => {
  // Suggest format based on dummy logic
  return { suggestion: 'pdf', reason: 'default mapping for demo' }
})

server.listen({ port: 4100, host: '0.0.0.0' }).then(() => {
  server.log.info('AI stub running')
}).catch(err => {
  server.log.error(err)
  process.exit(1)
})

import Fastify from 'fastify'
import fastifyJwt from 'fastify-jwt'
import fs from 'fs'
const server = Fastify({ logger: true })

server.register(fastifyJwt, { secret: process.env.JWT_SECRET || 'changeme' })

server.get('/', async (req, reply) => {
  return { ok: true, msg: 'Vertopal backend (MVP scaffold)' }
})

// Presign upload (simplified — returns a fake url in dev)
server.post('/presign', async (req, reply) => {
  // In real app generate S3 presigned URL; here return placeholder
  return { uploadUrl: 'http://minio:9000/dev-bucket/placeholder', key: 'placeholder' }
})

server.listen({ port: 4000, host: '0.0.0.0' }).then(() => {
  server.log.info('Backend running')
}).catch(err => {
  server.log.error(err)
  process.exit(1)
})

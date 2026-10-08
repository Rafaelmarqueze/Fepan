require('dotenv').config({ path: '.env.local' })

const bcrypt = require('bcryptjs')
const { Client } = require('pg')

async function createAdmin() {
  const { DATABASE_URL, ADMIN_USERNAME, ADMIN_PASSWORD } = process.env
  const username = ADMIN_USERNAME?.trim()

  if (!DATABASE_URL) {
    throw new Error('DATABASE_URL não está configurado')
  }
  if (!username || username.length > 50) {
    throw new Error('ADMIN_USERNAME é obrigatório e deve ter no máximo 50 caracteres')
  }
  if (!ADMIN_PASSWORD || ADMIN_PASSWORD.length < 12) {
    throw new Error('ADMIN_PASSWORD é obrigatória e deve ter no mínimo 12 caracteres')
  }

  const client = new Client({ connectionString: DATABASE_URL })
  await client.connect()

  try {
    const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 12)
    await client.query(
      'INSERT INTO "user" (username, password, role) VALUES ($1, $2, $3)',
      [username, passwordHash, 'admin']
    )
    console.log(`Usuário admin "${username}" criado com sucesso.`)
  } finally {
    await client.end()
  }
}

createAdmin().catch((error) => {
  if (error.code === '23505') {
    console.error('Já existe um usuário com esse nome. Escolha outro ADMIN_USERNAME.')
  } else {
    console.error('Não foi possível criar o usuário admin:', error.message)
  }
  process.exitCode = 1
})

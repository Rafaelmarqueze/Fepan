This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy the app is to use the [Vercel Platform](https://vercel.com/new).
See the [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for details.

## Leads e acesso administrativo

O formulário salva cada lead no PostgreSQL e envia uma notificação pelo Resend.
Configure estas variáveis no `.env.local` e no ambiente de produção:

- `DATABASE_URL`: URL de conexão do PostgreSQL.
- `JWT_SECRET`: segredo forte usado para assinar as sessões administrativas.
- `RESEND_API_KEY`: chave da API do Resend.
- `CONTACT_TO`: endereço que receberá as notificações (opcional; o padrão é
  `bruttusfornecedor@gmail.com`).
- `CONTACT_FROM`: remetente verificado no Resend (opcional; o padrão é
  `Bruttus <onboarding@resend.dev>`).

Para criar o primeiro usuário administrador, defina temporariamente
`ADMIN_USERNAME` e `ADMIN_PASSWORD` (mínimo de 12 caracteres) no ambiente do
terminal e execute `npm run db:create-admin`. O comando lê também o
`.env.local` para obter `DATABASE_URL`, grava somente o hash da senha e falha
se o nome de usuário já existir. Depois, remova as variáveis temporárias de
credenciais.

No PowerShell, por exemplo:

```powershell
$securePassword = Read-Host "Senha do admin" -AsSecureString
$passwordPointer = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($securePassword)
try {
  $env:ADMIN_USERNAME = Read-Host "Usuário admin"
  $env:ADMIN_PASSWORD = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($passwordPointer)
  npm run db:create-admin
} finally {
  Remove-Item Env:ADMIN_USERNAME, Env:ADMIN_PASSWORD -ErrorAction SilentlyContinue
  [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($passwordPointer)
}
```

Antes de cadastrar leads, aplique as mudanças do schema ao banco:

```bash
npm run db:push
```

O login e a área de leads ficam em `/admin`. Mantenha `JWT_SECRET`,
`RESEND_API_KEY` e `DATABASE_URL` apenas no ambiente do servidor; não use o
prefixo `NEXT_PUBLIC_`.

import { Resend } from 'resend'
import { db } from '@/db'
import { leads as leadsTable } from '@/db/schema'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  const {
    fullName = '',
    burgerPlaceName = '',
    whatsapp = '',
    email = '',
    message = '',
    cnpj = ''
  } = req.body ?? {}

  const trimmed = {
    fullName: String(fullName).trim(),
    burgerPlaceName: String(burgerPlaceName).trim(),
    whatsapp: String(whatsapp).trim(),
    email: String(email).trim(),
    message: String(message).trim(),
    cnpj: String(cnpj).trim()
  }

  if (!trimmed.fullName || !trimmed.whatsapp || !trimmed.message) {
    return res.status(400).json({ ok: false, error: 'Missing required fields' })
  }

  let lead
  try {
    const [createdLead] = await db.insert(leadsTable).values({
      name: trimmed.fullName,
      email: trimmed.email || null,
      phone: trimmed.whatsapp,
      company: trimmed.burgerPlaceName || null,
      message: trimmed.message,
      cnpj: trimmed.cnpj || null
    }).returning()
    lead = createdLead
  } catch (error) {
    console.error('Error saving lead to database:', error)
    return res.status(500).json({ ok: false, error: 'Failed to save contact' })
  }

  const to = process.env.CONTACT_TO || 'bruttusfornecedor@gmail.com'
  const from = process.env.CONTACT_FROM || 'Bruttus <onboarding@resend.dev>'
  const resendApiKey = process.env.RESEND_API_KEY

  if (!resendApiKey) {
    console.error('Contact notification is not configured: missing RESEND_API_KEY')
    return res.status(500).json({
      ok: false,
      leadId: lead.id,
      error: 'Contact saved, but email notification is not configured'
    })
  }

  const resend = new Resend(resendApiKey)
  const subject = `Novo lead - ${trimmed.fullName}${trimmed.burgerPlaceName ? ` (${trimmed.burgerPlaceName})` : ''}`
  const text = [
    'Novo contato comercial recebido:',
    '',
    `Nome: ${trimmed.fullName}`,
    `Empresa: ${trimmed.burgerPlaceName || '-'}`,
    `WhatsApp: ${trimmed.whatsapp}`,
    `E-mail: ${trimmed.email || '-'}`,
    `CNPJ: ${trimmed.cnpj || '-'}`,
    '',
    'Mensagem:',
    trimmed.message
  ].join('\n')

  try {
    const { error } = await resend.emails.send({
      from,
      to: Array.isArray(to) ? to : [to],
      subject,
      text,
      replyTo: trimmed.email || undefined
    })

    if (error) {
      console.error('Error sending contact notification:', error)
      return res.status(502).json({
        ok: false,
        leadId: lead.id,
        error: 'Contact saved, but failed to send email notification'
      })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Error sending contact notification:', err)
    return res.status(502).json({
      ok: false,
      leadId: lead.id,
      error: 'Contact saved, but failed to send email notification'
    })
  }
}

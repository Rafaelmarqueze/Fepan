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

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL
  const webhookSecret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET
  if (!webhookUrl || !webhookSecret) {
    return res.status(500).json({
      ok: false,
      error: 'Google Sheets integration is not configured'
    })
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...trimmed, secret: webhookSecret })
    })

    if (!response.ok) {
      console.error('Google Sheets webhook returned status:', response.status)
      return res.status(502).json({ ok: false, error: 'Failed to submit contact' })
    }

    const result = await response.json()
    if (!result.ok) {
      console.error('Google Sheets webhook rejected contact:', result.error || 'unknown error')
      return res.status(502).json({ ok: false, error: 'Failed to submit contact' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Error submitting contact to Google Sheets:', err)
    return res.status(502).json({ ok: false, error: 'Failed to submit contact' })
  }
}

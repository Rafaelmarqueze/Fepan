function doPost(e) {
  try {
    const properties = PropertiesService.getScriptProperties();
    const payload = JSON.parse(e.postData.contents);
    const expectedSecret = properties.getProperty('WEBHOOK_SECRET');

    if (!expectedSecret || payload.secret !== expectedSecret) {
      return jsonResponse({ ok: false, error: 'Unauthorized' });
    }

    const fullName = String(payload.fullName || '').trim();
    const whatsapp = String(payload.whatsapp || '').trim();
    const message = String(payload.message || '').trim();
    if (!fullName || !whatsapp || !message) {
      return jsonResponse({ ok: false, error: 'Missing required fields' });
    }

    const spreadsheetId = properties.getProperty('SPREADSHEET_ID');
    const notificationEmail = properties.getProperty('LEAD_NOTIFICATION_EMAIL');
    if (!spreadsheetId || !notificationEmail) {
      return jsonResponse({ ok: false, error: 'Script properties are not configured' });
    }

    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = spreadsheet.getSheets()[0];

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Data', 'Nome', 'Empresa', 'WhatsApp', 'E-mail', 'CNPJ', 'Mensagem']);
    }

    sheet.appendRow([
      new Date(),
      sheetSafeValue(fullName),
      sheetSafeValue(payload.burgerPlaceName),
      sheetSafeValue(whatsapp),
      sheetSafeValue(payload.email),
      sheetSafeValue(payload.cnpj),
      sheetSafeValue(message)
    ]);

    MailApp.sendEmail({
      to: notificationEmail,
      subject: 'Novo contato comercial - ' + fullName,
      body: [
        'Um novo contato foi recebido pelo site:',
        '',
        'Nome: ' + fullName,
        'Empresa: ' + (payload.burgerPlaceName || '-'),
        'WhatsApp: ' + whatsapp,
        'E-mail: ' + (payload.email || '-'),
        'CNPJ: ' + (payload.cnpj || '-'),
        '',
        'Mensagem:',
        sheetSafeValue(message)
      ].join('\n'),
      replyTo: payload.email || undefined
    });

    return jsonResponse({ ok: true });
  } catch (error) {
    console.error('Failed to process contact:', error);
    return jsonResponse({ ok: false, error: 'Failed to process contact' });
  }
}

function jsonResponse(body) {
  return ContentService
    .createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}

function sheetSafeValue(value) {
  const text = String(value || '').trim();
  return /^[=+\-@\t\r]/.test(text) ? "'" + text : text;
}

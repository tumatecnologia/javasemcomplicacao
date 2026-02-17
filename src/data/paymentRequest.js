{
  "name": "PaymentRequest",
  "type": "object",
  "properties": {
    "user_email": {
      "type": "string",
      "description": "Email do usu\u00e1rio"
    },
    "receipt_url": {
      "type": "string",
      "description": "URL do comprovante enviado"
    },
    "status": {
      "type": "string",
      "enum": [
        "pending",
        "approved",
        "rejected"
      ],
      "default": "pending",
      "description": "Status da verifica\u00e7\u00e3o"
    },
    "rejection_reason": {
      "type": "string",
      "description": "Motivo da rejei\u00e7\u00e3o"
    },
    "verified_amount": {
      "type": "number",
      "description": "Valor verificado no comprovante"
    },
    "verified_recipient": {
      "type": "string",
      "description": "Destinat\u00e1rio verificado"
    }
  },
  "required": [
    "user_email",
    "receipt_url"
  ]
}
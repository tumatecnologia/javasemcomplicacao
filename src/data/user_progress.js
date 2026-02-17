{
  "name": "UserProgress",
  "type": "object",
  "properties": {
    "user_email": {
      "type": "string",
      "description": "Email do usu\u00e1rio"
    },
    "current_module": {
      "type": "number",
      "default": 1,
      "description": "M\u00f3dulo atual do usu\u00e1rio"
    },
    "current_lesson": {
      "type": "number",
      "default": 1,
      "description": "Aula atual do usu\u00e1rio"
    },
    "completed_lessons": {
      "type": "array",
      "items": {
        "type": "number"
      },
      "description": "IDs das aulas completadas"
    },
    "is_premium": {
      "type": "boolean",
      "default": false,
      "description": "Se o usu\u00e1rio \u00e9 premium"
    },
    "total_score": {
      "type": "number",
      "default": 0,
      "description": "Pontua\u00e7\u00e3o total acumulada"
    },
    "exercises_completed": {
      "type": "number",
      "default": 0,
      "description": "Total de exerc\u00edcios completados"
    },
    "average_score": {
      "type": "number",
      "default": 0,
      "description": "Nota m\u00e9dia"
    }
  },
  "required": [
    "user_email"
  ]
}
const INSIDE_LESSONS = {
  "notar": {
    "territory": "Contacto",
    "title": "Volver a lo que hago",
    "summary": "Me distraigo y pierdo el hilo.",
    "technical": "Atención flexible y metaconciencia",
    "meaning": "Puedes notar que te distrajiste y elegir a qué volver.",
    "example": {
      "situation": "Lees un mensaje y te distraes con otra cosa.",
      "response": "Voy a volver a leer la última frase."
    },
    "steps": [
      {
        "prompt": "Mira algo que tengas cerca.",
        "hint": "Si te resulta más cómodo, escucha un sonido cercano.",
        "answerExample": "Veo una taza."
      },
      {
        "prompt": "Di cómo es eso que elegiste.",
        "hint": "Puedes nombrar un color, una forma o cómo suena.",
        "answerExample": "La taza es blanca."
      },
      {
        "prompt": "Elige a qué quieres volver ahora.",
        "hint": "Puede ser leer una frase, escuchar a alguien o seguir con una tarea.",
        "answerExample": "Voy a volver al mensaje."
      }
    ],
    "takeaway": "Distraerte no significa que hayas fallado. Puedes volver a elegir qué atender.",
    "tryLater": "Cuando pierdas el hilo, vuelve a una parte pequeña de lo que estabas haciendo.",
    "check": {
      "question": "Te distraes mientras lees. ¿Qué puedes probar?",
      "options": [
        "Volver a leer una frase.",
        "Exigirme no distraerme nunca.",
        "Dejar de leer porque me distraje."
      ],
      "answer": 0,
      "explanation": "Volver a una frase es un paso concreto. Puedes distraerte otra vez y volver a elegir."
    },
    "next": "perspectiva"
  },
  "perspectiva": {
    "territory": "Perspectiva",
    "title": "Decidir aunque tenga dudas",
    "summary": "Pienso que algo saldrá mal y no empiezo.",
    "technical": "Defusión cognitiva",
    "meaning": "Puedes tener una duda y aun así decidir qué quieres hacer.",
    "example": {
      "situation": "Quieres escribir un mensaje, pero piensas: «No me va a salir bien».",
      "response": "Estoy pensando que no me va a salir bien. Voy a escribir la primera frase."
    },
    "steps": [
      {
        "prompt": "¿Qué duda te frena cuando intentas empezar?",
        "hint": "Usa una tarea pequeña o el mensaje del ejemplo. Evita algo urgente o peligroso.",
        "answerExample": "No me va a salir bien."
      },
      {
        "prompt": "Añade «Estoy pensando que...» a esa frase.",
        "hint": "Repítela en tu mente. No tienes que sentirte diferente.",
        "answerExample": "Estoy pensando que no me va a salir bien."
      },
      {
        "prompt": "Elige una parte pequeña de la tarea que quieras probar.",
        "hint": "Puedes probar, esperar o buscar ayuda. Tener dudas no te obliga a seguir.",
        "answerExample": "Voy a escribir la primera frase del mensaje."
      }
    ],
    "takeaway": "Una idea puede seguir presente mientras decides qué hacer.",
    "tryLater": "Si una duda te frena, nómbrala y decide si quieres probar una parte pequeña de la tarea.",
    "check": {
      "question": "Piensas «no me va a salir». ¿Qué puedes decirte?",
      "options": [
        "Tengo que estar seguro antes de probar.",
        "Estoy pensando que no me va a salir. Puedo probar una parte.",
        "Debo dejar de tener dudas para empezar."
      ],
      "answer": 1,
      "explanation": "La segunda frase reconoce la duda y deja una elección. No promete que todo saldrá bien."
    },
    "next": "integrar"
  },
  "preocupacion": {
    "territory": "Contacto",
    "title": "Revisar una preocupación",
    "summary": "Imagino lo que pasó, pero no tengo toda la información.",
    "technical": "Distinguir hechos e interpretaciones",
    "meaning": "Separa lo que sabes de lo que estás suponiendo.",
    "example": {
      "situation": "Enviaste un mensaje y no responden. Piensas: «Está molesto conmigo».",
      "response": "Sé que aún no respondió. No sé por qué."
    },
    "steps": [
      {
        "prompt": "Piensa en una preocupación pequeña.",
        "hint": "Si prefieres, usa el mensaje sin respuesta del ejemplo.",
        "answerExample": "No me han respondido."
      },
      {
        "prompt": "¿Qué sabes que pasó?",
        "hint": "Di algo que puedas comprobar. Si no lo sabes, puedes decir «no sé».",
        "answerExample": "Envié un mensaje y no ha llegado una respuesta."
      },
      {
        "prompt": "¿Qué parte estás suponiendo?",
        "hint": "Es algo que podría ser cierto, pero que todavía no sabes.",
        "answerExample": "Estoy suponiendo que está molesto conmigo."
      }
    ],
    "takeaway": "Que alguien no responda no te dice por qué no respondió.",
    "tryLater": "Si falta información, decide si conviene preguntar o esperar antes de sacar una conclusión.",
    "check": {
      "question": "No han respondido tu mensaje. ¿Qué sabes con seguridad?",
      "options": [
        "Que la otra persona está molesta conmigo.",
        "Que ya no quiere hablar conmigo.",
        "Que todavía no recibí una respuesta."
      ],
      "answer": 2,
      "explanation": "Sabes que no llegó una respuesta. El motivo sigue sin conocerse."
    },
    "next": "relaciones"
  },
  "autocritica": {
    "territory": "Perspectiva",
    "title": "Hablarme sin insultos",
    "summary": "Me equivoco y me trato muy duro.",
    "technical": "Perspectiva personal",
    "meaning": "Puedes reconocer un error sin insultarte.",
    "example": {
      "situation": "Olvidas algo y te dices: «Soy un desastre».",
      "response": "Olvidé esto. Voy a pensar cómo recordarlo."
    },
    "steps": [
      {
        "prompt": "Piensa en un error pequeño.",
        "hint": "No elijas algo muy doloroso. También puedes usar el ejemplo.",
        "answerExample": "Olvidé llevar una llave."
      },
      {
        "prompt": "¿Qué te dijiste cuando pasó?",
        "hint": "Recuerda una frase. Si no la recuerdas, usa la del ejemplo.",
        "answerExample": "Soy un desastre."
      },
      {
        "prompt": "Cuenta lo que pasó sin insultarte.",
        "hint": "Di lo que hiciste, no cómo eres.",
        "answerExample": "Olvidé la llave. Puedo preparar mis cosas antes de salir."
      }
    ],
    "takeaway": "Reconocer lo que pasó te permite pensar qué puedes hacer ahora.",
    "tryLater": "Si te hablas con dureza, cuenta lo que pasó como se lo contarías a alguien que respetas.",
    "check": {
      "question": "Olvidaste la llave. ¿Qué frase cuenta lo que pasó sin insultarte?",
      "options": [
        "Olvidé la llave. Voy a revisar cómo recordarla.",
        "Soy un desastre para todo.",
        "Nunca hago nada bien."
      ],
      "answer": 0,
      "explanation": "La primera frase dice qué pasó y cómo podrías recordarlo. Un olvido no dice todo sobre ti."
    },
    "next": "autocuidado"
  },
  "espacio": {
    "territory": "Contacto",
    "title": "Pausar antes de responder",
    "summary": "Algo me molesta y no sé qué hacer.",
    "technical": "Aceptación y elección de respuesta",
    "meaning": "Sentir molestia no te obliga a responder de inmediato.",
    "example": {
      "situation": "Cambian un plan y te molestas.",
      "response": "Estoy molesto. Voy a tomarme un momento antes de contestar."
    },
    "steps": [
      {
        "prompt": "Piensa en algo pequeño que te haya molestado.",
        "hint": "Puedes usar el cambio de plan del ejemplo. Evita una situación que te haga sentir en peligro.",
        "answerExample": "Cambiaron el plan a última hora."
      },
      {
        "prompt": "Ponle un nombre a lo que sientes.",
        "hint": "Puede ser molestia, tristeza o miedo. «Esto me incomoda» también sirve.",
        "answerExample": "Estoy molesto."
      },
      {
        "prompt": "Elige qué quieres hacer ahora.",
        "hint": "Puedes esperar un momento, pedir una explicación o parar.",
        "answerExample": "Voy a pedir que me expliquen el cambio."
      }
    ],
    "takeaway": "Puedes sentir una emoción y elegir cómo responder.",
    "tryLater": "Si algo te molesta, nombra lo que sientes antes de decidir tu siguiente paso. Puedes parar si lo necesitas.",
    "check": {
      "question": "Cambian un plan y te molestas. ¿Qué opción te deja elegir?",
      "options": [
        "Tengo que fingir que no me importa.",
        "Estoy molesto. Puedo tomarme un momento y decidir qué hacer.",
        "Tengo que contestar ahora mismo."
      ],
      "answer": 1,
      "explanation": "La segunda opción reconoce la molestia y deja tiempo para elegir. No te obliga a soportar una situación dañina."
    },
    "next": "orientarse"
  },
  "orientarse": {
    "territory": "Dirección",
    "title": "Elegir qué va primero",
    "summary": "Tengo varias cosas por hacer y no sé cuál atender.",
    "technical": "Valores y prioridades",
    "meaning": "Puedes elegir una cosa para empezar, según lo que te importa hoy.",
    "example": {
      "situation": "Quieres ordenar algo y también necesitas descansar.",
      "response": "Primero voy a descansar un rato. Después decidiré qué parte ordenar."
    },
    "steps": [
      {
        "prompt": "Piensa en dos cosas que quisieras hacer hoy.",
        "hint": "Pueden ser cosas sencillas. Puedes usar las del ejemplo.",
        "answerExample": "Ordenar la mesa y descansar."
      },
      {
        "prompt": "De esas dos cosas, ¿cuál necesitas más ahora?",
        "hint": "Puede ser descansar, cumplir un compromiso o pedir ayuda.",
        "answerExample": "Ahora necesito descansar."
      },
      {
        "prompt": "Elige qué harás primero.",
        "hint": "No tienes que terminar las dos cosas ahora.",
        "answerExample": "Descansaré un rato. Después decidiré qué parte ordenar."
      }
    ],
    "takeaway": "Elegir una prioridad hoy no significa que lo demás deje de importarte.",
    "tryLater": "Cuando no sepas por dónde empezar, elige una cosa que quieras atender primero.",
    "check": {
      "question": "No tienes tiempo para todo hoy. ¿Qué puedes probar?",
      "options": [
        "Prometer que haré todo aunque no tenga tiempo.",
        "Exigirme elegir siempre lo mismo.",
        "Elegir una cosa para esta ocasión y revisar lo demás después."
      ],
      "answer": 2,
      "explanation": "Puedes elegir según las condiciones de hoy. Otro día podrías elegir algo distinto."
    },
    "next": "integrar"
  },
  "relaciones": {
    "territory": "Dirección",
    "title": "Pedir algo con claridad",
    "summary": "Quiero pedir ayuda o expresar lo que necesito.",
    "technical": "Comunicación y límites",
    "meaning": "Explica qué necesitas y haz una petición concreta.",
    "example": {
      "situation": "Necesitas silencio para leer y hay mucho ruido.",
      "response": "Estoy leyendo. ¿Puedes bajar el volumen un rato?"
    },
    "steps": [
      {
        "prompt": "Piensa en algo que necesitas pedir.",
        "hint": "Elige una conversación en la que te sientas seguro. También puedes usar el ejemplo.",
        "answerExample": "Necesito que bajen el volumen."
      },
      {
        "prompt": "Di qué necesitas con una frase corta.",
        "hint": "Puedes empezar por «Necesito...».",
        "answerExample": "Necesito silencio para leer."
      },
      {
        "prompt": "Pide una acción que la otra persona pueda entender.",
        "hint": "Di qué cambio estás pidiendo, sin esperar que lo adivine.",
        "answerExample": "¿Puedes bajar el volumen durante un rato?"
      }
    ],
    "takeaway": "Una petición expresa lo que necesitas. No obliga a la otra persona a aceptar.",
    "tryLater": "Cuando necesites algo, prepara una frase corta y una petición. Si no hay acuerdo, puedes proponer otra opción.",
    "check": {
      "question": "Necesitas menos ruido para leer. ¿Cuál es una petición clara?",
      "options": [
        "Deberías saber lo que necesito.",
        "Lo haces porque no te importo.",
        "Estoy leyendo. ¿Puedes bajar el volumen un rato?"
      ],
      "answer": 2,
      "explanation": "La tercera frase dice qué estás haciendo y qué cambio pides. La otra persona puede responder."
    },
    "next": "autocritica"
  },
  "autocuidado": {
    "territory": "Perspectiva",
    "title": "Revisar qué necesito hoy",
    "summary": "Me exijo más de lo que puedo hacer.",
    "technical": "Autocompasión práctica",
    "meaning": "Puedes atender una necesidad y hablarte con respeto.",
    "example": {
      "situation": "Estás cansado y te dices: «Debería poder con todo».",
      "response": "Hoy estoy cansado. Voy a ajustar lo que puedo hacer."
    },
    "steps": [
      {
        "prompt": "¿Qué necesitas en este momento?",
        "hint": "Puede ser una pausa, compañía, comida o ayuda. Puedes usar el ejemplo.",
        "answerExample": "Necesito descansar."
      },
      {
        "prompt": "¿Qué te dirías si te trataras con respeto?",
        "hint": "Piensa cómo hablarías a alguien que te importa.",
        "answerExample": "Estoy cansado. Puedo hacer menos hoy."
      },
      {
        "prompt": "Elige un cuidado pequeño para hoy.",
        "hint": "Puede ser descansar un rato, comer algo o pedir ayuda.",
        "answerExample": "Voy a pedir ayuda con una tarea."
      }
    ],
    "takeaway": "Puedes ajustar una tarea o pedir ayuda. No tienes que hacerlo todo.",
    "tryLater": "Cuando una tarea te supere, revisa qué necesitas y qué ayuda puedes pedir.",
    "check": {
      "question": "Estás cansado y tienes tareas. ¿Qué frase te trata con respeto?",
      "options": [
        "Estoy cansado. Puedo ajustar una tarea o pedir ayuda.",
        "Debería poder con todo sin descansar.",
        "Si descanso, significa que no me importa nada."
      ],
      "answer": 0,
      "explanation": "La primera frase reconoce cómo estás y propone opciones. Descansar y ser responsable pueden ir juntos."
    },
    "next": "preocupacion"
  },
  "integrar": {
    "territory": "Dirección",
    "title": "Empezar por algo pequeño",
    "summary": "Quiero hacer algo, pero lo voy dejando.",
    "technical": "Acción comprometida",
    "meaning": "Una tarea puede empezar por una parte pequeña.",
    "example": {
      "situation": "Quieres ordenar una mesa, pero lo vas dejando.",
      "response": "Voy a empezar por guardar un objeto."
    },
    "steps": [
      {
        "prompt": "Elige una tarea sencilla que tengas pendiente.",
        "hint": "Evita algo urgente o peligroso. Puedes usar la mesa del ejemplo.",
        "answerExample": "Ordenar una mesa."
      },
      {
        "prompt": "¿Cuál sería una parte pequeña para empezar?",
        "hint": "Algo que puedas probar sin terminar toda la tarea.",
        "answerExample": "Guardar un objeto."
      },
      {
        "prompt": "Elige un momento para probar ese paso.",
        "hint": "Completa «Después de..., voy a...».",
        "answerExample": "Después de comer, voy a guardar un objeto."
      }
    ],
    "takeaway": "Después del primer paso puedes decidir si sigues o paras.",
    "tryLater": "Elige una tarea, una parte pequeña y un momento para probarla. Puedes ajustar el plan si hace falta.",
    "check": {
      "question": "Quieres ordenar una mesa y no empiezas. ¿Cuál es un primer paso pequeño?",
      "options": [
        "Esperar a tener ganas de ordenar toda la casa.",
        "Guardar un objeto de la mesa.",
        "Prometer que terminaré todo hoy."
      ],
      "answer": 1,
      "explanation": "Guardar un objeto es una acción pequeña y concreta. Después puedes elegir si continúas."
    },
    "next": "espacio"
  }
};
if (typeof module !== 'undefined') module.exports = {INSIDE_LESSONS};

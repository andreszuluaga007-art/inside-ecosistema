const INSIDE_LESSONS = {
  notar: {
    territory: 'Contacto', title: 'Volver al presente', skill: 'Atención flexible y metaconciencia',
    summary: 'Cuando tu atención se va a lo que tienes pendiente.',
    intro: {what: 'Notar un detalle, una sensación y dónde está tu atención.', why: 'Darte cuenta de la distracción permite elegir a qué volver.', purpose: 'Ensayar una pausa antes de responder en automático.'},
    steps: [
      {question: 'Mira a tu alrededor: ¿qué detalle no habías notado?', reflection: 'Elige ese detalle. Descríbelo en tu mente con dos palabras: por ejemplo, «luz suave».', why: 'Estás ensayando dirigir tu atención a algo concreto.', skill: 'Dirigir la atención'},
      {question: '¿Qué sensación notas ahora en tu cuerpo?', reflection: 'Descríbela como sensación: calor, presión, movimiento. Si no notas algo claro, puedes dejarlo abierto.', why: 'Reconocer una sensación ayuda a distinguirla de la explicación que le das.', skill: 'Observar el cuerpo'},
      {question: '¿Dónde estaba tu atención justo antes de leer esta pregunta?', reflection: 'Nota si estabas mirando, sintiendo o pensando. Luego elige un detalle al que quieras volver.', why: 'Metaconciencia significa notar tu propia experiencia; aquí ensayas darte cuenta y volver.', skill: 'Notar y volver'}
    ],
    example: {situation: 'Lees un mensaje y tu atención se va a una tarea pendiente.', response: 'Noto que estoy pensando en la tarea. Vuelvo a leer una frase del mensaje.', explanation: 'La práctica consiste en notar y volver. Distraerte también forma parte del ensayo.'},
    check: {question: 'Estás leyendo y notas que piensas en mañana. ¿Qué ensaya volver al presente?', options: ['Exigirme no distraerme nunca.', 'Notar la distracción y volver a una frase.', 'Dejar de leer hasta no tener pensamientos.'], answer: 1, explanation: 'Notar la distracción y elegir dónde volver es practicar atención flexible. No exige una mente vacía.'},
    transfer: 'Cuando note que me fui a otra cosa, volveré a un detalle de lo que estoy haciendo.', next: 'perspectiva'
  },
  perspectiva: {
    territory: 'Perspectiva', title: 'Tomar distancia de una idea', skill: 'Defusión cognitiva',
    summary: 'Cuando una frase de tu mente parece una orden.',
    intro: {what: 'Escuchar una frase de tu mente y probar otra manera de nombrarla.', why: 'Una idea puede influir en ti sin que hayas elegido seguirla.', purpose: 'Considerar una respuesta que tenga sentido para ti.'},
    steps: [
      {question: 'Ante una decisión pequeña de hoy, ¿qué frase te repite tu mente?', reflection: 'Pon la frase en palabras, tal como aparece. Por ahora basta con reconocerla.', why: 'Una frase concreta es más fácil de observar que una sensación general de preocupación.', skill: 'Reconocer un pensamiento'},
      {question: '¿Cómo suena esa frase si empiezas con «Estoy pensando que…»?', reflection: 'Di mentalmente la frase completa con ese comienzo. Nota qué ocurre; también puede no cambiar nada.', why: 'Estás ensayando reconocer una idea como pensamiento, sin tener que eliminarla.', skill: 'Tomar distancia'},
      {question: 'Con esa frase todavía presente, ¿qué respuesta quieres considerar?', reflection: 'Imagina una acción pequeña que te importe. Puedes valorar la idea y decidir cuánto seguirla.', why: 'Tomar distancia abre una ocasión para examinar tus opciones.', skill: 'Elegir una respuesta'}
    ],
    example: {situation: 'Quieres empezar una tarea y aparece «me va a salir mal».', response: 'Estoy pensando que me va a salir mal. Puedo abrir el documento y probar una primera línea.', explanation: 'Nombras el pensamiento y consideras una acción. La frase puede seguir presente.'},
    check: {question: 'Aparece «voy a hacerlo mal». ¿Qué respuesta ensaya tomar distancia?', options: ['Repetir que todo saldrá perfecto.', 'Comprobar que nunca me equivocaré.', 'Notar «estoy pensando que saldrá mal» y considerar un paso.'], answer: 2, explanation: 'Nombras la idea como pensamiento y eliges qué hacer con ella. La defusión no requiere demostrar que sea falsa.'},
    transfer: 'Cuando aparezca una frase que me frena, probaré «estoy pensando que…» antes de decidir.', next: 'integrar'
  },
  preocupacion: {
    territory: 'Contacto', title: 'Hechos y posibilidades', skill: 'Perspectiva ante la incertidumbre',
    summary: 'Cuando imaginas lo que podría pasar.',
    intro: {what: 'Separar un hecho de una posibilidad que estás imaginando.', why: 'Las anticipaciones pueden sentirse tan ciertas como los hechos.', purpose: 'Elegir qué atender con la información que tienes.'},
    steps: [
      {question: 'En una preocupación leve de hoy, ¿qué sabes que ocurrió?', reflection: 'Describe algo comprobable: «envié un mensaje y aún no recibí respuesta», por ejemplo.', why: 'Un hecho describe lo ocurrido; una anticipación habla de lo que podría pasar.', skill: 'Reconocer un hecho'},
      {question: '¿Qué parte de esa preocupación todavía es una posibilidad?', reflection: 'Empieza con «podría…». Nota qué información necesitarías para saber si esa posibilidad ocurrió.', why: 'Distinguir una posibilidad permite reconocer qué sigue pendiente de comprobar.', skill: 'Reconocer lo incierto'},
      {question: '¿Qué paso seguro y pequeño está a tu alcance ahora?', reflection: 'Considera una acción revisable. Esperar también puede tener sentido si falta información importante.', why: 'Puedes decidir qué atender sin resolver todas las posibilidades.', skill: 'Elegir con información incompleta'}
    ],
    example: {situation: 'Enviaste un mensaje hace un rato y piensas «seguro está molesto conmigo».', response: 'Sé que aún no respondió. No sé por qué. Puedo esperar o preguntar en un momento adecuado.', explanation: 'Distingues el dato de tu interpretación y consideras qué puedes hacer.'},
    check: {question: 'Un mensaje sigue sin respuesta. ¿Qué frase describe un hecho?', options: ['Todavía no recibí una respuesta.', 'La otra persona está molesta conmigo.', 'Esta relación va a terminar.'], answer: 0, explanation: 'La ausencia de respuesta es el dato. Las otras frases son interpretaciones o anticipaciones que necesitan información.'},
    transfer: 'Cuando una preocupación crezca, separaré «lo que sé» de «lo que imagino» antes de responder.', next: 'relaciones'
  },
  autocritica: {
    territory: 'Perspectiva', title: 'Mirar más allá de una etiqueta', skill: 'Perspectiva de ti y metaconciencia',
    summary: 'Cuando un error se convierte en una definición de ti.',
    intro: {what: 'Cambiar una etiqueta sobre ti por una descripción de lo ocurrido.', why: 'Un episodio puede ocupar demasiado espacio en cómo te describes.', purpose: 'Reconocer algo concreto que puedas revisar o aprender.'},
    steps: [
      {question: 'Cuando algo te sale mal, ¿qué etiqueta tiendes a ponerte?', reflection: 'Reconoce una frase que hayas usado. Nota que es una manera de describirte en ese momento.', why: 'Notar la etiqueta permite examinarla antes de tratarla como toda tu identidad.', skill: 'Observar una etiqueta'},
      {question: '¿Cómo describirías ese episodio usando una acción concreta?', reflection: 'Prueba «dejé esta tarea pendiente» en lugar de una definición general. Conserva lo que pasó.', why: 'Una acción específica permite reconocer qué revisar o reparar.', skill: 'Describir lo ocurrido'},
      {question: '¿Qué otra experiencia tuya queda fuera de esa etiqueta?', reflection: 'Recuerda un momento distinto. Inclúyelo en tu mirada sin borrar la dificultad actual.', why: 'Ampliar la mirada ayuda a que un episodio no ocupe toda la descripción de ti.', skill: 'Ampliar la perspectiva'}
    ],
    example: {situation: 'Olvidaste una tarea y aparece «soy un desastre».', response: 'Olvidé esta tarea. Puedo revisar cómo recordarla; esa frase deja fuera otras cosas que sí he hecho.', explanation: 'La descripción concreta conserva tu responsabilidad y amplía la perspectiva.'},
    check: {question: 'Olvidaste enviar un documento. ¿Qué descripción permite revisar el episodio?', options: ['Soy una persona incapaz.', 'Olvidé enviarlo; revisaré cómo recordarlo.', 'No pasó nada y no necesito revisarlo.'], answer: 1, explanation: 'Describes una acción y una posibilidad de ajuste. Puedes asumir responsabilidad sin convertir el episodio en una identidad.'},
    transfer: 'Cuando me ponga una etiqueta, describiré qué hice y qué puedo revisar.', next: 'autocuidado'
  },
  espacio: {
    territory: 'Contacto', title: 'Dar espacio a una emoción', skill: 'Aceptación',
    summary: 'Cuando intentas apartar lo que estás sintiendo.',
    intro: {what: 'Notar una emoción leve y considerar una acción con ella presente.', why: 'Pelear con una emoción puede ocupar la atención que necesitas para otras cosas.', purpose: 'Ensayar una respuesta que cuide lo que necesitas hoy.'},
    steps: [
      {question: '¿Qué emoción leve reconoces en este momento?', reflection: 'Puedes usar un nombre aproximado. Si prefieres, observa solo cómo se nota en tu cuerpo.', why: 'Reconocer una emoción es un primer paso para elegir cómo responder.', skill: 'Reconocer lo que sientes'},
      {question: '¿Qué haces cuando intentas apartar esa emoción?', reflection: 'Observa una acción habitual y su efecto. A veces distraerte ayuda; otras veces deja algo pendiente.', why: 'Revisar el efecto de tu respuesta ayuda a considerar si te sirve en esa situación.', skill: 'Notar tu respuesta'},
      {question: 'Con esa emoción presente, ¿qué cuidado pequeño puedes elegir?', reflection: 'Considera descansar, pedir una pausa o atender algo importante. Elige según cómo estás hoy.', why: 'Aceptación es dar espacio a la experiencia para decidir; no exige aguantar una situación dañina.', skill: 'Dar espacio y elegir'}
    ],
    example: {situation: 'Sientes nervios leves antes de una conversación cotidiana.', response: 'Noto los nervios. Puedo hablar despacio y pedir una pausa si la necesito.', explanation: 'La emoción puede acompañarte mientras eliges cómo cuidarte y responder.'},
    check: {question: 'Tienes nervios leves y quieres conversar. ¿Qué ensaya dar espacio a la emoción?', options: ['Exigirme dejar de sentir antes de hablar.', 'Ignorar mis necesidades para aguantar.', 'Notar los nervios y elegir si hablar o pedir una pausa.'], answer: 2, explanation: 'Reconoces la emoción y conservas la posibilidad de cuidarte. Aceptar lo que sientes no obliga a soportar daño.'},
    transfer: 'Cuando aparezca una emoción leve, la nombraré y elegiré un cuidado posible.', next: 'orientarse'
  },
  orientarse: {
    territory: 'Dirección', title: 'Elegir lo que importa', skill: 'Valores',
    summary: 'Cuando necesitas una dirección para decidir.',
    intro: {what: 'Reconocer una cualidad que quieres expresar en una decisión.', why: 'Lo que te importa puede orientar tu forma de actuar.', purpose: 'Traducir esa dirección en un gesto cotidiano.'},
    steps: [
      {question: 'En una decisión de hoy, ¿qué te importa cuidar?', reflection: 'Nombra una cualidad: honestidad, cuidado, curiosidad u otra que tenga sentido para ti.', why: 'Un valor ofrece una dirección para examinar tus opciones.', skill: 'Reconocer un valor'},
      {question: '¿Qué seguiría importándote aunque nadie te felicitara?', reflection: 'Imagina esa decisión sin recibir aprobación. Observa qué quieres conservar de tu forma de actuar.', why: 'Esta pregunta ayuda a explorar una dirección elegida por ti.', skill: 'Elegir una dirección propia'},
      {question: '¿Qué gesto pequeño expresaría eso que te importa?', reflection: 'Hazlo observable: escuchar una pregunta, decir algo con honestidad o reservar un rato para aprender.', why: 'Una dirección se vuelve practicable cuando la conectas con una acción.', skill: 'Expresar un valor'}
    ],
    example: {situation: 'Quieres cuidar una relación y tienes poco tiempo para conversar.', response: 'Quiero expresar cuidado. Puedo escuchar con atención durante unos minutos o acordar otro momento.', explanation: 'Cuidado es la dirección; la acción concreta se adapta a tus condiciones.'},
    check: {question: 'Quieres expresar curiosidad. ¿Qué opción conecta ese valor con una acción?', options: ['Hacer una pregunta para entender mejor.', 'Esperar a sentir curiosidad todo el tiempo.', 'Conseguir que todos admiren mis conocimientos.'], answer: 0, explanation: 'La pregunta expresa curiosidad en una conducta concreta. Un valor puede practicarse en gestos pequeños.'},
    transfer: 'Antes de una decisión pequeña, nombraré qué quiero cuidar y un gesto que lo exprese.', next: 'integrar'
  },
  relaciones: {
    territory: 'Dirección', title: 'Expresar una necesidad', skill: 'Comunicación consciente y límites',
    summary: 'Cuando necesitas pedir algo o cuidar un límite.',
    intro: {what: 'Preparar una petición concreta para una conversación cotidiana segura.', why: 'Una suposición puede confundirse con lo que la otra persona realmente dijo.', purpose: 'Expresar una necesidad y una acción que dependa de ti.'},
    steps: [
      {question: 'En una conversación pendiente, ¿qué estás dando por supuesto?', reflection: 'Separa lo que la persona dijo de lo que interpretaste. Piensa una pregunta que aclare la diferencia.', why: 'Preguntar puede aportar la información que falta.', skill: 'Revisar una suposición'},
      {question: '¿Qué petición concreta quieres expresar?', reflection: 'Ensaya «necesito…, ¿podemos…?». Usa palabras que permitan entender qué estás proponiendo.', why: 'Una petición clara ofrece algo concreto para conversar.', skill: 'Expresar una necesidad'},
      {question: '¿Qué acción depende de ti para cuidar ese límite?', reflection: 'Considera acordar un horario, pedir una pausa o reservar un momento para responder.', why: 'Un límite practicable distingue tu acción de lo que la otra persona decida.', skill: 'Cuidar un límite'}
    ],
    example: {situation: 'Te proponen una conversación cuando necesitas terminar una tarea.', response: 'Necesito terminar esto. Puedo conversar a las cinco; si ahora no puedo atender, responderé después.', explanation: 'Expresas tu necesidad y una acción propia, sin asegurar cómo reaccionará la otra persona.'},
    check: {question: 'Necesitas una pausa en una conversación segura. ¿Qué opción expresa tu límite?', options: ['Voy a conseguir que la otra persona deje de molestarse.', 'Necesito una pausa; puedo retomar en otro momento.', 'La otra persona debería adivinar lo que necesito.'], answer: 1, explanation: 'Nombras tu necesidad y una acción a tu alcance. El límite no garantiza ni controla la reacción de otra persona.'},
    transfer: 'Cuando necesite un límite, expresaré una necesidad y una acción que esté a mi alcance.', next: 'autocritica'
  },
  autocuidado: {
    territory: 'Perspectiva', title: 'Tratarte con respeto', skill: 'Autocompasión práctica',
    summary: 'Cuando te exiges más de lo que puedes dar hoy.',
    intro: {what: 'Notar una necesidad y ensayar una manera respetuosa de hablarte.', why: 'Tus condiciones cambian; tus exigencias también pueden ajustarse.', purpose: 'Elegir un cuidado posible sin perder de vista lo importante.'},
    steps: [
      {question: '¿Qué necesidad concreta merece tu atención hoy?', reflection: 'Piensa en descanso, alimento, compañía, movimiento o una pausa. Elige una para explorar.', why: 'Una necesidad concreta permite pensar un cuidado posible.', skill: 'Reconocer una necesidad'},
      {question: '¿Qué frase respetuosa te dirías ante esa dificultad?', reflection: 'Ensaya una frase como «esto está siendo difícil; puedo revisar qué necesito». Hazla tuya.', why: 'Puedes tratarte con respeto mientras reconoces lo que quieres corregir o aprender.', skill: 'Hablarte con respeto'},
      {question: '¿Qué exigencia podrías ajustar a tus condiciones de hoy?', reflection: 'Reduce una tarea, reserva una pausa o considera pedir apoyo. Elige un ajuste que puedas probar.', why: 'Ajustar una exigencia permite cuidar tus condiciones mientras sigues atendiendo lo importante.', skill: 'Ajustar con realismo'}
    ],
    example: {situation: 'Estás cansado y una tarea quedó a medias.', response: 'Hoy tengo menos energía. Puedo hacer una parte más pequeña y reservar un momento para descansar.', explanation: 'Reconoces tu condición y ajustas una acción. El respeto puede convivir con la responsabilidad.'},
    check: {question: 'Estás cansado y tienes una tarea. ¿Qué opción ensaya cuidado y responsabilidad?', options: ['Insultarme para obligarme a terminar.', 'Prometer que mañana no sentiré cansancio.', 'Reconocer el cansancio y ajustar un paso posible.'], answer: 2, explanation: 'Reconoces tu condición y consideras un ajuste concreto. La autocompasión puede acompañar una acción responsable.'},
    transfer: 'Cuando note una exigencia excesiva, revisaré mi necesidad y ajustaré un paso.', next: 'preocupacion'
  },
  integrar: {
    territory: 'Dirección', title: 'Dar un paso posible', skill: 'Acción comprometida',
    summary: 'Cuando sabes qué importa y cuesta empezar.',
    intro: {what: 'Elegir una acción pequeña y una ocasión concreta para probarla.', why: 'Una intención necesita un primer paso que puedas realizar.', purpose: 'Aprender del intento y ajustar lo que haga falta.'},
    steps: [
      {question: '¿Qué acción pequeña expresaría algo que te importa hoy?', reflection: 'Piensa en algo observable: abrir un documento, escuchar un mensaje o reservar una pausa.', why: 'Una acción concreta conecta lo que valoras con lo que haces.', skill: 'Elegir una acción'},
      {question: '¿En qué momento podrías dar el primer paso?', reflection: 'Completa mentalmente «cuando…, haré…». Ajusta el paso al tiempo y la energía que tienes.', why: 'Vincular una acción con una ocasión ayuda a reconocer cuándo probarla.', skill: 'Preparar el primer paso'},
      {question: 'Después de probarlo, ¿qué observarías para ajustar el intento?', reflection: 'Elige un dato: si empezaste, qué obstáculo apareció o qué cambio harías la próxima vez.', why: 'La experiencia aporta información para decidir qué repetir y qué ajustar.', skill: 'Aprender del intento'}
    ],
    example: {situation: 'Quieres escribir, pero la tarea completa parece demasiado grande.', response: 'Cuando abra el documento, escribiré una primera frase. Después revisaré qué facilitó empezar.', explanation: 'El paso tiene una ocasión y un tamaño posible. El intento sirve para aprender.'},
    check: {question: 'Quieres empezar una tarea. ¿Qué plan deja claro un primer paso?', options: ['Cuando abra el documento, escribiré una primera frase.', 'Esta semana cambiaré toda mi vida.', 'Empezaré cuando tenga motivación perfecta.'], answer: 0, explanation: 'El plan conecta una ocasión con una acción concreta y revisable. Su tamaño puede adaptarse a tus condiciones.'},
    transfer: 'Cuando llegue una ocasión concreta, probaré un paso pequeño y revisaré cómo fue.', next: 'espacio'
  }
};
if (typeof module !== 'undefined') module.exports = {INSIDE_LESSONS};

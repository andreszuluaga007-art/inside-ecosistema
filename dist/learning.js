const INSIDE_LESSONS = {
  notar: {
    territory: 'Contacto', title: 'Volver al presente', skill: 'Atención flexible y metaconciencia',
    summary: 'Cuando pierdes el hilo de una conversación o una tarea.',
    intro: {what: 'Notar dónde se fue tu atención y elegir un detalle al que volver.', why: 'Puedes descubrir la distracción antes de seguir respondiendo en automático.', purpose: 'Ensayar cómo recuperar el hilo de una actividad cotidiana.'},
    steps: [
      {question: 'En una actividad tranquila de hoy, ¿qué detalle puede ayudarte a volver a lo que haces?', reflection: 'Elige un detalle de esa actividad: una palabra que lees, un sonido cercano o el contacto de tus manos.', why: 'Estás eligiendo a qué prestar atención en este momento.', skill: 'Elegir un punto de atención'},
      {question: 'Mientras vuelves a esa actividad, ¿qué sensación notas en tu cuerpo?', reflection: 'Nota el apoyo de tus pies, la temperatura o una tensión. Si no notas algo claro, puedes dejarlo abierto; no necesitas producir una sensación.', why: 'Aquí practicas observar una sensación, sin usarla como una prueba de que algo va bien o mal.', skill: 'Notar una sensación'},
      {question: 'Si vuelves a distraerte, ¿cómo reconocerías que te fuiste y dónde retomarías?', reflection: 'Prueba «me fui a otro asunto». Luego vuelve a una frase, un sonido o el gesto que estabas haciendo.', why: 'La habilidad incluye reconocer que te distraes y elegir dónde volver; no exige atención perfecta.', skill: 'Recuperar el hilo'}
    ],
    example: {situation: 'En una conversación cotidiana, piensas en tus pendientes y pierdes parte de lo que te dicen.', response: 'Me fui a mis pendientes. Vuelvo a escuchar y, si hace falta, pido que repitan la última parte.', explanation: 'Reconoces la distracción y retomas algo concreto de la conversación. Puedes volver a distraerte.'},
    check: {question: 'Mientras alguien te habla, notas que pensabas en tus pendientes. ¿Qué ensaya volver al presente?', options: ['Repasar todos mis pendientes antes de seguir escuchando.', 'Notar la distracción, volver a escuchar y pedir que repita si hace falta.', 'Exigirme escuchar sin que vuelva a aparecer otro pensamiento.'], answer: 1, explanation: 'La segunda opción reconoce lo que ocurrió y propone cómo retomar. Pedir una aclaración también puede ser parte de volver a la conversación.'},
    transfer: 'Si quiero retomar una conversación cotidiana, puedo volver a escuchar y pedir que repitan una parte.', next: 'perspectiva'
  },
  perspectiva: {
    territory: 'Perspectiva', title: 'Tomar distancia de una idea', skill: 'Defusión cognitiva',
    summary: 'Cuando una duda viene acompañada de «voy a quedar mal».',
    intro: {what: 'Reconocer un pensamiento que aparece cuando necesitas aclarar algo.', why: 'Una predicción de tu mente puede influir en lo que decides preguntar.', purpose: 'Considerar tus opciones con ese pensamiento todavía presente.'},
    steps: [
      {question: 'Cuando necesitas aclarar algo, ¿qué pensamiento puede frenarte?', reflection: 'Recuerda una duda pequeña. Nombra la frase que aparece: «si pregunto, pareceré incapaz», por ejemplo.', why: 'Identificas una frase que puede influir en tu decisión, sin asumir que sea una orden.', skill: 'Reconocer la frase'},
      {question: 'Si empiezas esa frase con «mi mente dice…», ¿qué notas?', reflection: 'Prueba nombrarla con ese comienzo. Observa lo que ocurre; también puede no cambiar cómo te sientes.', why: 'El ensayo consiste en reconocer el pensamiento; no en producir una sensación obligatoria de distancia.', skill: 'Nombrar un pensamiento'},
      {question: 'Con esa idea presente, ¿qué información o acción quieres considerar?', reflection: 'Piensa qué necesitas aclarar y si quieres formular una pregunta concreta. Puedes valorar el contexto antes de actuar.', why: 'Observar la idea deja espacio para examinar opciones, sin tener que demostrar que sea falsa.', skill: 'Considerar tus opciones'}
    ],
    example: {situation: 'No entiendes una indicación y aparece «si pregunto, van a pensar que no soy capaz».', response: 'Mi mente dice que voy a quedar mal. Puedo pedir que aclaren una parte concreta de la indicación.', explanation: 'Nombras la predicción y consideras una pregunta. No necesitas garantizar cómo te evaluarán.'},
    check: {question: 'Tienes una duda y piensas «si pregunto, quedaré mal». ¿Qué respuesta ensaya tomar distancia?', options: ['Esperar a estar seguro de que nadie me juzgará.', 'Discutir con la idea hasta conseguir que desaparezca.', 'Mi mente dice «quedaré mal». Puedo valorar si pedir una aclaración.'], answer: 2, explanation: 'La tercera opción reconoce la predicción como pensamiento y mantiene abierta una decisión. No asegura que la idea sea falsa ni obliga a preguntar.'},
    transfer: 'Ante una duda pequeña, nombraré la predicción de mi mente y consideraré si necesito aclarar algo.', next: 'integrar'
  },
  preocupacion: {
    territory: 'Contacto', title: 'Hechos y posibilidades', skill: 'Perspectiva ante la incertidumbre',
    summary: 'Cuando un cambio todavía no tiene todos sus detalles.',
    intro: {what: 'Distinguir el dato que tienes de lo que anticipas sobre un cambio.', why: 'Un aviso incompleto puede ir acompañado de interpretaciones todavía no comprobadas.', purpose: 'Identificar qué información falta y qué puedes atender ahora.'},
    steps: [
      {question: 'Ante un cambio cotidiano que te preocupa, ¿qué información recibiste realmente?', reflection: 'Elige un cambio pequeño. Describe qué se anunció y qué sigue sin confirmarse; no completes los detalles que faltan.', why: 'Describes la información disponible antes de añadir una explicación o una predicción.', skill: 'Reconocer el dato'},
      {question: '¿Qué consecuencia estás imaginando y todavía no sabes si ocurrirá?', reflection: 'Empieza con «me preocupa que podría…». Distingue esa posibilidad de una consecuencia ya confirmada.', why: 'Reconocer lo incierto no descarta un riesgo; diferencia lo que sabes de lo que aún necesitas comprobar.', skill: 'Separar la anticipación'},
      {question: '¿Qué dato te serviría para decidir y qué paso puedes dar para obtenerlo?', reflection: 'Considera una pregunta concreta, revisar el aviso o esperar la confirmación. Elige según la situación.', why: 'Tu siguiente paso puede ser conseguir información, en lugar de resolver todas las posibilidades ahora.', skill: 'Buscar información útil'}
    ],
    example: {situation: 'Te avisan que cambiará el horario de una actividad, pero todavía no dicen cuál será.', response: 'Sé que anunciaron un cambio. Aún no sé el nuevo horario. Puedo preguntar cuándo lo confirmarán.', explanation: 'Separas el anuncio de sus posibles efectos y eliges qué información pedir. La preocupación puede seguir presente.'},
    check: {question: 'Te anuncian un cambio de horario sin dar los detalles. ¿Qué puedes afirmar con esa información?', options: ['Se anunció un cambio; el nuevo horario todavía no está confirmado.', 'El cambio seguro impedirá que pueda participar.', 'Si aún no sé el horario, no hay nada que pueda preguntar.'], answer: 0, explanation: 'La primera opción conserva el dato y lo que falta por saber. Las otras añaden conclusiones que el aviso no permite confirmar.'},
    transfer: 'Ante un aviso incompleto, separaré el dato de mi anticipación y elegiré una pregunta que me ayude a decidir.', next: 'relaciones'
  },
  autocritica: {
    territory: 'Perspectiva', title: 'Mirar más allá de una etiqueta', skill: 'Perspectiva de ti y metaconciencia',
    summary: 'Cuando una confusión termina en una etiqueta sobre ti.',
    intro: {what: 'Describir un error cotidiano sin convertirlo en una definición de ti.', why: 'Una etiqueta general deja fuera los detalles del episodio y otras experiencias tuyas.', purpose: 'Reconocer tu responsabilidad y una posibilidad de reparación.'},
    steps: [
      {question: 'Después de una confusión pequeña, ¿qué etiqueta podrías ponerte?', reflection: 'Reconoce una frase como «soy un desastre». Nota que aparece ante un episodio concreto, no como una descripción completa.', why: 'Identificas una manera de hablarte antes de tratarla como todo lo que eres.', skill: 'Observar una etiqueta'},
      {question: '¿Qué acción concreta describe lo ocurrido, sin usar esa etiqueta?', reflection: 'Prueba «confundí la hora» o «no revisé la fecha». Conserva lo que hiciste y el efecto que necesitas atender.', why: 'Una descripción específica permite reconocer qué pasó y qué puedes revisar o reparar.', skill: 'Precisar el episodio'},
      {question: '¿Qué otra experiencia tuya deja fuera esa etiqueta?', reflection: 'Recuerda un momento distinto que también forme parte de tu historia. No necesitas usarlo para negar el error actual.', why: 'Tu mirada puede incluir la dificultad y otras experiencias, sin reducirte a una sola de ellas.', skill: 'Ampliar la mirada'}
    ],
    example: {situation: 'Confundiste la hora de un encuentro informal y llegaste tarde. Aparece «siempre soy un desastre».', response: 'Confundí la hora. Puedo reconocerlo, disculparme si corresponde y revisar cómo anotar el próximo encuentro.', explanation: 'Asumes una acción concreta y consideras una reparación. La etiqueta añade una definición más amplia que ese episodio.'},
    check: {question: 'Confundiste la hora de un encuentro. ¿Qué descripción permite revisar lo ocurrido?', options: ['Soy una persona incapaz de organizar cualquier cosa.', 'Confundí la hora; puedo reconocerlo y revisar cómo anotarla.', 'Para no criticarme, debo actuar como si no hubiera pasado.'], answer: 1, explanation: 'La segunda opción describe el episodio y una posibilidad de ajuste. Ampliar tu perspectiva puede convivir con reconocer un error y su efecto.'},
    transfer: 'Si convierto un error pequeño en una etiqueta, describiré lo ocurrido y consideraré qué puedo reparar.', next: 'autocuidado'
  },
  espacio: {
    territory: 'Contacto', title: 'Dar espacio a una emoción', skill: 'Aceptación',
    summary: 'Cuando un plan cambia y aparece una decepción leve.',
    intro: {what: 'Reconocer una emoción leve ante un cambio de planes.', why: 'Puedes observar cómo respondes al malestar antes de elegir tu siguiente paso.', purpose: 'Considerar un cuidado o una acción sin exigir que la emoción desaparezca.'},
    steps: [
      {question: 'Ante un cambio pequeño de planes, ¿qué emoción leve podrías reconocer?', reflection: 'Piensa en una situación manejable. Puedes nombrar decepción, frustración u otra emoción, o describir una sensación.', why: 'Nombras la experiencia que quieres observar; no tienes que encontrar la palabra exacta.', skill: 'Reconocer la emoción'},
      {question: '¿Qué sueles hacer para intentar apartar esa emoción y qué efecto tiene?', reflection: 'Observa una respuesta habitual. Nota si te sirve en ese momento o si deja algo que quieres atender después.', why: 'Revisas la función de tu respuesta, sin convertir distraerte o sentir malestar en un error.', skill: 'Observar cómo respondes'},
      {question: 'Si la emoción sigue presente, ¿qué cuidado o decisión puedes considerar?', reflection: 'Piensa si necesitas una pausa, expresar tu necesidad o ajustar el plan. Puedes parar este ensayo si no te resulta oportuno.', why: 'Dar espacio a lo que sientes no te obliga a seguir un plan ni a permanecer en una situación dañina.', skill: 'Dar espacio y cuidarte'}
    ],
    example: {situation: 'Se pospone un plan que te hacía ilusión y notas una decepción leve.', response: 'Esto me decepciona. Puedo tomarme una pausa y después decidir qué quiero hacer con ese rato.', explanation: 'Reconoces lo que sientes y conservas opciones. La práctica no requiere que el malestar desaparezca.'},
    check: {question: 'Se pospone un plan y aparece decepción leve. ¿Qué respuesta reconoce la emoción y permite elegir?', options: ['No debería sentir decepción por algo tan pequeño.', 'Tengo que seguir ocupado hasta asegurar que ya no siento nada.', 'Esto me decepciona; puedo decidir si necesito una pausa o ajustar el plan.'], answer: 2, explanation: 'La tercera opción reconoce la emoción y deja una decisión a tu alcance. Darle espacio no obliga a soportar daño ni a continuar si necesitas parar.'},
    transfer: 'Si me resulta oportuno, probaré nombrar una decepción leve y elegir si necesito una pausa o ajustar el plan.', next: 'orientarse'
  },
  orientarse: {
    territory: 'Dirección', title: 'Elegir lo que importa', skill: 'Valores',
    summary: 'Cuando quieres decidir cómo participar en un desacuerdo.',
    intro: {what: 'Elegir una cualidad que quieras expresar en una decisión compartida.', why: 'Puedes orientar tu forma de actuar sin controlar el resultado de la conversación.', purpose: 'Distinguir una dirección elegida de un resultado que deseas conseguir.'},
    steps: [
      {question: 'En una decisión cotidiana compartida, ¿cómo te importa participar?', reflection: 'Nombra una cualidad elegida por ti: respeto, honestidad, curiosidad u otra. No hay una respuesta impuesta.', why: 'Exploras la forma de actuar que quieres cuidar, sin buscar un valor obligatorio para todas las personas.', skill: 'Elegir una cualidad'},
      {question: '¿Esa dirección habla de cómo quieres actuar o de un resultado que no depende solo de ti?', reflection: 'Distingue «dialogar con respeto» de «conseguir que piensen como yo». Puedes probar con la cualidad que elegiste.', why: 'Un valor orienta tu forma de actuar; no asegura que otras personas respondan como deseas.', skill: 'Distinguir dirección y resultado'},
      {question: '¿Qué gesto concreto expresaría esa cualidad en la situación que elegiste?', reflection: 'Considera escuchar una razón, hacer una pregunta o expresar tu desacuerdo con claridad. Adáptalo a una conversación segura.', why: 'Conectas una dirección elegida con una conducta que puedes considerar en tu contexto.', skill: 'Traducir un valor en acción'}
    ],
    example: {situation: 'En una conversación cotidiana segura, otra persona propone un plan distinto del que prefieres.', response: 'Si elijo respeto, puedo escuchar su razón y explicar mi preferencia sin exigir que esté de acuerdo.', explanation: 'El respeto es una dirección elegida; escuchar y expresar tu preferencia son acciones. El acuerdo es un resultado posible.'},
    check: {question: 'En un desacuerdo cotidiano seguro, quieres expresar respeto. ¿Qué acción lo pone en práctica?', options: ['Escuchar una razón y expresar mi desacuerdo con claridad.', 'Conseguir que la otra persona esté de acuerdo conmigo.', 'Asegurar que nadie se incomode con lo que yo diga.'], answer: 0, explanation: 'La primera opción describe una forma de participar. Las otras proponen resultados que no dependen solo de ti; respetar no exige estar de acuerdo.'},
    transfer: 'Antes de una decisión compartida, nombraré cómo quiero actuar y un gesto concreto que lo exprese.', next: 'integrar'
  },
  relaciones: {
    territory: 'Dirección', title: 'Expresar una necesidad', skill: 'Comunicación consciente y límites',
    summary: 'Cuando recibes una petición no urgente que no puedes atender ahora.',
    intro: {what: 'Preparar una petición ante un mensaje no urgente, en una conversación segura.', why: 'Pedir claridad permite revisar lo solicitado sin adivinar lo que la otra persona espera.', purpose: 'Expresar qué puedes ofrecer y qué acción depende de ti.'},
    steps: [
      {question: 'Ante una petición no urgente, ¿qué te pidieron realmente y qué estás suponiendo?', reflection: 'Separa el mensaje recibido de la urgencia que imaginas. Si falta un dato, considera cómo preguntar por él.', why: 'Distingues la petición de tu interpretación antes de decidir cómo responder.', skill: 'Aclarar lo solicitado'},
      {question: '¿Qué necesidad o plazo quieres proponer de forma concreta?', reflection: 'Ensaya «necesito tiempo para revisarlo; ¿para cuándo lo necesitan?». Cambia las palabras según lo que quieras pedir.', why: 'Tu petición da información sobre lo que necesitas y abre una posibilidad de acuerdo.', skill: 'Formular una petición'},
      {question: 'Si ahora no puedes atender esa petición, ¿qué acción está a tu alcance?', reflection: 'Piensa si puedes avisar cuándo responderás, proponer otro momento o explicar que no puedes asumirlo.', why: 'Un límite practicable expresa tu disponibilidad; no garantiza ni controla la reacción de la otra persona.', skill: 'Comunicar tu disponibilidad'}
    ],
    example: {situation: 'En un grupo de organización cotidiana, te piden revisar algo no urgente cuando no puedes atenderlo.', response: 'Ahora no puedo revisarlo. Mañana puedo dedicarle un rato; ¿ese plazo les sirve?', explanation: 'Expresas tu disponibilidad y propones un acuerdo. Puedes revisar el plazo si aparecen datos nuevos.'},
    check: {question: 'Recibes una petición no urgente que no puedes revisar ahora. ¿Qué respuesta expresa tu disponibilidad?', options: ['La otra persona debería saber cuándo puedo responder.', 'Ahora no puedo revisarlo; puedo hacerlo mañana. ¿Ese plazo te sirve?', 'Voy a conseguir que la otra persona no se moleste con mi respuesta.'], answer: 1, explanation: 'La segunda opción comunica una condición y un plazo para conversar. Puedes proponer otro plazo; el límite no depende de controlar una reacción.'},
    transfer: 'Ante una petición no urgente, puedo revisar qué puedo ofrecer y comunicar un plazo que pueda sostener.', next: 'autocritica'
  },
  autocuidado: {
    territory: 'Perspectiva', title: 'Tratarte con respeto', skill: 'Autocompasión práctica',
    summary: 'Cuando tu energía de hoy no coincide con lo que te estás exigiendo.',
    intro: {what: 'Reconocer una necesidad y revisar una exigencia ante un cansancio leve.', why: 'Puedes considerar tus condiciones actuales sin reducirlas a una falta de voluntad.', purpose: 'Elegir un cuidado y ajustar qué parte de una tarea puedes atender.'},
    steps: [
      {question: 'En un momento de cansancio leve, ¿qué necesidad querrías atender primero?', reflection: 'Piensa en una pausa, descanso, compañía o apoyo. Elige algo concreto que tenga sentido para tus condiciones.', why: 'Reconoces una necesidad para considerar cómo cuidarla, sin convertir el cuidado en otra exigencia.', skill: 'Reconocer tus condiciones'},
      {question: '¿Cómo te hablarías con respeto aunque todavía haya una tarea pendiente?', reflection: 'Prueba «hoy esto me cuesta; puedo revisar qué necesito y qué es posible». Usa palabras que te resulten propias.', why: 'Una frase respetuosa puede reconocer la dificultad y lo pendiente, sin insultarte ni negar lo ocurrido.', skill: 'Ensayar un trato respetuoso'},
      {question: '¿Qué consideras necesario hoy y qué podrías simplificar, posponer o pedir que te ayuden a hacer?', reflection: 'Distingue lo que quieres atender de lo que puede esperar. Un cuidado posible también puede ser pedir apoyo o parar.', why: 'Ajustas la tarea a tus condiciones y examinas opciones; no tienes que demostrar tu valor terminándolo todo.', skill: 'Ajustar una exigencia'}
    ],
    example: {situation: 'Tras una jornada exigente, tienes poca energía para hacer una tarea doméstica.', response: 'Hoy tengo menos energía. Puedo elegir una parte que considero necesaria y dejar otra para después, o pedir apoyo.', explanation: 'Consideras tu necesidad y un ajuste concreto. El cuidado no requiere negar lo pendiente ni terminar toda la tarea.'},
    check: {question: 'Tienes cansancio leve y una tarea doméstica pendiente. ¿Qué respuesta ensaya un trato respetuoso?', options: ['Insultarme para obligarme a terminar todo hoy.', 'Afirmar que nada está pendiente para no sentirme mal.', 'Reconocer mi cansancio y valorar qué simplificar, posponer o pedir que me ayuden a hacer.'], answer: 2, explanation: 'La tercera opción reconoce tus condiciones y considera un ajuste. Puedes cuidar una necesidad sin convertir el descanso en algo que debas ganarte.'},
    transfer: 'Si una exigencia supera mis condiciones de hoy, puedo revisar qué necesito y qué simplificar, posponer o pedir.', next: 'preocupacion'
  },
  integrar: {
    territory: 'Dirección', title: 'Dar un paso posible', skill: 'Acción comprometida',
    summary: 'Cuando esperas tener un momento ideal para retomar algo que importa.',
    intro: {what: 'Elegir un primer paso pequeño y una ocasión real para probarlo.', why: 'Puedes concretar una intención sin esperar que estén dadas todas las condiciones ideales.', purpose: 'Aprender del intento, también cuando necesitas cambiar el plan.'},
    steps: [
      {question: 'Para retomar algo que te importa, ¿cuál sería una versión pequeña del primer paso?', reflection: 'Elige una acción observable: leer un párrafo, ordenar un material o escribir una pregunta. Ajusta su tamaño a tu día.', why: 'Defines qué quieres intentar, en lugar de dejar la intención como una tarea enorme o imprecisa.', skill: 'Concretar el primer paso'},
      {question: '¿Qué momento real de tu día podría servir como ocasión para probarlo?', reflection: 'Completa «después de…, probaré…». Elige una ocasión posible y una acción que tenga sentido para ti.', why: 'Vinculas el paso con una situación reconocible; el plan puede cambiar si cambian tus condiciones.', skill: 'Elegir una ocasión'},
      {question: 'Si el intento no sale como esperabas, ¿qué ajustarías del momento, tamaño o apoyo?', reflection: 'Elige un dato para revisar: si hubo tiempo, qué se interpuso o qué ayuda faltó. Considera un ajuste para otro intento.', why: 'Revisas las condiciones del ensayo. Empezar o no empezar no define tu valor ni obliga a continuar hoy.', skill: 'Aprender y ajustar'}
    ],
    example: {situation: 'Quieres retomar una lectura que te importa, pero esperas tener una hora completamente libre.', response: 'Después de una tarea cotidiana, probaré leer un párrafo. Luego revisaré si ese momento y ese tamaño me sirven.', explanation: 'El plan conecta una ocasión con un paso concreto. Puedes ajustar ambos según lo que ocurra.'},
    check: {question: 'Quieres retomar una lectura que te importa. ¿Qué plan permite probar y revisar un primer paso?', options: ['Después de comer, probaré leer un párrafo y revisaré si ese momento me sirve.', 'Decidir que desde hoy leeré sin interrupciones durante toda la tarde.', 'Esperar hasta estar seguro de que no habrá ningún obstáculo.'], answer: 0, explanation: 'La primera opción propone una ocasión, una acción pequeña y una revisión. No garantiza constancia ni convierte un intento difícil en un fracaso personal.'},
    transfer: 'Si decido probarlo, elegiré una ocasión para un paso pequeño y después revisaré si necesito ajustar el plan.', next: 'espacio'
  }
};
if (typeof module !== 'undefined') module.exports = {INSIDE_LESSONS};

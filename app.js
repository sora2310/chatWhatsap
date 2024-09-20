const { createBot, createProvider, createFlow, addKeyword, addAnswer } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')
const { delay } = require('@whiskeysockets/baileys')


const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal, flowsecundario])
    const adapterProvider = createProvider(BaileysProvider)
    

 

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb({port:30})
    
}


const flowcucuta = addKeyword(['cucuta']).addAnswer(['*Cucuta:*',

'*🚗 Carros:*',
'Los conductores de carro pueden ganar hasta 💰 *$54,500* diarios en bonos escalonados realizando hasta 15 viajes. Cuantos más viajes realices, mayor será el bono. ¡Conéctate con Yango y maximiza tus ingresos diarios! 🚀',

'*🛵 Motos:*',
'Para los conductores de moto, hay bonos diarios de hasta 💰 *$32,000* realizando hasta 15 viajes. Recuerda que el bono es escalonado, ¡así que mientras más viajes hagas, mayor será el bono que recibas! 🏍️💨',])

const flowbucaramanga = addKeyword(['bucaramanga']).addAnswer(['*Bucaramanga:*',

    '*🚗 Carros:*',
    'Los conductores de carro pueden ganar hasta 💰 *$54,500* diarios en bonos escalonados realizando hasta 15 viajes. Cuantos más viajes realices, mayor será el bono. ¡Conéctate con Yango y maximiza tus ingresos diarios! 🚀',
    
    '*🛵 Motos:*',
    'Para los conductores de moto, hay bonos diarios de hasta 💰 *$32,000* realizando hasta 15 viajes. Recuerda que el bono es escalonado, ¡así que mientras más viajes hagas, mayor será el bono que recibas! 🏍️💨',])
    

const flowmedellin = addKeyword(['medellin, medellín']).addAnswer(['*Medellín:*',
' ',
'*🚗 Carros:*',
'Gana hasta 💰 *$950,000* semanales en bonos escalonados realizando hasta 120 viajes. Cuantos más viajes realices, mayor será el bono. ¡Aprovecha estos bonos y maximiza tus ingresos semanales! 🚀',
' ',
'*🛵 Motos:*',
'Para los conductores de moto, hay bonos diarios de hasta 💰 *$80,000* realizando hasta 15 viajes. El bono es escalonado, ¡así que cuantos más servicios hagas, mayor será el valor del bono hasta llegar al tope máximo! 🏍️💨',])

const flowcali = addKeyword(['cali']).addAnswer(['*CALI*',
    ' ',
    '*🚗 Nuevos y Activos:*',
    ' ',
'¡Conéctate con Yango y gana hasta 💰 *$640,000* semanales en bonos escalonados! Cuantos más viajes realices, mayor será tu bono, hasta un máximo de 132 viajes. ¡Aprovecha esta oportunidad y maximiza tus ingresos! 🚀',
' ',
'⏸️ Inactivos',
'Si has estado inactivo, también puedes ganar hasta 💰 *$600,000* semanales con bonos escalonados realizando hasta 95 viajes. ¡Conéctate y empieza a ganar nuevamente! 🔥',
' ',
'*🛵 Todos (Motos):*',
'Para los conductores de moto, puedes ganar hasta 💰 *$250,000* semanales realizando hasta 105 viajes. Recuerda que el bono es escalonado, ¡así que mientras más viajes hagas, mayor será el bono que recibas! 🏍️💨',])

const flowbarranquilla = addKeyword(['barranquilla']).addAnswer(['*Barranquilla:*',
' ',
'*🚗 Carros:*',
'Gana hasta 💰 *$600,000* semanales en bonos escalonados realizando hasta 115 viajes. Cuantos más viajes realices, mayor será el bono. ¡Conéctate con Yango y aumenta tus ingresos semanales! 🚀',
' ',
'*🛵 Motos:*',
'Para los conductores de moto, hay bonos de hasta 💰 *$470,000* semanales. Realiza hasta 120 viajes para acceder a estos bonos escalonados. ¡Conéctate y gana más! 🏍️💨',])


const flow1 = addKeyword(['1']).addAnswer(
    [
        'Por favor, comunícate con el área de Servicio al Cliente 📞, lo puedes encontrar en tu app Yango 📲, en la parte inferior de tu perfil 👤.',
     
        
    ],
    null,
    null,
)
.addAnswer(['Su solicitud a sido recibida correctamente',
    '',
    'Para realizar otra solicitud, escribe: *Menú*',
    '📋✨ ¡Estamos aquí para asistirte!',
    '',
    'Para finalizar este proceso, escribe: *Salir*',
    '🚪✋ ¡Gracias por permitirnos asistirte!'], {delay: 5000})


const flow2 = addKeyword(['2']).addAnswer(
    [
        
'Para proceder con el cambio del vehículo 🚗, por favor envíanos la siguiente información 📄:',
'- Nombre completo 📝',
'- Número de documento 📇',
'- Número de teléfono 📞',
'- Ciudad 🌍',
'- Foto de la tarjeta de propiedad del nuevo vehículo 📸',

    ],
    null,
    null,
    
)
.addAnswer(['Su solicitud a sido recibida correctamente',
    '',
    'Su solicitud será resuelta en un lapso de 24 horas. ⏳✨',
    '',
    'Para realizar otra solicitud, escribe: *Menú*',
    '📋✨ ¡Estamos aquí para asistirte!',
    '',
    'Para finalizar este proceso, escribe: *Salir*',
    '🚪✋ ¡Gracias por permitirnos asistirte!'], {delay: 60000})


const flow3 = addKeyword(['3']).addAnswer(
    [
        
        'Para proceder con el cambio del número de teléfono 📞, por favor envíanos la siguiente información 📄:',

        '- Nombre completo 📝',
        '- Número de documento 📇',
        '- Número de teléfono nuevo 📲',
        '- Ciudad 🌍',
    ],
    null,
    null,
   
)
.addAnswer(['Su solicitud a sido recibida correctamente',
    '',
    'Su solicitud será resuelta en un lapso de 24 horas. ⏳✨',
    '',
    'Para realizar otra solicitud, escribe: *Menú*',
    '📋✨ ¡Estamos aquí para asistirte!',
    '',
    'Para finalizar este proceso, escribe: *Salir*',
    '🚪✋ ¡Gracias por permitirnos asistirte!'], {delay: 60000})


const flow4 = addKeyword(['4']).addAnswer(
    [
       'Por favor, selecciona una de las siguientes ciudades 🌍 para ofrecerte la información adecuada 📄:',
       ' ',
       '- *Cali*',
       '- *Medellin*',
       '- *Cucuta*',
       '- *Barranquilla*',
       '- *Bucaramanga*',
    ],
    null,
    null,
    [flowcali, flowcucuta, flowmedellin, flowbarranquilla, flowbucaramanga]
    
)    
.addAnswer(['Su solicitud a sido recibida correctamente',
    '',
    'Para realizar otra solicitud, escribe: *Menú*',
    '📋✨ ¡Estamos aquí para asistirte!',
    '',
   'Para finalizar este proceso, escribe: *Salir*',
    '🚪✋ ¡Gracias por permitirnos asistirte!'], {delay: 60000})


const flow5 = addKeyword(['5']).addAnswer(
    [
        
        'Por favor, comunícate con el área de Servicio al Cliente 📞, lo puedes encontrar en tu app Yango 📲, en la parte inferior de tu perfil 👤.',
    ],
    null,
    null,
   
)
.addAnswer(['Su solicitud a sido recibida correctamente',
    '',
    'Para realizar otra solicitud, escribe: *Menú*',
    '📋✨ ¡Estamos aquí para asistirte!',
    '',
  'Para finalizar este proceso, escribe: *Salir*',
    '🚪✋ ¡Gracias por permitirnos asistirte!'], {delay: 5000})


const flow6 = addKeyword(['6']).addAnswer(
    [
        
        'Para ingresar la información bancaria 🏦 a tu cuenta y recibir tus bonificaciones 💸, dirígete a *tu perfil* de la *app Yango* 📲. Posteriormente, ve a *Información de tu vehículo* 🚗 y luego a *Información para cobros* 💼.', 

        'Agrega tu información y empieza a recibir tus bonificaciones 🎉.',
    ],
    null,
    null,
   
)
.addAnswer(['Su solicitud a sido recibida correctamente',
    '',
    'Para realizar otra solicitud, escribe: *Menú*',
    '📋✨ ¡Estamos aquí para asistirte!',
    '',
   'Para finalizar este proceso, escribe: *Salir*',
    '🚪✋ ¡Gracias por permitirnos asistirte!'], {delay: 5000})


const flow7 = addKeyword(['7']).addAnswer(
    [
        
        'Por favor, comunícate con el área de Servicio al Cliente 📞, lo puedes encontrar en tu app Yango 📲, en la parte inferior de tu perfil 👤.',
    ],
    null,
    null,
   
)
.addAnswer(['Su solicitud a sido recibida correctamente',
    '',
    'Para realizar otra solicitud, escribe: *Menú*',
    '📋✨ ¡Estamos aquí para asistirte!',
    '',
   'Para finalizar este proceso, escribe: *Salir*',
    '🚪✋ ¡Gracias por permitirnos asistirte!'], {delay: 5000})


const flow8 = addKeyword(['8']).addAnswer(
    [
        
        'Para proceder con la verificación de tu pago 💸, por favor envíanos la siguiente información 📄:',

'- Nombre completo 📝',
'- Número de documento 📇',
'- Número de teléfono 📞',
'- Placa de tu vehículo 🚗',
'- Ciudad 🌍',
    ],
    null,
    null,
   
)
.addAnswer(['Su solicitud a sido recibida correctamente',
    '',
    'Su solicitud será resuelta en un lapso de 24 horas. ⏳✨',
    '',
    'Para realizar otra solicitud, escribe: *Menú*',
    '📋✨ ¡Estamos aquí para asistirte!',
    '',
   'Para finalizar este proceso, escribe: *Salir*',
    '🚪✋ ¡Gracias por permitirnos asistirte!'], {delay: 60000})


const flow9 = addKeyword(['9']).addAnswer(
    [
        
        'Para activar tu *cuenta* de la *app Yango* 📲, completa los procesos del área de *Solución de Problemas* 🛠️ que encuentras en tu *perfil de la app* 👤.',
    ],
    null,
    null,
   
)
.addAnswer(['Su solicitud a sido recibida correctamente',
    '',
    'Para realizar otra solicitud, escribe: *Menú*',
    '📋✨ ¡Estamos aquí para asistirte!',
    '',
   'Para finalizar este proceso, escribe: *Salir*',
    '🚪✋ ¡Gracias por permitirnos asistirte!'], {delay: 5000})


const flow10 = addKeyword(['10']).addAnswer(
    [
        
        'Por favor, *escríbenos en un mensaje* 📝 tu *inquietud* ❓ y uno de nuestros asesores te dará *respuesta en unos instantes* ⏱️.',
    ],
    null,
    null,
   
)
.addAnswer(['Su solicitud a sido recibida correctamente',
    '',
    'Su solicitud será resuelta en un lapso de 24 horas. ⏳✨',
    '',
    'Para realizar otra solicitud, escribe: *Menú*',
    '📋✨ ¡Estamos aquí para asistirte!',
    '',
   'Para finalizar este proceso, escribe: *Salir*',
    '🚪✋ ¡Gracias por permitirnos asistirte!'], {delay: 60000})



const flowPrincipal = addKeyword(['Hola', 'Menu', 'Menú', 'ola','buen','dia','tarde','noche'])
    .addAnswer('¡Bienvenid@! 🎉 Gracias por comunicarte con *Yango Tiferet*. 😊 Por favor, elige una opción para poder asistirte mejor:')
    .addAnswer(
        [
            
            '1️⃣ *No me cargan los bonos* 💸 ',
            '2️⃣ *Cambio de vehículo* 🚗', 
            '3️⃣ *Cambio de línea telefónica* 📱',
            '4️⃣ *Información sobre incentivos* 🏆',  
            '5️⃣ *Información de descuentos* 💰',  
            '6️⃣ *Ingresar información bancaria* 🏦',  
            '7️⃣ *Bloqueo de cuenta* 🔒',  
            '8️⃣ *No me llega el pago* 🤑',  
            '9️⃣ *Activación de cuenta* ✅',  
            '🔟 *Otro, ¿cuál?* ❓',
            ' ',
            '¡Estamos aquí para ayudarte! 🤗',
        ],
        null,
        null,
        [flow1, flow2, flow3, flow4, flow5, flow6, flow7, flow8, flow9, flow10]
    )

    
const flowsecundario = addKeyword(['salir']).addAnswer(['¡Gracias por utilizar nuestro chat! 😊💬 Si tienes alguna pregunta o necesitas ayuda, no dudes en decírnoslo. ¡Estamos aquí para ayudarte! 👍'])


main()



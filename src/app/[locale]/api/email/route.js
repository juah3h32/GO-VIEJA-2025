import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    // const { name, phone, email, phone2, city, state, zipcode, message, recaptchaToken } = await req.json();
    const { name, areaCode, phone, phone2, city, state, location, zipcode, message } = await req.json();

    // Verificar el token de reCAPTCHA
    // const recaptchaResponse = await fetch(
    //   `https://www.google.com/recaptcha/api/siteverify`,
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    //   }
    // );

    // const recaptchaData = await recaptchaResponse.json();

    // // Si la verificación falla, devolver un error
    // if (!recaptchaData.success) {
    //   return new Response(
    //     JSON.stringify({ error: 'Fallo en la verificación de reCAPTCHA' }),
    //     { status: 400 }
    //   );
    // }

    // Si la verificación es exitosa, continuar con el envío del correo
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure:true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `Nuevo mensaje de ${name}`,
      text: `
        Nombre: ${name}
        Teléfono: ${phone}
        Mensaje: ${message}
        Telefono Fijo: ${phone2}
        Dirección: ${location}
        Ciudad: ${city}
        Estado: ${state}
        Código Postal: ${zipcode}
        Mensaje: ${message}
      `,
      html: `
        <div style="background-color: #262626; color: #ffffff; padding: 2em; border: 3px solid #fb670b; border-radius: 10px; font-family: Arial, sans-serif; max-width: 600px; margin: auto; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
  
          <div style="text-align: center; margin-bottom: 2em;">
              <img src="https://pixyhub.com/assets/logo_white.png" alt="Logo de Grupo Ortiz" style="max-width: 150px;">
          </div>
          
          <h1 style="text-align: center; color: #ffffff; font-size: 24px; margin-bottom: 1.5em;">Se ha generado una nueva consulta en el sitio web.</h1>
          
          <div style="border-bottom: 1px solid #dddddd; color: #ffffff; padding-bottom: 1em; margin-bottom: 1em;">
              <h2 style="font-size: 18px; margin: 0; color: #ffffff">Datos del Contacto:</h2>
              <p style="margin: 0.5em 0; color: #ffffff">Nombre: <strong>${name}</strong></p>
              <p style="margin: 0.5em 0; color: #ffffff">LADA: <strong>${areaCode}</strong></p>
              <p style="margin: 0.5em 0; color: #ffffff">Teléfono: <strong>${phone}</strong></p>
              <p style="margin: 0.5em 0; color: #ffffff">Teléfono Alternativo: <strong>${phone2}</strong></p>
              <p style="margin: 0.5em 0; color: #ffffff">Ubicación: <strong>${location}</strong></p>
              <p style="margin: 0.5em 0; color: #ffffff">Ciudad: <strong>${city}</strong></p>
              <p style="margin: 0.5em 0; color: #ffffff">Estado: <strong>${state}</strong></p>
              <p style="margin: 0.5em 0; color: #ffffff">Código Postal: <strong>${zipcode}</strong></p>
          </div>
          
          <div>
              <h2 style="font-size: 18px; margin: 0;">Mensaje:</h2>
              <p style="margin: 0.5em 0;"><strong>${message}</strong></p>
          </div>

          <div style="text-align: center; margin-bottom: 2em; width: 100%; padding: 0px;">
              <img src="https://pixyhub.com/assets/emailSlogan.png" alt="Slogan Grupo Ortiz" style="width: 100%">
          </div>
        </div>

      `,
    });

    // Envío exitoso
    return new Response(
      JSON.stringify({ message: 'Correo enviado exitosamente' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al procesar el formulario:', error);

    // Error en el servidor
    return new Response(
      JSON.stringify({ error: 'Error al enviar el correo' }),
      { status: 500 }
    );
  }
}


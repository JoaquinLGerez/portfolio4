// "use server"
import { Resend } from 'resend';
const { RESEND_API_KEY } = process.env;
const resend = new Resend(RESEND_API_KEY);

export const sendEmail = async (formData) => {
  let from = formData.get("senderEmail");
  let msg = formData.get("message");

  // Validar formato de correo electrónico
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!from || !emailRegex.test(from)) {
    return {
      success: false,
      message: 'Formato de email invalido'
    };
  }

  // Validar mensaje
  if (!msg || typeof msg !== "string" || msg.length < 5) {
    return {
      success: false,
      message: 'El campo mensaje debe tener mas de 5 caracteres'
    };
  }

  try {
    resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'joaquinlgerez@gmail.com',
      subject: 'Message from contact form',
      reply_to: from,
      text: msg
    });

    return {
      success: true,
      message: 'Message sent successfully'
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: 'Error sending message'
    };
  }
};

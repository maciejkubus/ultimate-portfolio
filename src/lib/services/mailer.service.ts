import { config } from '$lib/config';
import { createTransport } from 'nodemailer';

class MailerService {

  static async sendMail(content: string) {
    const transporter = createTransport({
      host: config.smtp.host,
      port: config.smtp.port,
      secure: false,
      auth: {
        user: config.smtp.user,
        pass: config.smtp.pass
      }
    });
    await transporter.sendMail({
      from: 'noreply@maciejkubus.usermd.net',
      to: "maciekkubus@gmail.com",
      subject: "Wiadomość z ULTIMATE PORTFOLIO", 
      text: content, 
    });
  }
}

export { MailerService };


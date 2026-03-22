interface ContactContent {
  title: string;
  subtitle: string;
  formName: string;
  formEmail: string;
  formMessage: string;
  buttonText: string;
}

const contactInfo: Record<string, ContactContent> = {
  en: {
    title: "Get in Touch",
    subtitle: "Have a project in mind or just want to say hi? Feel free to reach out!",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    buttonText: "Send Message"
  },
  es: {
    title: "Contacto",
    subtitle: "¿Tienes un proyecto en mente o solo quieres saludar? ¡No dudes en escribirme!",
    formName: "Nombre",
    formEmail: "Correo",
    formMessage: "Mensaje",
    buttonText: "Enviar Mensaje"
  },
  zh: {
    title: "联系我",
    subtitle: "有项目想法或者只想打个招呼？欢迎随时联系！",
    formName: "姓名",
    formEmail: "电子邮件",
    formMessage: "留言内容",
    buttonText: "发送消息"
  }
};

export {
  contactInfo
}

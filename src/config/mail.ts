interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'colocar-email-valido-configurado-na-amazon@tralala.com',
      name: 'Albert da Gobarber',
    },
  },
} as IMailConfig;

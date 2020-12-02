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
  driver: process.env.MAIL_PROVIDER || 'ethereal',

  defaults: {
    from: {
      email: 'anderson@wicked.com.br',
      name: 'Anderson Campos',
    },
  },
} as IMailConfig;

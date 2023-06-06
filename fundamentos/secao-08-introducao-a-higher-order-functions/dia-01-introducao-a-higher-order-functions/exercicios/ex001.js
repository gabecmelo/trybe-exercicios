const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

// Adicione seu código aqui

const mailMessage = (email) => console.log(`O email ${email} esta cadastrado em nosso banco de dados!\n`);

emailListInData.forEach(mailMessage);
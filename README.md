# Recuperação de senha

**RF** // Requisitos funcionais

[ ] - O usuário de poder recuperar sua senha informando o seu e-mail;
[ ] - O usuário deve receber um e-mail com instruções de recuperação de senha;
[ ] - O usuário deve poder resetar sua senha;

**RNF** // Requisitos não funcionais

- Utilizar Mailtrap para testar envios de e-mail em ambiente dev;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN** // Regras de negócio

- O link enviado por e-mail para resetar a senha, deve expirar em 2h;
- O usuário  precisa confirmar a nova senha ao resetar a senha;

# Atualização do perfil

**RF** // Requisitos funcionais

- O usuário deve poder atualizar seu nome, email e senha;

**RN** // Regras de negócio

- O usuário não pode alterar seu e-mail para um e-mail ja existente;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel do prestador

**RF** // Requisitos funcionais
**RNF** // Requisitos não funcionais
**RN** // Regras de negócio

# Agendamento de serviços

**RF** // Requisitos funcionais
**RNF** // Requisitos não funcionais
**RN** // Regras de negócio

# Sistema de gerenciamento de Briefings

**OBS.:** o front **depende** do back para funcionar corretamente, sem o back não será possível realizar as funções principais. [Acesse o repositório do back](https://github.com/710lucas/Briefing-back)

1. [Como rodar](#como-rodar)
   
    1.2. [Com docker](#com-docker)

    1.3. [Sem o docker](#sem-o-docker)

2. [Uso de IAs](#uso-de-ias)

## Como rodar

É possível rodar o projeto tanto com o Docker quanto usando o Node direto no seu computador

### Com Docker

1. Tenha o Docker instalado no seu computador: [Veja aqui como baixar e instalar](https://www.docker.com/get-started/)
2. Clone ou baixe o repositório

    Depois de baixar o docker, você precisa ter o repositório em seu computador, pois ele contem os arquivos essenciais para que o docker consiga rodar o projeto

    Para fazer isso, basta executar o comando `git clone https://github.com/710lucas/Briefing-front.git` ou `git clone git@github.com:710lucas/Briefing-front.git`
   
    Caso você não possua o github baixado em seu computador, basta licar [neste link](https://github.com/710lucas/Briefing-front/archive/refs/heads/main.zip), ou clicar no botão verde "Code" e depois "Download zip", depois extraia a pasta e continue

3. Executar o docker

    Entre na pasta que você acabou de clonar/baixar e abra um terminal

    Use o comando `docker compose up` e o programa estará funcionando, uma mensagem irá aparecer no terminal falando que o front está rodando na porta 80, ou outra porta, caso seja informada nas configurações

    Acesse [localhost](http://localhost:80)

### Sem o docker

1. Baixe e configure o [NodeJS](https://nodejs.org/en) no seu computador
2. Clone ou baixe o repositório

    Depois de baixar o docker, você precisa ter o repositório em seu computador, pois ele contem os arquivos essenciais para que o docker consiga rodar o projeto

    Para fazer isso, basta executar o comando `git clone https://github.com/710lucas/Briefing-front.git` ou `git clone git@github.com:710lucas/Briefing-front.git`
   
    Caso você não possua o github baixado em seu computador, basta licar [neste link](https://github.com/710lucas/Briefing-front/archive/refs/heads/main.zip), ou clicar no botão verde "Code" e depois "Download zip", depois extraia a pasta e continue

3. Instale as dependencias

    Entre na pasta que você acabou de clonar/baixar e abra um terminal
    Em seguida rode o comando `npm install`

4. Rodar o programa

   Ainda no terminal, execute o comando `npm run dev`

-----

## Uso de IAs

Para a realização deste projeto, foi utilizado o ChatGPT 3.5, o uso do ChatGPT foi feito para:

1. Compreensão de problemas e auxilio em sua resolução:

    Quando havia algum problema que estava tomando mais tempo que o normal, o uso do ChatGPT para identificar o problema foi bastante importante, além de agilizar bastante o processo. Porém, nenhum problema foi resolvido 100% pelo ChatGPT, principalmente pelo fato de que várias respostas não se encaixavam no contexto geral do aplicativo, gerando mais problemas do que resolvendo.

2. Dúvidas em relação à novas áreas do conhecimento:

   Alguns dos critérios de entrega foram completamente novos para mim, principalmente a parte de testes, tanto no back, quanto no front. Sendo assim, o uso do ChatGPT para gerar exemplos de testes, nos quais eu pude editar o código e compreender antes de implementar no projeto, agilizou bastante a compreensão de algo completamente novo. Além da geração de arquivos de configuração, que foram usados como exemplos e me ajudaram bastante a entender como configurar o projeto especificamente para minhas necessidades.

3. Geração de textos de exemplos:

  Foram gerados exemplos de descrições de Briefings usando o ChatGPT, ajudando bastante a testar o design do site e adapta-lo a exemplos mais próximos da realidade

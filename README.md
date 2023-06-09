Desafio técnico desenvolvido para vaga de desenvolvedor crawler back end.

Aplicação disponível em: [http://ec2-52-67-2-49.sa-east-1.compute.amazonaws.com:3000](http://ec2-52-67-2-49.sa-east-1.compute.amazonaws.com:3000)

Para rodar a aplicação localmente:

```bash
yarn start:dev
```

Endpoint:

```bash
/search
```

GET:

    Query:

    `teamName (string)` - Nome do time a ser buscado

Busca pelo próximo jogo do time especificado, retornando data e horário do evento, time adversário e odds (vitória, empate e derrota).

Busca por cruzeiro quando o Parâmetro não é especificado

Documentação no formato OpenAPI disponível no endpoint `/docs`

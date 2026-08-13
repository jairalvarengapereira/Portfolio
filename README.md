# Portfólio - Jair Alvarenga Pereira

Portfólio profissional desenvolvido com Next.js, Tailwind CSS e Framer Motion.

## Tecnologias Utilizadas

- **Next.js** - Framework React para produção
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Biblioteca de animações
- **TypeScript** - JavaScript com tipagem estática
- **React Icons** - Ícones React

## Pré-requisitos

- Node.js 18.0 ou superior
- npm ou yarn

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/jairap/portfolio-nextjs.git
```

2. Navegue até o diretório do projeto:
```bash
cd portfolio-nextjs
```

3. Instale as dependências:
```bash
npm install
# ou
yarn install
```

4. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

5. Acesse o projeto em [http://localhost:3000](http://localhost:3000)

## Estrutura do Projeto

```
portfolio-nextjs/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Animations.tsx
│   ├── Contato.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Projetos.tsx
│   ├── Sobre.tsx
│   └── Tecnologias.tsx
├── public/
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Funcionalidades

- Design responsivo e moderno
- Animações suaves com Framer Motion
- Integração com API do GitHub para exibir projetos
- Formulário de contato funcional
- Navegação suave entre seções
- Header fixo com efeito de scroll
- Barra de progresso de scroll

## Personalização

### Alterar informações pessoais

Edite os componentes na pasta `components/` para atualizar:

- Nome e descrição no Hero
- Informações no Sobre
- Tecnologias utilizadas
- Projetos do GitHub
- Informações de contato

### Alterar cores

As cores são definidas no arquivo `tailwind.config.js`. A paleta principal usa tons de azul:

```javascript
colors: {
  primary: {
    50: '#f0f4ff',
    // ...
    900: '#364fc7',
  },
}
```

## Deploy

### Vercel (Recomendado)

1. Crie uma conta na [Vercel](https://vercel.com)
2. Conecte seu repositório GitHub
3. Configure o projeto e faça deploy

### Outras opções

- **Netlify**: Suporte nativo para Next.js
- **AWS Amplify**: Deploy na nuvem AWS
- **Docker**: Containerização para deploy personalizado

## Licença

Este projeto é de uso pessoal. Todos os direitos reservados.

## Contato

- **E-mail**: jairap.dev@gmail.com
- **LinkedIn**: [Jair Alvarenga Pereira](https://www.linkedin.com/in/jairap)
- **GitHub**: [jairap](https://github.com/jairap)

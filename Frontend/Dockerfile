# Use a imagem base do Node.js
FROM node:21-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de dependência (package.json e package-lock.json) para o contêiner
COPY package.json ./ 
COPY package-lock.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código da aplicação
COPY . . 

# Cria a versão de produção da aplicação React vite
RUN npm run build


# Expor a porta usada pelo React (geralmente é a 80, se for padrão)
EXPOSE $PORT


# Serve a versão de produção (no caso, um servidor estático serve a pasta de build)
CMD ["npx", "serve", "-s", "dist", "-l", $PORT]

 
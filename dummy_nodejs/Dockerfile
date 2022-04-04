FROM node:12.18.1

EXPOSE 3000

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
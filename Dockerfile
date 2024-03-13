FROM node

WORKDIR /app

COPY . /app/

EXPOSE 24

RUN npm i

CMD ["node", "server.js"]





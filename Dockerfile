FROM node:18-alpine

ADD . /app
WORKDIR /app

RUN npm i

EXPOSE 42683
CMD npm start
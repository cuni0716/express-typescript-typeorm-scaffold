FROM mhart/alpine-node:latest

RUN mkdir /app
WORKDIR /app

COPY package.json /app
COPY .env /app

RUN node -v
RUN npm install

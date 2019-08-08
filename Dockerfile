FROM node:10.16.0

WORKDIR /usr/app
RUN npm install -g yarn

RUN  apt-get update

RUN yarn add global nodemon
RUN yarn add global -D \
  @nestjs/cli

COPY package*.json ./

COPY . /usr/app

RUN yarn install

ENV PORT=5000

RUN yarn build

EXPOSE 5000

CMD [ "npm", "run", "start:prod" ]
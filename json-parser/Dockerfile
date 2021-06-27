FROM node:alpine

WORKDIR /usrs/app

COPY package.json .
RUN npm i
RUN npm run build
COPY build ./build

RUN npm prune --production

CMD ["npm", "start"]
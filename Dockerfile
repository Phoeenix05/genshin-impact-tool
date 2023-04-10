FROM node:alpine3.17

WORKDIR /usr/app

COPY pnpm-lock.yaml package.json ./

RUN npm i -g pnpm
RUN pnpm i

COPY . /usr/app/

EXPOSE 3000

# CMD [ "pnpm", "dev" ]
# syntax=docker/dockerfile:1
FROM node:14-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
RUN yarn run build
RUN yarn start
CMD [ "npx", "serve", "build" ]
EXPOSE 3000
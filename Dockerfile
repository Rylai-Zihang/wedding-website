FROM node:14-buster-slim
WORKDIR /usr/src/app/wedding-website
COPY . .
RUN yarn
EXPOSE 3000
CMD yarn start
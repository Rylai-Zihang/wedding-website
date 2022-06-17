FROM node:14-buster-slim
WORKDIR /usr/src/app/wedding-website
COPY . .
RUN yarn
CMD yarn build
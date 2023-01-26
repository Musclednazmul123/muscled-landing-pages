FROM node:16.12.0-buster
WORKDIR /usr/src/nextapp
COPY package.json ./
RUN npm install -g yarn --force
RUN yarn
COPY . ./
EXPOSE 5000
RUN yarn build
CMD ["yarn","start"]

## build image dari image yang sudah ada
FROM node:15.4-alpine3.11

##
WORKDIR /usr/src/app

##
COPY package*.json ./

##
RUN npm install

##
COPY . .

##
EXPOSE 3300

##
# CMD ["node", "app.js"]
CMD [ "npm", "start" ]

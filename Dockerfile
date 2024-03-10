FROM node:20

RUN mkdir -p /home/app

COPY package*.json ./
COPY . ./
RUN npm i 

COPY . /home/app

EXPOSE 80

CMD ["node", "/home/app/index.js"]

FROM node:20-alpine3.18

WORKDIR /app

COPY package.json package-lock.json .

RUN npm install


COPY . . 


RUN npm run build 
#tail -f /dev/null

#CMD ["npm","start"]











































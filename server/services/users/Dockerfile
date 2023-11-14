FROM node:18.17.0

WORKDIR /users

ENV PORT=4001

COPY package.json package-lock.json /app/

RUN npm install && npm cache clean --force

RUN npm install -g nodemon

COPY ./ ./

CMD ["npm", "run", "start"]
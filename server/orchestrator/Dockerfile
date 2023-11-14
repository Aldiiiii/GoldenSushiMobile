FROM node:18.17.0

WORKDIR /orchestrator

ENV PORT=4000

COPY package.json package-lock.json /orchestrator/

RUN npm install && npm cache clean --force

RUN npm install -g nodemon

COPY ./ ./

CMD ["npm", "run", "start"]
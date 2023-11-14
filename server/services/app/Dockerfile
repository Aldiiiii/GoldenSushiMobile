FROM node:18.17.0

WORKDIR /app

ENV NODE_ENV="production"
ENV PORT=4002
ENV DATABASE_URL="postgresql://postgres:S6nXAa2qWMFRBzG3@db.ftvhmjrkjmznpmzgdnnt.supabase.co:5432/postgres"

COPY package.json package-lock.json /app/

RUN npm install && npm cache clean --force

RUN npm install -g nodemon

COPY ./ ./

RUN npx sequelize-cli db:migrate --env production 

RUN npx sequelize-cli db:seed:all --env production

CMD ["npm", "run", "start"]
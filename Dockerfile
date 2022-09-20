FROM node:latest
WORKDIR /messenger
COPY . .
RUN npm i
EXPOSE 3000
CMD npm run start
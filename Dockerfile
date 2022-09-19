FROM ubuntu:22.04
ARG DEBIAN_FRONTEND=noninteractive
RUN apt update && apt install -y nodejs && apt install -y npm
COPY dist ./dist/
COPY ./src/server.js
RUN npm i
EXPOSE 3000
CMD node ./src/server.js

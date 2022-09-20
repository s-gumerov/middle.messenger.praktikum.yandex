FROM ubuntu:22.04
WORKDIR /messenger
ARG DEBIAN_FRONTEND=noninteractive
RUN apt update && apt install -y nodejs && apt install -y npm
COPY . .
RUN npm i
EXPOSE 3000
CMD npm run start
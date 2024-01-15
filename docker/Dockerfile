FROM node:20.11.0-alpine3.19

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

# RUN mkdir /atlas
# WORKDIR /atlas

# COPY . /atlas
# ENV NODE_OPTIONS="--max-old-space-size=4096 --openssl-legacy-provider"
# ENV GENERATE_SOURCEMAP=false

COPY . .

EXPOSE 80

RUN npm install --legacy-peer-deps
 
RUN npm start
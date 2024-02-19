FROM node:20.11.0-alpine3.19

RUN mkdir /atlas
WORKDIR /atlas

COPY . /atlas
#ENV NODE_OPTIONS="--max-old-space-size=4096 --openssl-legacy-provider"
ENV GENERATE_SOURCEMAP=false

EXPOSE 80

RUN npm install --legacy-peer-deps

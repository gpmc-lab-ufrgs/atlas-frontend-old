FROM node:18-buster

RUN mkdir /atlas
WORKDIR /atlas

COPY . /atlas
ENV NODE_OPTIONS="--max-old-space-size=8192 --openssl-legacy-provider"
ENV GENERATE_SOURCEMAP=false

RUN yarn install

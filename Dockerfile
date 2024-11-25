FROM node:alpine
 
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh
 
RUN mkdir -p /usr/src/node-app && chown -R node:node /usr/src/node-app
 
WORKDIR /usr/src/node-app
 
COPY . ./
 
USER node
 
 
COPY --chown=node:node . .
 
RUN npm install
 
EXPOSE 5003
 
CMD [ "node", "index.js" ]
 

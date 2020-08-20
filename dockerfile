#============= DesPessoalApp UI
FROM node:latest as node
RUN echo Starting DesPessoalApp-ui
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY ./ /app/
ARG env=prod
RUN npm run build

FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/DesPessoalApp /usr/share/nginx/html


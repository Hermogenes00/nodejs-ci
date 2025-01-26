FROM node:18-alpine

WORKDIR /app

COPY . .

# #Enable another containers to access this one from port 3000
EXPOSE 3000

RUN npm install jest -g
RUN npm install

ENTRYPOINT [ "node","index.js" ]
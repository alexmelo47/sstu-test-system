FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --force --save-dev @babel/plugin-proposal-private-property-in-object
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]

FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies pulling both package and package-lock
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]
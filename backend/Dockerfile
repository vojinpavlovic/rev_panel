FROM node:16

# Create working directory
WORKDIR /usr/src/app

# Get dependencies
COPY package*.json ./

# Install dependencies for production
RUN npm i

# Install dependencies for development
# RUN npm install 

# Bundle app source
COPY . .

# Expose to 8080
EXPOSE 3001

# Install Nodemon
RUN npm run build

# Run the application
CMD [ "npm", "run", "start" ]




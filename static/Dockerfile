FROM node:16

# Create working directory
WORKDIR /usr/src/app

# Get dependencies
COPY package*.json ./

# Install dependencies for production
RUN npm ci --only=production

# Install dependencies for development
# RUN npm install 

# Bundle app source
COPY . .

# Expose to 8080
EXPOSE 3000

# Run the application
CMD [ "node", "server.js" ]




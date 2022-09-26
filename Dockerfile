# Node version
FROM node:latest

# Workdir
WORKDIR /src

# Prepare for the install
COPY package.json ./
COPY tsconfig.json ./
COPY src ./src

# Install 
RUN npm install

# Expose the port
EXPOSE 3001

# Run the app
CMD ["npm","run","dev"]
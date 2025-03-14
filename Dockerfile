# Use an official Node.js 22 image as the base image
FROM node:22

# Set '/app' as the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies based on package-lock.json
RUN npm install

# Copy the rest of the application code
COPY . .

# Run the tests
CMD ["npm", "run", "test"]
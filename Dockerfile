FROM node:18-alpine
#This command sets the working directory for any commands you add in the Dockerfile.
# So, while building the image, the commands will be executed in this directory.
WORKDIR  /app

COPY package.json .

RUN npm install --legacy-peer-deps
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]



#These instructions will copy the files we need into the working directory.
# We only need the public and src folders (where your code resides),
# and the package.json file to run the application.
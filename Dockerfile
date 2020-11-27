# FROM node:alpine

# RUN apk add --no-cache \
#     autoconf \
#     automake \
#     bash \
#     g++ \
#     libc6-compat \
#     libjpeg-turbo-dev \
#     libpng-dev \
#     make \
#     nasm

# # The minimal baseline we need for Nodejs
# WORKDIR /usr/src/app
# # COPY the package.json file, update any deps and install them
# COPY package.json . 
# # RUN npm update 
# # RUN npm install --silent --no-cache --registry=https://registry.npm.taobao.org
# RUN npm install --silent --no-cache
# # copy the whole source folder(the dir is relative to the Dockerfile COPY . . 
# COPY . .
# CMD [ "npm", "run", "start" ]


FROM node:12-buster
RUN yarn global add gatsby-cli
WORKDIR /app
ADD . ./
RUN yarn
RUN gatsby develop -H 0.0.0.0


# FROM gatsbyjs/gatsby:onbuild as build

# FROM gatsbyjs/gatsby
# COPY --from=build /app/public /pub
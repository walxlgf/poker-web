
FROM hello-world:install
COPY . .
RUN pwd
RUN npm build
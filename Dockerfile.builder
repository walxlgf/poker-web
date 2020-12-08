
FROM hello-world:install
COPY . .
RUN pwd
RUN gatsby build
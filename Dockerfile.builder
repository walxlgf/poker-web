
FROM poker-web:install
COPY . .
RUN pwd
RUN npm build
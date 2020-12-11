
FROM poker-web:install
COPY . .
# CMD ["gatsby","build"]
# CMD ["npm","run","build:incremental"]
RUN ["npm","run","build:incremental"]


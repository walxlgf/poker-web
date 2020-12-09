
FROM poker-web:install
COPY . .
CMD ["npm","run","build"]

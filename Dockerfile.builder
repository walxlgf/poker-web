
FROM poker-web:install
COPY . .
CMD ["gatsby","build"]

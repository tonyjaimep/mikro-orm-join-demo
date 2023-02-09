#### Steps to set up environment

```sh
docker compose up -d
yarn run migrateAndSeed
yarn start:dev
```

#### Testing output

HTTP GET:

```
http://localhost:3000/authors/with-book-comments-by-user/88888888-8888-8888-8888-888888888888
```

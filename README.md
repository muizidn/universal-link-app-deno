
# universal-link-app-deno

## Buildpack

https://github.com/chibat/heroku-buildpack-deno

## Running Locally
Make sure you have [Deno](https://deno.land/) and the [Heroku CLI](https://cli.heroku.com/) installed.
```
git clone https://github.com/muizidn/universal-link-app-deno.git
cd universal-link-app-deno
./app.ts
```
Your app should now be running on [localhost:8080](http://localhost:8080/).

## Deploying to Heroku
```
heroku create --buildpack https://github.com/chibat/heroku-buildpack-deno.git
git push heroku main
heroku open
```


# Game dev on JavaScript (frontend + backend, dev stage, desktop version)

This is dev branch of the final RSS-2019 project. 

## What this app is intended for?

The initial task was: build game web-app for children using only JavaScript (frontend) and nodejs (backend). 
MongoDB was used as a database for storing users and their scores.

### Game rules

All information related to this game can be found on the main page of the app (index.html)

### Screenshots

These are some screenshots of an active window:

![The main battle window](https://imgur.com/0C8WoRl)
![Modal dialog](https://imgur.com/L3T2Gja)
![Task "Listening"](https://imgur.com/lF2DbVQ)
![Task "Ordering"](https://imgur.com/xyyDrfn)
![Task "Translation"](https://imgur.com/ZVnte1W)
![Task "Biology"](https://imgur.com/zzVGgZr)

## Run locally

1. Set some environment variables (username and password) for access to the MongoDB database.

```bash
export MONGODB_USER="your username"
export MONGODB_PASS="your password"
```

Lately those environement variables will be deleted.

2. From project directory start up backend by running `docker-compose up`:

```bash
docker-compose up
```

Backend part of the app is now running on http://127.0.0.1:4000

3. For the frontend part of the app a bundle must be built via webpack:

```bash
npm build
```

The "distribution" code is now located in `./dist`. Open `index.html` file in `./dist` directory and load it in the browser (e.g. via `Live Server`).
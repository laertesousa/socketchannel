# Socket Channel

## Installation

`npm install`

## Running

`npm start` or `npm run dev`

## Sample Requests

### Create Channel

``` Bash
curl --location --request POST 'http://localhost:3000/channels' \
--header 'Content-Type: application/json' \
--data-raw '{
    "channel": {
        "name": "test",
        "url": "https://www.test.com",
        "accessToken": "12345abc"
    }
}'
```

### Create Event

``` Bash
curl --location --request POST 'http://localhost:3000/events' \
--header 'Content-Type: application/json' \
--data-raw '{
    "event": {
        "channelName": "test",
        "data": { "shouldUpdate": true }
    }
}'
```

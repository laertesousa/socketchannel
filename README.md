# Socket Channel

## Installation

`npm install`

## Running

`npm start` or `npm run dev`

## Sample Requests

### Create Channel

``` Bash
curl --location --request POST 'http://localhost:3000/rooms' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "live-orders-1545",
    "accessToken": "1"
}'
```

### Create Event

``` Bash
curl --location --request POST 'http://localhost:3000/events' \
--header 'Content-Type: application/json' \
--data-raw '{
    "roomName": "live-orders-1545",
    "channel": "new-orders",
    "data": { "shouldUpdate": true }
}'
```

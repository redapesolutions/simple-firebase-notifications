# simple-firebase-notifications

### Get Started

1. Clone this repo
2. npm install
3. Fill in your firebase keys in:
  - firebase-messaging-sw.js
  - notification.js
4. node server.js
5. Open your browser to localhost:3000
6. Upon opening your browser, the service worker should have installed and automatically sent your browser token to the server. You will need the token to send notifications to your browser


### Sending Notifications

1. curl from your terminal:
```
curl -X POST --header "Authorization: key=" --Header "Content-Type:application/json" https://fcm.googleapis.com/fcm/send -d "{\"to\":\"\",\"data\":{\"notification\":{\"body\":\"Are you coming to our party?\",\"title\":\"This is a tester tester\",\"confirm\":\"https://developers.google.com/web/\",\"decline\":\"https://www.yahoo.com/\"}},\"priority\":10}"
```
  - making sure to enter your authorization key in the field of 'Authorization: key=' and your browser token in the 'to' field
  - to ensure your data is passed through, ensure your body looks like:
```
  "{
      "to": "", //browser token here
      "data": {
        "notification": {
          "body": "Are you coming to our party?",
          "title": "This is a tester tester".
          "confirm": "https://developers.google.com/web/",
          "decline": "https://www.yahoo.com/"
        }
      },
      "priority": 10
  }"
```

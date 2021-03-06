const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.payments = functions.https.onRequest((request, response) => {
  functions.logger.info("Fetching Payments", {structuredData: true});
  response.json({
    "repayments": [
      {
        "date": "2020-09-03T00:00:00+10:00",
        "type": "PENDING",
        "description": "Lorem ipsum dolor",
        "amount": 10.50
      },
      {
        "date": "2020-09-01T00:00:00+10:00",
        "type": "FAILED",
        "description": "Quisque sodales lorem",
        "amount": 1.44
      },
      {
        "date": "2020-08-28T00:12:40+10:00",
        "type": "PROCESSED",
        "description": "Sed congue velit vel fringilla",
        "amount": 72.56
      },
      {
        "date": "2020-08-28T00:00:00+10:00",
        "type": "FAILED",
        "description": "Aenean elementum interdum",
        "amount": 0.45
      },
      {
        "date": "2020-08-27T15:40:22+10:00",
        "type": "PENDING",
        "description": "Maecenas aliquet",
        "amount": 102
      },
      {
        "date": "2020-08-27T11:42:10+10:00",
        "type": "PROCESSED",
        "description": "Praesent urna elit",
        "amount": 250
      },
      {
        "date": "2020-08-26T10:01:10+10:00",
        "type": "PROCESSED",
        "description": "Phasellus accumsan vehicula",
        "amount": 12.50
      },
      {
        "date": "2020-08-26T09:00:10+10:00",
        "type": "PROCESSED",
        "description": "Nam sollicitudin",
        "amount": 9.10
      }
    ]
  });
});

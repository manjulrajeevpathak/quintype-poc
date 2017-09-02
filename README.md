Codebase for FÜBER

The code consists mailnly 3 APIs

1. /api/v1/stopTrip

    Request JSON - 

    {
    "carName" : "car1"
    }

2. /api/v1/bookCab

    Request JSON - 

    {
    "currentLocation" : {
      "long" : "1",
      "latt" : "2"
    },
    "dropLocation" : {
      "long" : "1",
      "latt" : "9"
    },
    "wantRed" : "true"
    }

3. /api/v1/getCars

Steps to run the server-

1. NPM INSTALL
2. NODE server.js

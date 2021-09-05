# Online/Offline Budget Tracker

This project is an application that allows a user to create and track a budget. The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.

Offline Functionality:

- Enter deposits offline
- Enter expenses offline

When brought back online:

- Offline entries should be added to tracker.

---

[View deployed Heroku app here]()
- [Installation](#install)
- [Usage](#usage)

## User Story

AS AN avid traveller
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am traveling

## Business Context

Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime is even more important. Having offline functionality is paramount to our applications success.

## Install

Clone project
Run the following line of code in your terminal to install all the needed packages:

```
npm i
```

## Usage

Once all the packages have been installed, open terminal and run the following code in command line :

```
node server.js
```

This application runs on localhost:3000 open url to begin using Budget Tracker app.

## Built With

- HTML
- CSS
- Bootstrap
- JavaScript
- Node.js
  - express
  - mongoose
  - morgan
  - compression
  - lite-server

## View

![Shot-3]()
![Shot-1]()
![Shot-2]()

### Credits
Frontend starting files provided © 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

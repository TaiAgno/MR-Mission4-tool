# Mission 4 - the tool

## Description

The task given was to build a CLI tool to seed and delete data to and from MongoDB.
This CLI program contains commands to seed the database using sample data contained in its package.
It is also possible to:

Add individual entries to the database.

List all documents container in the database.

Delete a document providing its unique ID


The front end part of this project, which integrated the databse to the API, is in this repository: https://github.com/TaiAgno/MR-Mission4


SELF-DISCLAIMER

I finally took upon myself the task of cleaning the code and leaving only what is necessary - I feel so much lighter now!

## Getting Started

### Dependencies

* Node
* ES Modules
* Mongoose
* Commander
* Inquirer

### Installing

* npm install mongoose commander inquirer esm
* npm link

### Executing program

* Open your CLI tool of choice and run the program utilising 'cardb'
* To seed with sample data: cardb seed
* To add an individual document to the DB: cardb add
* To list all documents of the DB: cardb list
* To delete a document from the DB: cardb remove <_id>

### Testing

* No unit tests added at this stage.

### Errors

* No errors identified up to this stage.

## Review

Reviews of any kind will be highly appreciated.

Please make a pull request and review the code adding your comments.

## Author

Tai Agnoletto

Group 1, Dev Team, Mission Ready (October 2023 intake)
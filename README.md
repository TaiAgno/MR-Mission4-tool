# Mission 4 - the tool

## Description

The task given was to build a CLI tool to seed and delete data to and from MongoDB.
This CLI program contains commands to seed the database using sample data contained in its package.
It is also possible to:

Add individual entries to the database.

List all documents container in the database.

Delete a document providing its unique ID


STILL TO BE DONE: Link the database created to the API build for M2, to retrieve data from the database according to a certain search criteria.


SELF-DISCLAIMER

Unavailable.

## Getting Started

### Dependencies

* Node
* ES Modules
* Mongoose
* Commander
* Inquirer

### Installing

* ?npm install mongoose commander inquirer esm?
* npm link

### Executing program

* Open your favorite CLI tool and run the program utilising 'cardb'
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
const fs = require("fs");
const data10 = require("./data10");
const yargs = require("yargs");


yargs.command({
    command: "add",
    describe: "Add a person's data",
    builder: {
        id: {
            describe: "ID of the person",
            demandOption: true,
            type: "string"
        },
        fname: {
            describe: "First name of the person",
            demandOption: true,
            type: "string"
        },
        lname: {
            describe: "Last name of the person",
            demandOption: true,
            type: "string"
        },
        age: {
            describe: "Age of the person",
            demandOption: true,
            type: "number"
        },
        city: {
            describe: "City of the person",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        data10.addPerson(x.id, x.fname, x.lname, x.age, x.city);
    }
});


yargs.command({
    command: "viewAll",
    describe: "View all people",
    handler: () => {
        data10.viewAllPeople();
    }
});


yargs.command({
    command: "view",
    describe: "View a specific person by ID",
    builder: {
        id: {
            describe: "ID of the person",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        data10.viewPerson(x.id);
    }
});


yargs.command({
    command: "deleteAll",
    describe: "Delete all people",
    handler: () => {
        data10.deleteAllPeople();
    }
});


yargs.command({
    command: "delete",
    describe: "Delete a specific person by ID",
    builder: {
        id: {
            describe: "ID of the person",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        data10.deletePerson(x.id);
    }
});


yargs.parse();

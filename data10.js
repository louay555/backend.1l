const fs = require("fs");

const addPerson = (id, fname, lname, age, city) => {
    const allData = loadInfo();

    allData.push({
        id: id,
        fname: fname,
        lname: lname,
        age: age,
        city: city
    });

    saveAllData(allData);
    console.log(`Person with ID ${id} added successfully.`);
};


const loadInfo = () => {
    try {
        const dataJson = fs.readFileSync("data10.json").toString();
        return JSON.parse(dataJson);
    } catch (error) {
        return []; 
    }
};


const saveAllData = (allData) => {
    const saveAllDataJson = JSON.stringify(allData, null, 2);
    fs.writeFileSync("data10.json", saveAllDataJson);
};


const viewAllPeople = () => {
    const allData = loadInfo();
    if (allData.length === 0) {
        console.log("No people found.");
    } else {
        console.log("All People Data:");
        console.log(allData);
    }
};

const viewPerson = (id) => {
    const allData = loadInfo();
    const person = allData.find((p) => p.id === id);

    if (person) {
        console.log("Person Data:", person);
    } else {
        console.log(`Person with ID ${id} not found.`);
    }
};


const deleteAllPeople = () => {
    saveAllData([]);
    console.log("All people have been deleted.");
};


const deletePerson = (id) => {
    const allData = loadInfo();
    const newData = allData.filter((p) => p.id !== id);

    if (newData.length < allData.length) {
        saveAllData(newData);
        console.log(`Person with ID ${id} has been deleted.`);
    } else {
        console.log(`Person with ID ${id} not found.`);
    }
};

module.exports = {
    addPerson,
    viewAllPeople,
    viewPerson,
    deleteAllPeople,
    deletePerson
};

import React from "react";
import logo from "./logo.svg";
import "./App.css";

let student: string = "sami";
let age: number = 18;
let isSmart: boolean = true;
let students: string[] = ["joe", "biden", "harris"];
let fees: number[] = [12, 45, 86, 32];

interface Person {
    name: string;
    job: string;
    age?: number;
    location?: string | number;
}
const person: Person = {
    name: "Sami",
    job: "Jobless",
    location: 54,
};

const handleAddUser = (
    firstName: string,
    age: number,
    address: string
): void => {
    console.log(firstName, age, address);
};

function App() {
    return <div className="App"></div>;
}

export default App;

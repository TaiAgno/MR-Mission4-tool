#!/usr/bin/env node


// all packages and dependencies imported
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const program = require('commander');

import { addCar, removeCar, listCars, seedCars } from './index.js';
import inquirer from 'inquirer';

const prompt = inquirer.createPromptModule();


// prompt questions to add car individually
const questions = [
    {
        type: 'input',
        name: 'tag',
        message: 'Car Tag'
    },
    {
        type: 'input',
        name: 'make',
        message: 'Car Make'
    },
    {
        type: 'input',
        name: 'model',
        message: 'Car Model'
    },
    {
        type: 'input',
        name: 'year',
        message: 'Car Year'
    },
    {
        type: 'input',
        name: 'image',
        message: 'URL for car image'
    },
    {
        type: 'input',
        name: 'url',
        message: 'URL for car page'
    }
];

// version controlled tool
program
    .version('1.0.0')
    .description('Client Management System')

// command to add cars
program    
    .command('add')
    .alias('a')
    .description('Add a car')
    .action(() => {
        prompt(questions).then(answers => addCar(answers));
    })

 // command to remove car by id
program
    .command('remove <_id>')
    .alias('r')
    .description('Remove a car')
    .action(_id => removeCar(_id));

// command to list all cars
program
    .command('list')
    .alias('l')
    .description('List all cars')
    .action(() => listCars());

// command to seed database with cars sample data
program
    .command('seed')
    .alias('s') 
    .description('Seed cars')
    .action(() => seedCars());

program.parse(process.argv);
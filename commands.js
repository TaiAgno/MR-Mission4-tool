#!/usr/bin/env node

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const program = require('commander');

import { addCar, removeCar, listCars, seedCars } from './index.js';
import inquirer from 'inquirer';

const prompt = inquirer.createPromptModule();

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

program
    .version('1.0.0')
    .description('Client Management System')

program    
    .command('add')
    .alias('a')
    .description('Add a car')
    .action(() => {
        prompt(questions).then(answers => addCar(answers));
    })

program
    .command('remove <_id>')
    .alias('r')
    .description('Remove a car')
    .action(_id => removeCar(_id));

program
    .command('list')
    .alias('l')
    .description('List all cars')
    .action(() => listCars());

program
    .command('seed')
    .alias('s') 
    .description('Seed cars')
    .action(() => seedCars());

program.parse(process.argv);
# E-Commerce Back-End / API


## Description

This e-commerce back-end and API was built for the module 13 homework challenge for the Coding Bootcamp at UNC Chapel Hill. 

It utilizes a SQL database with seeded data, Sequelize models and CRUD operations, and Express router methods to add, update, edit, and delete records from the database via the API.


## Installation

To load this program and use it on your local computer, first clone this GitHub repository into an empty directory on your local machine.


## Usage

After cloning the repository, follow these steps to first create the database, then populate it with seed data, and finally test the routes and methods using the Insomnia app:

1 - Open a terminal window from the local repository directory, and type "npm i" to install the necessary node modules.

2 - Configure a .ENV file with credentials for your local instance of MySQL.

3 - Run the following command to open the MySQL shell:
`mysql -u root -p`

4 - To create the database, type the following, then hit Enter:
`SOURCE db/schema.sql`

5 - Type "quit" to exit the MySql shell.

6 - In the terminal, to seed the database, type the following and then hit Enter:
`npm run seed`

7 - Now, to run the API server, type the following into the terminal and hit Enter"
`npm start`

8 - Your API server is now listening, so you can open the Insomnia app and test the various API routes, as shown in the walkthrough video linked below.

## Appearance

The following walkthrough video shows the functionality of the API and back-end:

https://drive.google.com/file/d/1NtF_1eTjG1yj-E-qxBYOIV8pxX4y0cCc/view


## License

MIT License

Copyright (c) 2023 Peej D

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

# E-Commerce Database
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
6. [License](#license)
7. [Questions](#questions)

## Description <a name="description"></a>
An Express.js application for accessing a database of products for an e-commerce company. The application utilizes Express.js and Sequelize, and can be used to carry out CRUD operations on categories of products, individual products, and product description tags.

## Installation <a name="installation"></a>
To install the application, first clone the repository. Now enter your user and password in the ".env.EXAMPLE" file, and rename it to just ".env". The .env file is ignored by git, so your user information is safe from commits. In your command line, open MySQL and run "source db/schema.sql;" to create the database. If you wish to use the stock seed data, next you'll want to run "npm run seed".
Here is a video showing these steps:
    [![]()](https://drive.google.com/file/d/1zcKEurRV-oqHyss6bcRCUv5Ge5uOxW42/view)

## Usage <a name="usage"></a>
To start the application, run "npm start" in the terminal. It will log when it is up and running. Now navigate to carry out CRUD operations, navigate to Insomnia and input the address "http://localhost:3001". If you wish to access categories, you can carry out GET, POST, PUT, and DELETE requests at /api/categories, and similarly for products at /api/products and tags at /api/tags.

## License <a name="license"></a>
This application uses the MIT license.

## Questions <a name="questions"><a>
My GitHub can be found at [GitHub.com](https://github.com/Andreasq99).

You can email me at aquist@unc.edu. Please email me with any additional questions!

# PetLab Co. Cypress Automation Demo Framework

This project uses Cypress with TypeScript and the Page Object Model (POM) pattern to validate multiple offer pages for PetLab Co.

## Tech Stack

Cypress (Automation framework)

TypeScript (Language)

Mochawesome (Test Reports)

Jenkins (CI/CD Integration)

Page Object Model (Code structure)

Fixture Data (Dynamic test data)
## Project Structure

- `cypress/e2e` – Test specs
- `cypress/pages` – Page Object Model classes
- `cypress/fixtures` – Test data (JSON)
- `cypress/support` – Cypress support files
- `.env` – Environment configuration

## Features

- Validates HTTP 200 response
- Verifies price and currency on the UI
- Checks tax/shipping logic via UI hints
- Tests footer navigation links
- Data-driven approach using JSON

## Installation

 Clone the repo
git clone https://github.com/fglryz/PetLabCoDemoProject.git


# Install dependencies
npm install

## Run Tests
# To open Cypress GUI
npx cypress open

# To run tests headless
npx cypress run
# How to Generate Mochawesome Reports
Run tests with mochawesome reporter
npx cypress run --reporter mochawesome

Mochawesome reports will be generated inside /cypress/reports/mochawesome/.
## Jenkins Integration

Jenkinsfile is included to automate Cypress tests through a Jenkins Pipeline.

Pipeline steps:

Install NodeJS and project dependencies

Run Cypress tests

Generate Mochawesome reports automatically

Archive Mochawesome report artifacts for viewing and sharing

## Fatma Guleryuz
## https://www.linkedin.com/in/fatmaguleryuz/

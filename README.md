**Have a question or suggestion?**
Contact me on [Linkedin](https://www.linkedin.com/in/jaelson-carvalho-4b84a3a2/), send an email to jaelsoncarvalhojr@gmail.com, or create a pull request on this project.

---

**Pet-project. Use at your own risk. Low test coverage ratio.**

# MEN API

[![Code Climate](https://codeclimate.com/github/jcarva/men-api/badges/gpa.svg)](https://codeclimate.com/github/jcarva/men-api)
[![Test Coverage](https://codeclimate.com/github/jcarva/men-api/badges/coverage.svg)](https://codeclimate.com/github/jcarva/men-api/coverage)
[![Issue Count](https://codeclimate.com/github/jcarva/men-api/badges/issue_count.svg)](https://codeclimate.com/github/jcarva/men-api)

 Generic API using MongoDB, Express and Node.js.

---

## Stack

* [Node.js](https://nodejs.org) (v6.2.2)
* [npm](https://www.npmjs.com/) (3.9.5)
* [Express.js](http://expressjs.com) (4.14.1)
* [Passport](http://passportjs.org/) modules as authentication middlewares
* [jwt-simple](https://github.com/hokaccha/node-jwt-simple) (0.5.1) to JWT(JSON Web Token) strategies
* [bcrypt](https://github.com/kelektiv/node.bcrypt.js) (0.0.3) to hash passwords
* [MongoDB](https://docs.mongodb.com) (v3.4.2)
* [Mongoose](http://mongoosejs.com) (4.8.5)

---

## End points

### Auth ###
| Method |          URL          |         Description         |
|:------:|:---------------------:|:---------------------------:|
| `POST` | /api/auth/signup      | SignUp user                 |
| `POSt` | /api/auth/signin      | SignIn user                 |


### Protected Resources ###
| Method |          URL          |         Description         |
|:------:|:---------------------:|:---------------------------:|
|  ALL   |           *           |   Access to any resource    |          |

```
Note: To access any protected resource is necessary to send the received token in the http header named `authorization`.
```

---

## Installation

This command install all necessary modules to run the current project.

```bash
$ npm install
```
---

## Development

Executing the below command the API will be accessible on developent mode on: http://localhost:3030.

```bash
$ npm run dev
```
---

## Production

This command is used to run the API on production mode.

```bash
$ npm run start
```
---

## Lint

This command is used to identifying and reporting on patterns in JavaScript on the entire project.

```bash
$ npm run lint
```
---

## Contributing

1. Fork it
2. Create your feature branch with specs (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

---

## Contributors

* Jaelson Carvalho ([jcarva](https://github.com/jcarva))


---

## License

This project is licensed under the terms of the **GNU GENERAL PUBLIC** license.
>You can check out the full license [here](https://github.com/jcarva/men-api/blob/master/LICENSE)

---

<br />
<p align="center">
  <a href="https://github.com/bromein/Dashr">
    <img src="/client/public/favicon.ico" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Dashr</h3>

  <p align="center">
    Dashr was created to assist those in corporate settings. It allows administration to monitor company budget, staff, weather, and more.
    <br />
    <a href="https://github.com/bromein/Dashr"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/bromein/Dashr/issues">Bugs & Issues</a>
    ·
    <a href="https://github.com/bromein/Dashr/issues">Request a Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

![Dashr](/Screenshot.jpg?raw=true)

### Built With

- [React]("https://reactjs.org/")
- [React Router]("https://reacttraining.com/react-router/")
- [Redis]("https://redis.io/")
- [Docker]("https://www.docker.com/")
- [PostgreSQL]("https://www.postgresql.org/")
- [Node]("https://nodejs.org/en/")
- [Express]("https://expressjs.com/")
- [Styled Components]("http://styled-components.com")

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- npm/yarn

```sh
npm install npm@latest -g
```

- Redis

[Redis]("https://redis.io/download")

- PostgreSQL

```sh
brew install postgresql
```

OR from their [official website]("https://www.postgresql.org/")

- Docker

[Docker]("https://docs.docker.com/install/")

### Installation

1. Clone Dashr

```sh
git clone https:://github.com/bromein/Dashr.git
```

2. Install yarn packages

```sh
yarn install
or
npm install
```

2. Build the docker container
   Navigate to /server and run

```sh
docker-compose up --build
```

This initiates the docker container and builds the database.

3. Once your server and db are running, head over to the /client directory and...

```sh
yarn start
or
npm start
```

## Roadmap

See the [open issues](https://github.com/bromein/Dashr/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

[@AJBroman](https://twitter.com/ajbroman)
[https://github.com/bromein/Dashr](https://github.com/bromein/Dashr)

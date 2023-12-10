<br />
<p align="center">
  <h3 align="center">Triffic</h3>

  <p align="center">
    The Last Travel Planning App You Ever Download
    br />
    <a href="https://github.com/stultusphobia/triffic-frontend"><strong>Explore the docs »</strong></a>
  </p>
</p>


## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

* npm

  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/stultusphobia/triffic-frontend
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

3. Spin up the dev server

   ```sh
   npm run dev
   ```



## Project Structure

```
triffic-frontend
├── src
│   ├── api                         # Frontend api logic
│   │   └── index.js
│   ├── App.jsx                     # Frame for React Pages and Navbar
│   ├── assets                      # Static files eg. figs, logos, fonts
│   │   ├── favicon.svg
│   │   └── logo.svg
│   ├── components                  # Shared or generic UI components
│   │   └── Navbar.jsx
│   ├── css                         # css files
│   │   ├── Home.css
│   │   └── index.css
│   ├── logs
│   │   └── vite-aliases.json
│   ├── main.jsx                    # React application entry point
│   ├── pages                       # React components for web pages
│   │   ├── About.jsx
│   │   └── Home.jsx
│   └── utilities                   # Javascript functions shared between compoments
│       └── index.js
├── index.html                      # Entry point for vite
├── package.json                    # List of project dependencies and NPM scripts
├── package-lock.json               # Keep track of the exact version of every package
└── vite.config.js                  # Settings for vite bundler
```


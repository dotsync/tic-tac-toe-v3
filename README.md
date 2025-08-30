<div id="top"></div>
<br />

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project


### Built With

* [React.js](https://reactjs.org/)
* [Bootstrap](https://getbootstrap.com)

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Installation

* npm
  ```sh
  npm install
  ```
  ```sh
  npm run start
  ```
  Open in browser port localhost:3000


## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.


<!-- ROADMAP -->
## Roadmap

- [ ] When a win is detected, outline the winning cells in like a bubble (CSS)
- [ ] When a loss is detected, make some sort of CSS animation, like fade to "failure" page, "retry?"
- [x] Allow computer to make random first move
- [ ] BUG - when computer makes last move, which is a winning move, then the game still reports a draw, because i think it is checking length of no more moves and determining a win
- [x] BUG - User is able to click computers most recent move and change the cellState
- [ ] Check boxes for picking whos turn
- [ ] Create an about section which explains the mini max algorithm
- [ ] use grid to format app layout
    - [ ] Nested Feature
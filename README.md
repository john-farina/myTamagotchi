<a name="readme-top"></a>

# what did i do in this project

## JAVSCRIPT
- manipualted the DOM images to create the illusion of a alive pet,
- set a game state that the whole game revolves arounds saving values,
- Game that is oriented around time so it will hatch and grow up depending on how long it is open for.
- Set a custom health degen and food so the player can interact and feed the tamagotchi
### JS LIFE
- for the tamagotchi growing up i am basing it off of randomness and time, everytime the player grows up it saves a new time value and then compares it to what time the game was started, then throwing a random number untill the desired one is chosen. Making it entirely random and each game slightly different
- Hatching is defined by how many Cracks it has in the state, it slowly gathers up cracks untill it has 4 and then there is a possibility of the tamagotchi hatching
- There are Two Random choices for what teenager tamagothci you will get, and then there are 6 Random choices you can get for a adult
- each basing its randomness off of percentage out of 100 with a custom function.
#### JS HEALTH
- the tamagotchi will get hungry, less happy, sick, and poop. All randomly but will be less random if more then one applies at once.
- For Every random thing that happens it is based off of the same percentage random chance as everything else.
- When the tamaogtchi gets hungry you can feed it which will increase tamagtochis health by one. (if only fed treats your tamagotchi will get spoiled and call for attention when it is not needed.)
- Pooping is controlled by if the tamagotchi is sick (if it is sick it will poop more then usual),
- Randomly get sick at different times, and having to heal it before it looses all of the health.


## DESIGN
- Re created all tamagotchi sprites i could find into SVG'S and then manipulate those images
- tried to create the actual feel of a tamagotchi so players will feel more nostalgic for the website
- made my own custom tamagotchi color layout,
- recreated all the different menus to my best abilitys.
- Font choice used and why
- A screen layer over the screen to make it blurry as a actual tamagotchi would be

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h1 align="center">Tamagotchi</h1>

  <p align="center">
   A recreation of the classic tamgotchi created with Vanilla JS
    <br />
    <a href="https://linktowebsite.com">View Live Demo</a>
</div>

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
      <a href="#getting-started">JavaScript</a>
      <ul>
        <li><a href="#prerequisites">State</a></li>
        <li><a href="#installation">Gameplay</a></li>
        <li><a href="#installation">Animations</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Design</a>
      <ul>
        <li><a href="#prerequisites">Characters</a></li>
        <li><a href="#installation">Device</a></li>
        <li><a href="#installation">More</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

Here's a blank template to get started: this is wherre you should be explaining what ur project does

### Built With
 - Javascript
 - CSS & HTML

<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

## What I Would Do If I Had More Time.


<!-- CONTACT -->
## Contact

**John Farina** - johnfarina8@gmail.com

Project Link: [github.com/john-farina/myTamagotchi](https://github.com/john-farina/myTamagotchi)

<p align="right">(<a href="#readme-top">back to top</a>)</p>






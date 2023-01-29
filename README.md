<a name="readme-top"></a>

<!-- # what did i do in this project -->
<!-- ## JAVSCRIPT
- manipualted the DOM images to create the illusion of a alive pet,
- set a game state that the whole game revolves arounds saving values,
- Game that is oriented around time so it will hatch and grow up depending on how long it is open for.
- Set a custom health degen and food so the player can interact and feed the tamagotchi -->
<!-- ### JS EVOLVE
- for the tamagotchi growing up i am basing it off of randomness and time, everytime the player grows up it saves a new time value and then compares it to what time the game was started, then throwing a random number untill the desired one is chosen. Making it entirely random and each game slightly different
- Hatching is defined by how many Cracks it has in the state, it slowly gathers up cracks untill it has 4 and then there is a possibility of the tamagotchi hatching
- There are Two Random choices for what teenager tamagothci you will get, and then there are 6 Random choices you can get for a adult
- each basing its randomness off of percentage out of 100 with a custom function. -->
<!-- ### JS HEALTH
- the tamagotchi will get hungry, less happy, sick, and poop. All randomly but will be less random if more then one applies at once.
- For Every random thing that happens it is based off of the same percentage random chance as everything else.
- When the tamaogtchi gets hungry you can feed it which will increase tamagtochis health by one. (if only fed treats your tamagotchi will get spoiled and call for attention when it is not needed.)
- Pooping is controlled by if the tamagotchi is sick (if it is sick it will poop more then usual) and then can clean up the poop by cleaning the tamagotchi,
- Randomly get sick at different times, and having to heal it before it looses all of the health. -->

<!-- ### JS ANIMATION
- I am controlling the animation within a animation set Interval and counting the seconds. So on every other second i play the frame. etc.
- for the animation where the character moves around the screen this is also based off of a random chance, so it creates the feeling taht the tamagtochi is moving on its own.
- this animation is controlled using class names that rely off of what position i want it. there are 4 defined classes for the position the tamagotchi can move. left, far-left, right, and far-right. With these being based off of random chance it gives off the feeling it is making its own mind up
- the same is for the random flipping that teens and adults do. where they will flip right to left this is also based off of random percentage and not hard coded. -->

<!-- #### EATING
- for the eating animations every tamagotchi has a side angle, and a open mouth angle. it detects which evolve state you are at and switches it out every other frame along with the food that its eating.
 -->

<!-- ## DESIGN
- Re created all tamagotchi sprites i could find into SVG'S and then manipulate those images
- tried to create the actual feel of a tamagotchi so players will feel more nostalgic for the website
- made my own custom tamagotchi color layout,
- recreated all the different menus to my best abilitys.
- Font choice used and why
- A screen layer over the screen to make it blurry as a actual tamagotchi would be -->

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
      <a href="#javascript">JavaScript</a>
      <ul>
        <li><a href="#state">State</a></li>
        <li><a href="#dom">DOM</a></li>
        <li><a href="#updating-game--animations">Updating Game & Animations</a></li>
      </ul>
    </li>
    <li>
      <a href="#tamagotchi-game-logic">Tamagotchi Game Logic</a>
      <ul>
        <li><a href="#time-oriented--random">Time Oriented & Random</a></li>
        <li><a href="#evolution-states">Evolution States</a></li>
        <ul>
            <li><a href="#baby--toddler">Baby & Toddler</a></li>
            <li><a href="#teens">Teens</a></li>
            <li><a href="#adults">Adults</a></li>
        </ul>
        <li><a href="#healthhappy-degeneration">Health/Happy Degeneration</a></li>
        <li><a href="#guessing-game">Guessing Game</a></li>
      </ul>
    </li>
    <li>
      <a href="#design">Design</a>
      <ul>
        <li><a href="#characters">Characters</a></li>
        <li><a href="#the-device">The Device</a></li>
        <ul>
            <li><a href="#screen">Screen</a></li>
            <li><a href="#menus">Menus</a></li>
            <li><a href="#themes">Themes</a></li>
        </ul>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project


### Built With
 - Javascript
 - CSS & HTML

## Javascript

### State
I used a single gameState object to run the game, to make it easier if i wanted to make a saving functionality for the future, and to keep the code clean and easily changable. the state object stores things like, screenState, gameState,Tamagotchi Health and more

### DOM
In this project i am manipulating the DOM objects i have mostly already placed in the html, showing and hiding the correct images that correlate with the state i used this method to keep track of the images and what images go in what screens.

### Updating Game & Animations
For updating the game and animations i am using two setIntervals that are both updating on there own interval, for the game interval it is set at a higher pace because i want it to be fluent and not feel laggy, but i did the opposite for the animation frame because i do want the animations to be choppy, to try to go for the tamagotchi style

## Tamagotchi Game Logic

### Time Oriented & Random
The core mechanics of tamagotchi are centered around the use of time and randomness. These elements are used to create a unique and unpredictable experience for the player. For instance, the tamagotchi's evolution is determined by both time and random chance. The game state is updated with the current time each time the Tamagotchi evolves, and the value is compared with the start time of the game. When the preffered time for evolution is reached, the game uses a random percent generation function to determine the specific outcome of the evolution, adding an element of surprise and replayability for each aspect of the game.

### Evolution States
I am controlling the evolution using a Array with all of the values, there are 4 main Evolution states. Baby, Toddler, Teen, Adult.
#### **Baby & Toddler**
For the baby and toddler there is only one character but this is where all characters can evolve from, each player gets the same baby and toddler then they will recivie a random teen based on how happy it is.

#### **Teens**
There are two teens a player can get there tamagotchi to evolve into they both act the same, but have different looks.

#### **Adults**
There are 6 different adults (and one i created myself lol) so there are many chances to get a unqiue character. The gameplay is all the same and looks are only aesthitic. (Some characters in the original tamagotchi get more sick, etc.)

### Health/Happy Degeneration
Both Health and happy degneration are based off a 3% chance and it runs every 10 seconds or so, if the value is true then the tamagotchis health or happiness degenerates, The user can then feed the tamagotchi or play with it to increase their health. <br>
All other random tamaogtchi generations are following the same rules but with a higher or lower percentage depending on what it is. For example random Pooping can get turned into a higher chance if the tamagotchi is sick for a set amount of seconds/minutes.

### Guessing Game
The guessing game was inspired by the original game on the tamagotchi itself, where you have to guess what direction the tamagotchi is going to be facing. This is the only part of the game i tweaked for the web experience, making it so you can click the screen instead of having to click the buttons on the device. <br>
For the game i am generating a random number 1 or 2, and each button correlates with ur guess, if you guessed the same number then the round continues and you get a point, the first one to 3 points wins. If you loose against the tamagotchi it wont make it happy. But if you win the tamagotchi will get happy.

## Design

### Characters
I recreated the original tamagotchi chacracters but in a svg form so its better for the web and i could resize them when needed. This was a long process of finding videos of every tamagotchi character since it was hard for me to get each one on my actual tamagotchi. *(the ending gravestone scene when ur tamagotchi dies is actually from a discontinued version of the actual tamagotchi. they then replaced that with the character growing wings.)* <br>
here are most of the images i created.

<div style="display: flex; flex-wrap: wrap; gap: 5px; justify-content: center;background-color: gray;">
    <img src="./src/tamaPictures/tamaEgg/tama_eggState1.svg" width="50" height="50" />
    <img src="./src/tamaPictures/tamaCharacter/childState1/tama_childState1.svg" width="50" height="50" />
    <img src="./src/tamaPictures/tamaCharacter/childState2/tama_childState2.svg" width="50" height="50" />
    <img src="./src/tamaPictures/tamaCharacter/teen1/tama_teen1.svg" width="50" height="50" />
    <img src="./src/tamaPictures/tamaCharacter/teen2/tama_teen2.svg" width="50" height="50" />
    <img src="./src/tamaPictures/tamaCharacter/adult1/tama_adult1.svg" width="50" height="50" />
    <img src="./src/tamaPictures/tamaCharacter/adult2/tama_adult2.svg" width="50" height="50" />
    <img src="./src/tamaPictures/tamaCharacter/adult3/tama_adult3.svg" width="50" height="50" />
    <img src="./src/tamaPictures/tamaCharacter/adult4/tama_adult4.svg" width="50" height="50" />
    <img src="./src/tamaPictures/tamaCharacter/adult5/tama_adult5.svg" width="50" height="50" />
    <img src="./src/tamaPictures/tamaCharacter/adult6/tama_adult6.svg" width="50" height="50" />
</div>

### The Device
The device was created rounding a div to get that egg shape that a tamagotchi usually is. I tried creating mostly everything about the device in pure css and html, using divs and shaping them as needed.

#### **Screen**
For the screen i added a screen texture over the div using z-index to finalize the retro effect and to make it more accurate.

#### **Menus**
Each menu i made was inspired directly from the menus created for the original tamgotchi, i did change some aspects to make it better for the web but its mostly the same as the original tamagotchi is.

#### **Themes**
I created custom themes because that is a anohter important part of tamagotchi which is customization the basic themes are inspired directly from the color schemes used for tamagotchis.

i did add some of my own custom ones to test what i could do, for the red and blue default color it was done using a css gradient on the div object. And for the Futurama and Alf one i created using color schemes from the show and added a logo.

<!-- USAGE EXAMPLES -->
## Usage
To Use tamagotchi open up the website and wait for ur own Tamagotchi to hatch, when it hatches make sure to keep it happy and healthy by feeding it regularly, and playing games with it to keep it happy.
Clean ur tamagotchi after it poops and heal it when it gets sick. See what kind of tamagotchi yours will grow into and see how long you can get it to live.

## What I Would Do If I Had More Time.
If i had more time to work on this project i would add a saving functionality either with local storage or using rails as a database.
I would then work on making the game last for days and not hours, Because then the user can close and save their progress.
and i could add stuff that happens depending on the last time you where online.
I would also like to add more themes and maybe a make your own themes using a color dial.


<!-- CONTACT -->
## Contact

**John Farina** - johnfarina8@gmail.com

My Website: [johnfarina.co](https://johnfarina.co)

Project Link: [github.com/john-farina/myTamagotchi](https://github.com/john-farina/myTamagotchi)

<p align="right">(<a href="#readme-top">back to top</a>)</p>






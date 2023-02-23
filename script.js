let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener('DOMContentLoaded', function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  const mainTitle = document.getElementById('main-title');
  // console.dir(mainTitle);
  mainTitle.innerText = "DOM Toretto's Homepage";

  // Part 2
  const body = document.querySelector('body');
  body.style.backgroundColor = '#E7DED0';

  // Part 3 Select DOM's Favorite Things list and remove the last list item.
  const ulOfFavoriteThings = document.getElementById('favorite-things');
  // console.log(ulOfFavoriteThings);
  const lastLiOfFavoriteThingsUl = ulOfFavoriteThings.children[5];
  // console.log(lastLiOfFavoriteThingsUl);
  ulOfFavoriteThings.removeChild(lastLiOfFavoriteThingsUl);
  // console.dir(ulOfFavoriteThings);

  // Part 4 Select all .special-title class elements
  const allSpecialTitleClassElements =
    document.querySelectorAll('.special-title');
  // & change their font-size to 2rem. May have to iterate.
  allSpecialTitleClassElements.forEach((specialTitleClassElement) => {
    specialTitleClassElement.style.fontSize = '2rem';
  });

  // Part 5 Access the Past Races list and remove Chicago.
  const pastRacesList = document.getElementById('past-races');
  // console.dir(pastRacesList);
  const fourthRaceInList = pastRacesList.children[3];
  // console.log(fourthRaceInList);
  pastRacesList.removeChild(fourthRaceInList);
  // console.dir(pastRacesList);

  // Part 6 Create a new <li> element, change the new <li>text to the name of a city, and append it to the Past Races list.
  const newLiInRacesList = document.createElement('li');
  newLiInRacesList.textContent = 'Glasgow';
  pastRacesList.append(newLiInRacesList);

  // Part 7 Create a new .blog-post corresponding to the new city added in Part 6. Must create a new <div> with class of .blog-post, a new <h2> with text, and a new <p>with some text. Think about what order you want to create the elements, and what order you want to append them in.

  // Part 8

  // Part 9
});

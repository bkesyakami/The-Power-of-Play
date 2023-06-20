// Get access to the document
let doc = document;

// Create a section for the overall content
let contentSection = doc.createElement('section');
contentSection.className = 'content-section';

// Append the content section to the body of the document
doc.body.appendChild(contentSection);

// Create a heading element for the section
let heading = doc.createElement('h1');
heading.innerText = 'The Power of Play';

// Add the heading element to the content section
contentSection.appendChild(heading);

// Create a paragraph to introduce the content
let introParagraph = doc.createElement('p');
introParagraph.innerText = 'Playing can bring out the best in us. It can inspire us to create, innovate, cooperate, and explore.';

// Add the intro section to the content section
contentSection.appendChild(introParagraph);

// Create a sup-heading for the Benefits section
let benefitsHeading = doc.createElement('h2');
benefitsHeading.innerText = 'Benefits of Play';

// Add the sub-heading to the content section
contentSection.appendChild(benefitsHeading);

// Create an unordered list to contain the benefits
let benefitsList = doc.createElement('ul');

// Add the list to the content section
contentSection.appendChild(benefitsList);

// Create list elements to contain each benefit
let creativityBenefit = doc.createElement('li');
creativityBenefit.innerText = 'Enhancing creativity';

let socialBenefit = doc.createElement('li');
socialBenefit.innerText = 'Promoting social interaction';

let problemSolveBenefit = doc.createElement('li');
problemSolveBenefit.innerText = 'Practice problem solving skills';

let physicalBenefit = doc.createElement('li');
physicalBenefit.innerText = 'Develop physical capabilities';

let wellbeingBenefit = doc.createElement('li');
wellbeingBenefit.innerText = 'Increase overall wellbeing';

// Add each list element to the unordered list
benefitsList.appendChild(creativityBenefit);
benefitsList.appendChild(socialBenefit);
benefitsList.appendChild(problemSolveBenefit);
benefitsList.appendChild(physicalBenefit);
benefitsList.appendChild(wellbeingBenefit);

// Create a sub-heading for the Types of Play section
let typesHeading = doc.createElement('h2');
typesHeading.innerText = 'Types of Play';

// Add the sub-heading to the content section
contentSection.appendChild(typesHeading);

// Create an unordered list to contain the types of play
let typesList = doc.createElement('ul');

// Add the list to the content section
contentSection.appendChild(typesList);

// Create list elements to contain each type of play
let physicalPlay = doc.createElement('li');
physicalPlay.innerText = 'Physical Play (Sports, Exercise, etc.)';

let imaginativePlay = doc.createElement('li');
imaginativePlay.innerText = 'Imaginative Play (Dramatic Play, Adventure Games, etc.)';

let boardGames = doc.createElement('li');
boardGames.innerText = 'Board Games (Chess, Go, etc.)';

let videoGames = doc.createElement('li');
videoGames.innerText = 'Video Games (Console Games, Mobile Games, etc.)';

// Add each list element to the unordered list
typesList.appendChild(physicalPlay);
typesList.appendChild(imaginativePlay);
typesList.appendChild(boardGames);
typesList.appendChild(videoGames);

// Create a sub-heading for the Benefits of Play section
let opportunitiesHeading = doc.createElement('h2');
opportunitiesHeading.innerText = 'Opportunities for Play';

// Add the sub-heading to the content section
contentSection.appendChild(opportunitiesHeading);

// Create an unordered list to contain the opportunities
let opportunitiesList = doc.createElement('ul');

// Add the list to the content section
contentSection.appendChild(opportunitiesList);

// Create list elements to contain each opportunity
let parks = doc.createElement('li');
parks.innerText = 'Local Parks';

let playgrounds = doc.createElement('li');
playgrounds.innerText = 'Playgrounds';

let schools = doc.createElement('li');
schools.innerText = 'Schools';

let clubs = doc.createElement('li');
clubs.innerText = 'Sports Clubs';

let bars = doc.createElement('li');
bars.innerText = 'Pool Halls';

// Add each list element to the unordered list
opportunitiesList.appendChild(parks);
opportunitiesList.appendChild(playgrounds);
opportunitiesList.appendChild(schools);
opportunitiesList.appendChild(clubs);
opportunitiesList.appendChild(bars);

// Create a closing paragraph for the section
let closingParagraph = doc.createElement('p');
closingParagraph.innerText = 'Playing can bring out the best in us, whether it’s on the playground or on the battlefield. The power of play is one that can lead to great things.';

// Add the closing paragraph to the content section
contentSection.appendChild(closingParagraph);
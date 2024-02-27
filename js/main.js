//console.log("js has been loaded");

const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeBtn');
const content = document.getElementById('content');

//"event name", callback function
menuBtn.addEventListener('click', function () {
  // console.log("clicked!")
  mobileMenu.classList.add('active');
});

closeBtn.addEventListener('click', function () {
  // console.log("clicked!")
  mobileMenu.classList.remove('active');
});

function renderProperties(properties) {
  properties.forEach((room) => {
    const roomArticle = document.createElement('article');
    roomArticle.classList.add('room');

    const roomNameElement = document.createElement('h3');
    roomNameElement.classList.add('room--name');
    roomNameElement.textContent = room.name;

    const roomDescriptionElement = document.createElement('p');
    roomDescriptionElement.classList.add('room--description');
    roomDescriptionElement.textContent = room.description;

    const roomPriceElement = document.createElement('p');
    roomPriceElement.textContent = `Price: ${room.price}`;

    const roomGuestsElement = document.createElement('p');
    roomGuestsElement.textContent = `Guests: ${room.guests}`;

    roomArticle.appendChild(roomNameElement);
    roomArticle.appendChild(roomDescriptionElement);
    roomArticle.appendChild(roomPriceElement);
    roomArticle.appendChild(roomGuestsElement);

    document.body.appendChild(roomArticle);
  });
}

// fetch('./js/properties.json')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     // console.log(data);
//     renderProperties(data);
//   });

// fetch('js/properties.json')
//   .then((response) => {
//     // response returns a status code and a body
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     // convert the body to JSON
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data); // Here's your data
//   })
//   .catch((error) => {
//     console.error('There was a problem fetching the data:', error);
//   });

const displayCategory = (category, properties) => {
  // console.log('displaying category');
  const sectionElement = document.createElement('section');
  sectionElement.classList.add('category');

  const sectionTitle = document.createElement('h2');
  sectionTitle.textContent = category.label.plural;

  sectionElement.appendChild(sectionTitle);
  console.log(category.label.singular);
  //1. filter properties
  const filteredProperties = properties.filter((property) => {
    //return true or falase
    return category.label.singular === property.type;
  });

  filteredProperties.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  filteredProperties.forEach((property) => {
    const articleElement = document.createElement('article');
    articleElement.classList.add('property');

    let propertyHtml = `
    <h3 class="property--title">${property.name}</h3>
    <p class="property--description">${property.description}</p>
    <p class="property--price">${property.price}</p>
    `;
    articleElement.innerHTML = propertyHtml;
    sectionElement.appendChild(articleElement);
  });

  //2. loop and append properties

  content.appendChild(sectionElement);
};

Promise.all([
  // fetch 1
  fetch('js/properties.json').then((response) => response.json()),
  // fetch 2
  fetch('js/categories.json').then((response) => response.json()),
])
  .then(([properties, categories]) => {
    // console.log({ properties });
    // console.log({ categories });
    categories.forEach((category) => {
      displayCategory(category, properties);
    });
  })
  .catch((error) => {
    console.error('There was a problem fetching the data:', error);
  });

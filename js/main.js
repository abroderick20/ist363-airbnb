//console.log("js has been loaded");

const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeBtn');

//"event name", callback function
menuBtn.addEventListener('click', function () {
  // console.log("clicked!")
  mobileMenu.classList.add('active');
});

closeBtn.addEventListener('click', function () {
  // console.log("clicked!")
  mobileMenu.classList.remove('active');
});

// const roomName = 'Luxury King Room';
// const roomPrice = 300;
// const roomGuests = 2;
// const roomDescription = 'A beautiful room with a king size bed.';

// const rooms = [
//   {
//     name: 'Luxury King Room',
//     price: 300,
//     guests: 2,
//     description: 'A beautiful room with a king size bed.',
//   },

//   {
//     name: 'Luxury King Room',
//     price: 300,
//     guests: 2,
//     description: 'A beautiful room with a king size bed.',
//   },
//   {
//     name: 'Luxury King Room',
//     price: 300,
//     guests: 2,
//     description: 'A beautiful room with a king size bed.',
//   },
// ]; //end of rooms

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

fetch('./js/properties.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log(data);
    renderProperties(data);
  });

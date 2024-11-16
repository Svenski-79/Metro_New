const officeData = [
  {
    imageUrl: "./assets/office/job.jpg",
    name: "M A Job",
    position: "President",
  },
  {
    imageUrl: "./assets/office/praveen k.jpeg",
    name: "Praveen K",
    position: "Secretary",
  },
  {
    imageUrl: "./assets/office/sumesh k n.jpeg",
    name: "Sumesh K N",
    position: "Treasurer",
  },
  {
    imageUrl: "./assets/office/Satheesh.jpeg",
    name: "Sathesh K S",
    position: "Vice President",
  },
  {
    imageUrl: "./assets/office/varghese.jpeg",
    name: "Varghese K M",
    position: "Vice President",
  },
  {
    imageUrl: "./assets/office/manoj.jpeg",
    name: "Manoj Kumar T S",
    position: "Joint Secretary",
  },
  {
    imageUrl: "./assets/office/selvin.jpeg",
    name: "Selvin R Thaikoottathil",
    position: "Joint Secretary",
  },
  {
    imageUrl: "./assets/office/ajith.jpg",
    name: "Ajith Panikkassery",
    position: "Council Member",
  },
  {
    imageUrl: "./assets/office/anil.jpeg",
    name: "Anil Kumar M P",
    position: "Council Member",
  },
  {
    imageUrl: "./assets/office/ashokpk.jpeg",
    name: "Dr. Ashok P K",
    position: "Council Member",
  },
  {
    imageUrl: "./assets/office/joy thomas.jpeg",
    name: "Joy Thomas",
    position: "Council Member",
  },
  {
    imageUrl: "./assets/office/madhu p m.jpeg",
    name: "Madhu P M",
    position: "Council Member",
  },
  {
    imageUrl: "./assets/office/anilkumar.jpeg",
    name: "N V AnilKumar",
    position: "Council Member",
  },
  {
    imageUrl: "./assets/office/sudheesh.jpeg",
    name: "Sudesh Alapat",
    position: "Council Member",
  },
  {
    imageUrl: "./assets/office/tomy.jpeg",
    name: "Tomy K Varghese",
    position: "Council Member",
  },
];

const officeContainer = document.querySelector(".office__bearers__container");

function createCard(data, parentContainer) {
  const officeCard = document.createElement("div");
  officeCard.classList.add("office__bearer");

  const officeCardImage = document.createElement("img");
  officeCardImage.classList.add("office__bearer__image");
  officeCardImage.setAttribute("src", data.imageUrl);
  officeCardImage.setAttribute("alt", `${data.name} photo`);
  officeCardImage.setAttribute("title", `${data.name} photo`);

  const officeCardName = document.createElement("p");
  officeCardName.classList.add("office__bearer__name");
  officeCardName.textContent = data.name;

  const officeCardPosition = document.createElement("p");
  officeCardPosition.classList.add("office__bearer__position");
  officeCardPosition.textContent = data.position;

  officeCard.append(officeCardImage, officeCardName, officeCardPosition);
  parentContainer.append(officeCard);
}

for (let i of officeData) {
  createCard(i, officeContainer);
}

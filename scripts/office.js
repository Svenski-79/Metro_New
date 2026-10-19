const officeData = [
  {
    imageUrl: "./assets/office/job.webp",
    name: "M A Job",
    position: "President",
  },

  {
    imageUrl: "./assets/office/joy thomas.webp",
    name: "Joy Thomas",
    position: "Secretary",
  },

  {
    imageUrl: "./assets/office/selvin.webp",
    name: "Selvin Thaikoottathil",
    position: "Treasurer",
  },

  {
    imageUrl: "./assets/office/manoj.webp",
    name: "Manoj T S",
    position: "Vice President",
  },

  {
    imageUrl: "./assets/office/varghese.webp",
    name: "Varghese K M",
    position: "Vice President",
  },

  {
    imageUrl: "./assets/office/anil.webp",
    name: "Anil Kumar M P",
    position: "Joint Secretary",
  },

  {
    imageUrl: "./assets/office/sumesh-k-n.webp",
    name: "Sumesh K N",
    position: "Joint Secretary",
  },

  {
    imageUrl: "./assets/office/anilkumar.webp",
    name: "AnilKumar N V",
    position: "Council Member",
  },
  {
    imageUrl: "",
    name: "Anilkumar R",
    position: "Council Member",
  },
  {
    imageUrl: "",
    name: "Biju P S",
    position: "Council Member",
  },
  {
    imageUrl: "./assets/office/madhu p m.webp",
    name: "Madhu P M",
    position: "Council Member",
  },
  {
    imageUrl: "",
    name: "Manoharan E M",
    position: "Council Member",
  },
  {
    imageUrl: "./assets/office/praveen k.webp",
    name: "Praveen K",
    position: "Council Member",
  },
  {
    imageUrl: "",
    name: "Rajesh K S",
    position: "Council Member",
  },
  {
    imageUrl: "",
    name: "Sajan C S",
    position: "Council Member",
  },
  {
    imageUrl: "./assets/office/satheesh.webp",
    name: "Satheesh K S",
    position: "Council Member",
  },
  {
    imageUrl: "",
    name: "Vinod Govind",
    position: "Council Member",
  },
  {
    imageUrl: "./assets/office/km-shaiju.jpeg",
    name: "KM  Shaiju",
    position: "Council Member",
  },
  {
    imageUrl: "./assets/office/dinoop-c-j.jpeg",
    name: "Dinoop C J",
    position: "Council Member",
  },
  {
    imageUrl: "./assets/office/rejiraj.jpeg",
    name: "Rejiraj",
    position: "Council Member",
  },
];

const officeContainer = document.querySelector(".office__container");

function createCard(data, targetContainer) {
  const cardTemplate = document.querySelector("#office_member__card_template");

  const memberCard = document.importNode(cardTemplate.content, true);

  memberCard
    .querySelector(".office_member__image")
    .setAttribute(
      "src",
      data.imageUrl || "./assets/images/personPlaceholder.svg",
    );
  memberCard
    .querySelector(".office_member__image")
    .setAttribute("title", `${data.name} - ${data.position}`);
  memberCard.querySelector(".office_member__name").textContent = data.name;
  memberCard.querySelector(".office_member__position").textContent =
    data.position;

  targetContainer.append(memberCard);
}

for (let member of officeData) {
  createCard(member, officeContainer);
}

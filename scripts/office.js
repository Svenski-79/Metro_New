const officeData = [
  {
    imageUrl: "./assets/office/job.webp",
    name: "M A Job",
    position: "President",
    details: ["4534234590", "name@gmail.com", "1029384756"],
  },
  {
    imageUrl: "./assets/office/praveen k.webp",
    name: "Praveen K",
    position: "Secretary",
    details: ["4534234590", "name@gmail.com", "1029384756"],
  },
  {
    imageUrl: "./assets/office/sumesh-k-n.webp",
    name: "Sumesh K N",
    position: "Treasurer",
    details: ["4534234590", "name@gmail.com", "1029384756"],
  },
  {
    imageUrl: "./assets/office/satheesh.webp",
    name: "Sathesh K S",
    position: "Vice President",
    details: ["4534234590", "name@gmail.com", "1029384756"],
  },
  {
    imageUrl: "./assets/office/varghese.webp",
    name: "Varghese K M",
    position: "Vice President",
    details: ["4534234590", "name@gmail.com", "1029384756"],
  },
  {
    imageUrl: "./assets/office/manoj.webp",
    name: "Manoj Kumar T S",
    position: "Joint Secretary",
    details: ["4534234590", "name@gmail.com", "1029384756"],
  },
  {
    imageUrl: "./assets/office/selvin.webp",
    name: "Selvin R Thaikoottathil",
    position: "Joint Secretary",
    details: ["4534234590", "name@gmail.com", "1029384756"],
  },
  {
    imageUrl: "./assets/office/ajith.webp",
    name: "Ajith Panikkassery",
    position: "Council Member",
    details: ["4534234590", "name@gmail.com", "1029384756"],
  },
  {
    imageUrl: "./assets/office/anil.webp",
    name: "Anil Kumar M P",
    position: "Council Member",
    details: ["4534234590", "name@gmail.com", "1029384756"],
  },
  {
    imageUrl: "./assets/office/ashokpk.webp",
    name: "Dr. Ashok P K",
    position: "Council Member",
    details: ["4534234590", "name@gmail.com", "1029384756"],
  },
  {
    imageUrl: "./assets/office/joy thomas.webp",
    name: "Joy Thomas",
    position: "Council Member",
    details: ["4534234590", "name@gmail.com", "1029384756"],
  },
  {
    imageUrl: "./assets/office/madhu p m.webp",
    name: "Madhu P M",
    position: "Council Member",
    details: ["4534234590", "name@gmail.com", "1029384756"],
  },
  {
    imageUrl: "./assets/office/anilkumar.webp",
    name: "N V AnilKumar",
    position: "Council Member",
    details: ["4534234590", "name@gmail.com", "1029384756"],
  },
  {
    imageUrl: "./assets/office/sudheesh.webp",
    name: "Sudesh Alapat",
    position: "Council Member",
    details: ["4534234590", "name@gmail.com", "1029384756"],
  },
  {
    imageUrl: "./assets/office/tomy.webp",
    name: "Tomy K Varghese",
    position: "Council Member",
    details: ["4534234590", "name@gmail.com", "1029384756"],
  },
];
const mailIconPath = "./assets/images/email-red.svg";
const phoneIconPath = "./assets/images/phone-red.svg";
const officeContainer = document.querySelector(".office__container");

function createCard(data, targetContainer) {
  const emailPattern = /[@]/;
  const phonePattern =
    /^(\+?\d{1,4}[\s\-]?)?(\(?\d{1,4}\)?[\s\-]?)?(\d{1,4}[\s\-]?\d{1,4}[\s\-]?\d{1,4})$/;

  const memberCard = document.createElement("div");
  memberCard.classList.add("office__member");

  const memberImageContainer = document.createElement("div");
  memberImageContainer.classList.add("office__member__image__container");

  const memberImage = document.createElement("img");
  memberImage.classList.add("office__member__image");
  memberImage.setAttribute("src", data.imageUrl);
  memberImage.setAttribute("alt", `${data.name}`);

  const memberDetailsContainer = document.createElement("div");
  memberDetailsContainer.classList.add("office__member__details");

  const memberPosition = document.createElement("p");
  memberPosition.classList.add("office__member__position");
  memberPosition.textContent = data.position;

  const memberName = document.createElement("h4");
  memberName.classList.add("office__member__name");
  memberName.textContent = data.name;

  const memberDescriptionContainer = document.createElement("div");
  memberDescriptionContainer.classList.add("office__member__description");

  const descriptions = [];

  data.details.forEach((detail) => {
    let icon = detail.match(emailPattern) ? mailIconPath : undefined;

    if (!icon) {
      icon = detail.match(phonePattern) ? phoneIconPath : undefined;
    }

    const memberDescription = document.createElement("div");
    memberDescription.classList.add("office__member__info");

    let memberDescriptionIcon = document.createElement("img");
    memberDescriptionIcon.classList.add("office__member__info-icon");
    memberDescriptionIcon.setAttribute("src", icon);

    const memberDescriptionText = document.createElement("p");
    memberDescriptionText.classList.add("office__member__info-text");
    memberDescriptionText.textContent = detail;

    memberDescription.append(memberDescriptionText, memberDescriptionIcon);
    descriptions.push(memberDescription);
  });

  memberImageContainer.append(memberImage);
  memberDescriptionContainer.append(...descriptions);
  memberDetailsContainer.append(
    memberPosition,
    memberName,
    memberDescriptionContainer
  );
  memberCard.append(memberImageContainer, memberDetailsContainer);
  targetContainer.append(memberCard);
}

for (let member of officeData) {
  createCard(member, officeContainer);
}

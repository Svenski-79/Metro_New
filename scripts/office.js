const officeData = [
  {
    imageUrl: "./assets/office/job.webp",

    name: "M A Job",

    position: "President",

    details: ["+91-9744506556", "metroclubparur@gmail.com", "+91-6238540824"],
  },

  {
    imageUrl: "./assets/office/joy thomas.webp",

    name: "Joy Thomas",

    position: "Secretary",

    details: ["+91-9388607729", "metroclubparur@gmail.com", "+91-6238540824"],
  },

  {
    imageUrl: "./assets/office/selvin.webp",

    name: "Selvin Thaikoottathil",

    position: "Treasurer",

    details: ["+91-7907204898", "metroclubparur@gmail.com", "+91-9847292445"],
  },

  {
    imageUrl: "./assets/office/manoj.webp",

    name: "Manoj T S",

    position: "Vice President",

    details: ["+91-9605070000", "metroclubparur@gmail.com", "+91-6238540824"],
  },

  {
    imageUrl: "./assets/office/varghese.webp",

    name: "Varghese K M",

    position: "Vice President",

    details: ["+91-9446802255", "metroclubparur@gmail.com", "+91-6238540824"],
  },

  {
    imageUrl: "./assets/office/anil.webp",

    name: "Anil Kumar M P",

    position: "Joint Secretary",

    details: ["+91-9645838382", "metroclubparur@gmail.com", "+91-6238540824"],
  },

  {
    imageUrl: "./assets/office/sumesh-k-n.webp",

    name: "Sumesh K N",

    position: "Joint Secretary",

    details: ["+91-9447018302", "metroclubparur@gmail.com", "+91-6238540824"],
  },

  {
    imageUrl: "./assets/office/anilkumar.webp",

    name: "AnilKumar N V",

    position: "Council Member",

    details: ["+91-9847454174", "metroclubparur@gmail.com", "+91-6238540824"],
  },
  {
    imageUrl: "./assets/office/",

    name: "Anilkumar R",

    position: "Council Member",

    details: ["+91-9946620701", "metroclubparur@gmail.com", "+91-6238540824"],
  },
  {
    imageUrl: "./assets/office/",

    name: "Biju P S",

    position: "Council Member",

    details: ["+91-9744506556", "metroclubparur@gmail.com", "+91-6238540824"],
  },
  {
    imageUrl: "./assets/office/madhu p m.webp",

    name: "Madhu P M",

    position: "Council Member",

    details: ["+91-9846205404", "metroclubparur@gmail.com", "+91-6238540824"],
  },
  {
    imageUrl: "./assets/office/",

    name: "Manoharan E M",

    position: "Council Member",

    details: ["+91-9447111452", "metroclubparur@gmail.com", "+91-6238540824"],
  },
  {
    imageUrl: "./assets/office/praveen k.webp",

    name: "Praveen K",

    position: "Council Member",

    details: ["+91-9847700452", "metroclubparur@gmail.com", "+91-6238540824"],
  },
  {
    imageUrl: "./assets/office/",

    name: "Rajesh K S",

    position: "Council Member",

    details: ["+91-9946903382", "metroclubparur@gmail.com", "+91-6238540824"],
  },
  {
    imageUrl: "./assets/office/",

    name: "Sajan C S",

    position: "Council Member",

    details: ["+91-9744506556", "metroclubparur@gmail.com", "+91-6238540824"],
  },
  {
    imageUrl: "./assets/office/satheesh.webp",

    name: "Satheesh K S",

    position: "Council Member",

    details: ["+91-9846038842", "metroclubparur@gmail.com", "+91-6238540824"],
  },
  {
    imageUrl: "./assets/office/",

    name: "Vinod Govind",

    position: "Council Member",

    details: ["+91-9447111452", "metroclubparur@gmail.com", "+91-6238540824"],
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

let clubs = [
  {
    name: "Century Club",
    address:
      "Century Club Lane,<br> Vennala P.O.,<br> Kochi,<br> Kerala - 680028",
    image: ".assets/affiliated-clubs/century-club.webp",
    phone: ["0484 2805387"],
    email: ["centuryclubcochin@gmail.com"],
  },
  {
    name: "Cochin Gymkhana Club",
    address: "Toc-H Nagar ,<br> Vyttila ,<br> Cochin ,<br> Kerala - 682019",
    image: ".assets/affiliated-clubs/cochin-gymkhana-club.webp",
    phone: ["0484 4021217", "2304148"],
    email: ["mail@cochingymkhana.com"],
  },
  {
    name: "The Presidency Club",
    address: "59XV+FJR,<br> Kidangoor,<br> Angamaly,<br> Kerala 683572",
    image: ".assets/affiliated-clubs/presidency-club.webp",
    phone: [],
    email: [],
  },
  {
    name: "Kothamangalam Club",
    address:
      "Kothamangalam Club,<br> Kuthukuzhy P.O,<br> Kothamangalam - 686691,<br> Eranakulam Dist,",
    image: ".assets/affiliated-clubs/kothamangalam-club.webp",
    phone: ["+91 7561033201"],
    email: ["mail@kothamangalamclub.com"],
  },
  {
    name: "Adimali Club",
    address: "2X76+743,<br> Adimali,<br> Kerala 685561",
    image: ".assets/affiliated-clubs/adimali-club.webp",
    phone: [],
    email: [],
  },
  {
    name: "Winners Club",
    address: "Kandanasseri,<br> Thrissur,<br> Kerala",
    image: ".assets/affiliated-clubs/winners-club.webp",
    phone: ["0488 5238254"],
    email: [],
  },
  {
    name: "The United Club",
    address:
      "The United Club,<br> Xi/223A,<br> Mangalassery,<br> Koratty South - Thrissur 680308",
    image: ".assets/affiliated-clubs/united-club.webp",
    phone: ["0480 2730733"],
    email: ["theunitedclub@yahoo.com"],
  },
  {
    name: "The Citi Club",
    address: "Beenachi Po,<br>Sulthan Bathery 673592,<br> Wayanad India",
    image: ".assets/affiliated-clubs/citi-club.webp",
    phone: [],
    email: [],
  },
  {
    name: "Palakkad Cosmopolitan Club",
    address:
      "Palghat Cosmopolitan Club<br> N.H. Bypass Road,<br> Palakkad<br> Kerala - 678 013,",
    image: ".assets/affiliated-clubs/palakkad-cosmopolitan-club.webp",
    phone: ["0491 2538866", "0491 2510652"],
    email: ["cosmopgt@gmail.com"],
  },
  {
    name: "Cosmos Club",
    address: "Cosmos Club,<br> Near NH 47,<br> Chalakudy",
    image: ".assets/affiliated-clubs/cosmos-club.webp",
    phone: ["0480 2708918"],
    email: [],
  },
  {
    name: "The Citizens Club",
    address: "Mc Road,<br> Kodimatha Kottayam,<br> Kottayam - 686013",
    image: ".assets/affiliated-clubs/citizens-club.webp",
    phone: ["0481 2360798"],
    email: [],
  },
  {
    name: "Coastal Regency Club",
    address: "Cherkkara,<br> Thalikulam,<br> Thrissur - 680569",
    image: ".assets/affiliated-clubs/coastal-regency-club.webp",
    phone: [],
    email: [],
  },
  {
    name: "Engineers Club",
    address:
      "33/588-B Chakkaraparambu,<br> Vennala,<br> Kochi - 682 028<br>Kerala,",
    image: ".assets/affiliated-clubs/engineers-club.webp",
    phone: ["+91 9207067775", "0484 2808792"],
    email: ["engineersclubindia@gmail.com"],
  },
  {
    name: "Town Square Club",
    address: "Town Square Club,<br> Racket court road,<br> Palakkad -678014,",
    image: ".assets/affiliated-clubs/town-square-club.webp",
    phone: ["0491 2522789"],
    email: ["mail@townsquareclub.com"],
  },
  {
    name: "Madhavaraja Club",
    address:
      "No.375 A 375 B,<br> English Church Road,<br> Palakkad Ho,<br> Palakkad - 678001,<br> Near Income Tax,",
    image: ".assets/affiliated-clubs/madhavaraja-club.webp",
    phone: ["0491 2525354"],
    email: [],
  },
  {
    name: "KH Club",
    address:
      "Green City,<br> Kodenchery,<br> Thiruvambady Adivaram Road,<br> Kozhikode - 673580,",
    image: ".assets/affiliated-clubs/kh-club.webp",
    phone: ["+91 6235727170", "+91 6235737170"],
    email: [],
  },
  {
    name: "The Changanacherry Club",
    address:
      "Vazhappally Chira,<br> Changanacherry,<br> Kottayam,<br> Kerala - 686103,",
    image: ".assets/affiliated-clubs/changanacherry-club.webp",
    phone: ["0481 3293365"],
    email: [],
  },
  {
    name: "Brookside Club",
    address: "Kadayiruppu P O,<br> Kolenchery,<br> Ernakulam,",
    image: ".assets/affiliated-clubs/brookside-club.webp",
    phone: ["0484 2760836"],
    email: [
      "thebrooksideclub@gmail.com",
      "president@thebrooksideclub.in",
      "secretary@thebrooksideclub.in",
    ],
  },
  {
    name: "National Club",
    address: "Kumbanad,<br> Vattakottal,<br> Thiruvalla,<br> 689 547 Kerala,",
    image: ".assets/affiliated-clubs/national-club.webp",
    phone: ["0469 2665977"],
    email: ["infor@kumbanadnationalclub.com"],
  },
  {
    name: "RamaVarma Club",
    address:
      "Mo Ward,<br> Alapuzha Hospital,<br> Alappuzha - 688001,<br> Old Medical Clg,",
    image: ".assets/affiliated-clubs/ramavarma-club.webp",
    phone: ["0477 2251436", "0477 2238544"],
    email: [],
  },
  {
    name: "Calicut Cosmopolitan Club",
    address: "Beach Road,<br> Mananchira,<br> Kozhikkode 673 032,<br>Kerala,",
    image: ".assets/affiliated-clubs/calicut-cosmopolitan-club.webp",
    phone: ["0495 2366563", "0495 2366738"],
    email: ["calicutcosmoclub@gmail.com"],
  },
  {
    name: "Belgaum Presidency Club",
    address: "CTS 1019/2A ,<br> Mahantesh Nagar,<br> Belgaum,",
    image: ".assets/affiliated-clubs/belgaum-presidency-club.webp",
    phone: ["+91 6366356971"],
    email: ["info@belgaumpresidency.club"],
  },
  {
    name: "Sreemoolam Union Club",
    address: "Thottumkalpeedika,<br> Muvattupuzha 686 673,<br> Kerala,",
    image: ".assets/affiliated-clubs/sreemoolam-union-club.webp",
    phone: ["0485 2832008", "0485 2836141"],
    email: ["sreemoolamclub@gmail.com"],
  },
  {
    name: "Bekal Club",
    address:
      "Padannakad,<br> Near Railway Gate,<br> Kanhangad,<br> Kasargod,<br> Kerala - 671328,",
    image: ".assets/affiliated-clubs/bakal-club.webp",
    phone: ["0467 2204609", "0467 2499009"],
    email: [],
  },
];

const renderCard = (club) => {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = club["image"];
  img.alt = "";

  const innerDiv = document.createElement("div");
  const h5 = document.createElement("h4");
  const p = document.createElement("p");

  const contactList = document.createElement("ul");

  club.phone.forEach((mail) => {
    const li = document.createElement("li");
    li.className = "phone";
    li.innerText = mail;
    contactList.appendChild(li);
  });
  club.email.forEach((mail) => {
    const li = document.createElement("li");
    li.className = "email";
    li.innerText = mail;
    contactList.appendChild(li);
  });

  h5.textContent = club.name;
  p.innerHTML = club.address;

  innerDiv.append(h5, p, contactList);
  card.append(img, innerDiv);

  return card;
};

const findInput = document.querySelector("#find-input");

function loadData() {
  document.querySelector("#card-board").innerHTML = "";
  const searchResults = clubs.filter((club) =>
    club.name.toLocaleLowerCase().includes(findInput.value.toLocaleLowerCase())
  );
  document.querySelector("#search-results-count").innerText =
    searchResults.length;
  searchResults.forEach((club) => {
    document.querySelector("#card-board").appendChild(renderCard(club));
  });
}

loadData();

findInput.oninput = () => loadData();

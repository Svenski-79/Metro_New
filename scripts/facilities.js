const facilities = [
    {
        name: "Badminton",
        description: "Our state-of-the-art badminton courts provide the perfect environment for both casual and competitive play. Enjoy a game with friends or join our tournaments. The courts are well-maintained and equipped with modern amenities to ensure a great playing experience.",
        image: "assets/facilities/badminton.webp",
        icon: "assets/icons/badminton.svg"
    },
    {
        name: "Snooker",
        description: "Relax and enjoy a game of snooker in our well-equipped snooker room. Perfect for both beginners and seasoned players, our snooker tables are of professional quality, ensuring a smooth and enjoyable game every time.",
        image: "assets/facilities/snooker.webp",
        icon: "assets/icons/snooker.svg"
    },
    {
        name: "Gym",
        description: "Our modern gym is equipped with the latest fitness equipment to help you stay in shape. Personal trainers are available for guidance, and we offer a variety of fitness classes to suit all levels. The gym is spacious and well-ventilated.",
        image: "assets/facilities/gym.webp",
        icon: "assets/icons/kettlebell.svg"
    },
    {
        name: "Waiting Area",
        description: "A comfortable waiting area with plush seating and a calm ambiance. Ideal for relaxing or waiting for your turn at the facilities. The area is designed to provide a peaceful environment with access to refreshments and reading materials.",
        image: "assets/facilities/waiting-area.webp",
        icon: "assets/icons/living-room.svg"
    },
    {
        name: "Swimming Pool",
        description: "Dive into our pristine swimming pool. Whether for a refreshing swim or a relaxing dip, our pool is perfect for all ages. The pool area is equipped with loungers and shaded areas, making it a great spot to unwind.",
        image: "assets/facilities/pool.webp",
        icon: "assets/icons/swimming-pool.svg"
    },
    {
        name: "Permit Room",
        description: "Our permit room offers a selection of beverages in a cozy setting. Perfect for unwinding after a long day, the room is designed to provide a relaxing atmosphere with comfortable seating and a variety of drinks to choose from.",
        image: "assets/facilities/permit-room.webp",
        icon: "assets/icons/chair.svg"
    },
    {
        name: "Private Room",
        description: "Enjoy privacy and comfort in our well-appointed private rooms. Ideal for meetings, small gatherings, or personal relaxation. Each room is equipped with modern amenities to ensure a comfortable and productive stay.",
        image: "assets/facilities/rooms.webp",
        icon: "assets/icons/living-room.svg"
    }
];

const renderSection = (item) => {
    const section = document.createElement('section');
    section.className = 'section';

    const container = document.createElement("div");
    container.className = "container";

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = '';

    const content = document.createElement("div");

    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const icon = document.createElement("img");
    h3.textContent = item.name;
    p.textContent = item.description;
    icon.src = item.icon;

    content.append(icon, h3, p);
    container.append(content, img)
    section.appendChild(container);

    return section;
}

facilities.forEach(facility => {
    document.querySelector("#main").appendChild(renderSection(facility));
}) 
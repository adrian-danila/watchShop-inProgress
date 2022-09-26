const users = [
    {
      id: 1,
      email: "ion@reqres.in",
      first_name: "Ionel",
      last_name: "Popescu",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
      details: "Detalii de spre produs"
    },
    {
      id: 2,
      email: "petrur@reqres.in",
      first_name: "Petru",
      last_name: "Cojocaru",
      avatar: "https://reqres.in/img/faces/2-image.jpg",
      details: "Detalii de spre produs"
    },
    {
      id: 3,
      email: "emma.wong@reqres.in",
      first_name: "Emma",
      last_name: "Wong",
      avatar: "https://reqres.in/img/faces/3-image.jpg",
      details: "Detalii de spre produs"
    },
    {
      id: 4,
      email: "eve.holt@reqres.in",
      first_name: "Eve",
      last_name: "Holt",
      avatar: "https://reqres.in/img/faces/4-image.jpg",
      details: "Detalii de spre produs"
    },
    {
      id: 5,
      email: "charles.morris@reqres.in",
      first_name: "Charles",
      last_name: "Morris",
      avatar: "https://reqres.in/img/faces/5-image.jpg",
      details: "Detalii de spre produs"
    },
    {
      id: 6,
      email: "tracey.ramos@reqres.in",
      first_name: "Tracey",
      last_name: "Ramos",
      avatar: "https://reqres.in/img/faces/6-image.jpg",
      details: "Detalii de spre produs"
    },
    {
      id: 7,
      email: "tracey1.ramos@reqres.in",
      first_name: "Tracey 1",
      last_name: "Ramos 1",
      avatar: "https://reqres.in/img/faces/6-image.jpg",
      details: "Detalii de spre produs"
    }
  ];
  
  const usersContainer = document.getElementById("details");
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  const user = users.find((user) => user.id == productId);
  
  function createUser(name, email, avatar, details) {
    const userContainer = document.createElement("article");
    const imgEl = document.createElement("img");
    const nameEl = document.createElement("div");
    const emailEl = document.createElement("div");
    const detailsEl = document.createElement("div");
    nameEl.textContent = name;
    emailEl.textContent = email;
    imgEl.src = avatar;
    detailsEl.textContent = details;
    userContainer.appendChild(imgEl);
    userContainer.appendChild(nameEl);
    userContainer.appendChild(emailEl);
    userContainer.appendChild(detailsEl);
    return userContainer;
  }
  const { first_name, last_name, email, avatar } = user;
  const userEl = createUser(
    `${first_name} ${last_name}`,
    email,
    avatar,
    user.details
  );
  usersContainer.appendChild(userEl);
  
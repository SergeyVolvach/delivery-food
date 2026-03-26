const modalFunc = () => {
  const modal = document.querySelector(".card-modal__overlay");
  const cardBtn = document.querySelector("#card-button");

  const openModal = () => {
    modal.classList.add("open");
  };

  const closeModal = () => {
    modal.classList.remove("open");
  };

  cardBtn.addEventListener("click", () => {
    openModal();
  });

  modal.addEventListener("click", (event) => {
    console.log();
    if (
      event.target.classList.contains("card-modal__overlay") ||
      event.target.closest(".card-modal__header-close")
    ) {
      closeModal();
    }
  });
};

const restsFunc = () => {
  const container = document.querySelector("#rests-container");

  // console.log(container);
  // container.innerHTML = ''

  const restArray = [
    {
      id: 0,
      title: "Пицца плюс",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: 'pizza plus.jpg'
    },

    {
      id: 1,
      title: "Тануки",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: 'tanuki.jpg'
    },

    {
      id: 2,
      title: "FoodBand",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: 'foodband.jpg'
    },

    {
      id: 3,
      title: "Жадина-пицца",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: 'pizza.jpg'
    },

    {
      id: 4,
      title: "Точка еды",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: 'point.jpg'
    },

    {
      id: 5,
      title: "PizzaBurger",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: 'pizzaburger.jpg'
    },
  ];

  const loading = () => {
    container.innerHTML = "";
  };

  const randerRests = (array) => {
    container.innerHTML = "";

    array.forEach((card) => {
      container.insertAdjacentHTML(
        "beforeend",
        `
            <a href="./goods.html?id=${card.id}" class="products-card">
                            <div class="products-card__image">
                                <img src="./images/restaurants/${card.image}" alt="${card.image}">
                            </div>
                            <div class="products-card__description">
                                <div class="products-card__description-row">
                                    <h4 class="products-card__description-title">${card.title}</h4>
                                    <div class="products-card__description-badge">${card.time}</div>

                                </div>
                                <div class="products-card__description-row">
                                    <div class="products-card__description-info">
                                        <div class="products-card__description-info-rating">
                                            <img src="./images/icons/star.svg" alt="star">${card.rating}
                                        </div>
                                        <div class="products-card__description-info-price">От ${card.price} ₽</div>
                                        <div class="products-card__description-info-group">${card.type}</div>
                                    </div>

                                </div>
                            </div>
            </a>
        `,
      );
    });
  };

  if (container) {
      loading();
    
      setTimeout(() => {
        randerRests(restArray);
      }, 1000)
  }
};

modalFunc();
restsFunc();

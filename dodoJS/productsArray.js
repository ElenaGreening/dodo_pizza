const THIN_DOUGH = 1;
const TRADITIONAL_DOUGH = 2;
export const products = [
  {
    title: "Зенит",
    id: 1,
    ingredients: [
      {
        name: "Пикантная пеперони",
        changeable: true,
      },
      {
        name: "митболы из говядины",
        changeable: true,
      },
      {
        name: "соус песто",
        changeable: false,
      },
      {
        name: "томаты",
        changeable: true,
      },
      {
        name: "красный лук",
        changeable: true,
      },
      {
        name: "моцарелла",
        changeable: false,
      },
      {
        name: "томатный соус",
        changeable: false,
      },
      {
        name: "итальянские травы",
        changeable: true,
      },
    ],
    pizzaSizes: [
      {
        title: "Маленькая",
        size: 25,
        weight: 330,
        price: 395,
        img: {
          traditional: "do-do-pizzas-img copy/zenit/zenit-small.jpeg",
        },
      },
      {
        title: "Средняя",
        size: 30,
        price: 595,
        weight: 480,
        img: {
          thin: "do-do-pizzas-img copy/zenit/zenit-middle-thin.jpeg",
          traditional:
            "do-do-pizzas-img copy/zenit/zenit-middle-traditional.jpeg",
        },
      },
      {
        title: "Большая",
        size: 35,
        weight: 630,
        price: 745,
        img: {
          thin: "do-do-pizzas-img copy/zenit/zenit-big-thin.jpeg",
          traditional: "do-do-pizzas-img copy/zenit/zenit-big-traditional.jpeg",
        },
      },
    ],
    dough: ["тонкое", "традиционное"],
    additionalIngredients: [
      {
        title: "Сырный бортик",
        img: "toppingImg/cheeseborder.png",
        price: {
          small: 169,
          medium: 169,
          big: 189,
        },

        isActive: true,
      },
      {
        title: "Острый халапеньо",
        img: "toppingImg/jalapeno",
        price: {
          small: 29,
          medium: 39,
          big: 49,
        },
        isActive: true,
      },
      {
        title: "Цыпленок",
        img: "toppingImg/chiken.png",
        price: {
          small: 49,
          medium: 59,
          big: 79,
        },
        isActive: true,
      },
      {
        title: "Шампиньоны",
        img: "toppingImg/mashrooms.png",
        price: {
          small: 29,
          medium: 39,
          big: 49,
        },
        isActive: true,
      },
      {
        title: "Острый цыпленок",
        img: "toppingImg/spicyChicken.png",
        price: {
          small: 49,
          medium: 59,
          big: 79,
        },
        isActive: true,
      },
      {
        title: "Чеддер и пармезан",
        img: "toppingImg/ParmesanCheddar",
        price: {
          small: 49,
          medium: 59,
          big: 79,
        },
        isActive: true,
      },
    ],
    nutritionVal: {
      traditional: [
        {
          cal: 270.4,
          protein: 10.3,
          fat: 12.5,
          carbo: 27.3,
          weight: 440,
          size: 25,
        },
        {
          cal: 262,
          protein: 10.4,
          fat: 11.9,
          carbo: 26.5,
          weight: 670,
          size: 30,
        },
        {
          cal: 255.7,
          protein: 10.7,
          fat: 12,
          carbo: 24.4,
          weight: 980,
          size: 35,
        },
      ],

      thin: [
        {
          cal: 270.4,
          protein: 10.3,
          fat: 12.5,
          carbo: 27.3,
          weight: 440,
          size: 25,
        },
        {
          cal: 262,
          protein: 10.4,
          fat: 11.9,
          carbo: 26.5,
          weight: 670,
          size: 30,
        },
        {
          cal: 255.7,
          protein: 10.7,
          fat: 12,
          carbo: 24.4,
          weight: 980,
          size: 35,
        },
      ],
    },
  },
  {
    title: "Додо Микс",
    id: 2,
    ingredients: [
      {
        name: "Бекон",
        changeable: true,
      },
      {
        name: "цыпленок",
        changeable: true,
      },
      {
        name: "ветчина",
        changeable: true,
      },
      {
        name: "сыр блю чиз",
        changeable: true,
      },
      {
        name: "сыры чеддер и пармезан",
        changeable: true,
      },
      {
        name: "соус песто",
        changeable: false,
      },
      {
        name: "кубики брынзы",
        changeable: true,
      },
      {
        name: "томаты черри",
        changeable: true,
      },
      {
        name: "красный лук",
        changeable: true,
      },
      {
        name: "моцарелла",
        changeable: false,
      },
      {
        name: "соус альфредо",
        changeable: false,
      },
      {
        name: "чеснок",
        changeable: true,
      },
      {
        name: "итальянские травы",
        changeable: true,
      },
    ],
    pizzaSizes: [
      {
        title: "Маленькая",
        size: 25,
        price: 445,
        weight: 440,
        img: {
          thin: "#",
          traditional: "dodo-mix/dodo-mix-small.jpeg",
        },
      },
      {
        title: "Средняя",
        size: 30,
        weight: 670,
        price: 665,
        img: {
          thin: "dodo-mix/dodo-mix-middle-thin.jpeg",
          traditional: "dodo-mix/dodo-mix-middle-traditional.jpeg",
        },
      },
      {
        title: "Большая",
        size: 35,
        weight: 980,
        price: 785,
        img: {
          thin: "dodo-mix/dodo-mix-big-thin.jpeg",
          traditional: "dodo-mix/dodo-mix-big-traditional.jpeg",
        },
      },
    ],
    dough: ["traditional", "thin"],
    additionalIngredients: [],
    nutritionVal: {
      traditional: [
        {
          cal: 270.4,
          protein: 10.3,
          fat: 12.5,
          carbo: 27.3,
          weight: 440,
          size: 25,
        },
        {
          cal: 262,
          protein: 10.4,
          fat: 11.9,
          carbo: 26.5,
          weight: 670,
          size: 30,
        },
        {
          cal: 255.7,
          protein: 10.7,
          fat: 12,
          carbo: 24.4,
          weight: 980,
          size: 35,
        },
      ],

      thin: [
        {
          cal: 270.4,
          protein: 10.3,
          fat: 12.5,
          carbo: 27.3,
          weight: 440,
          size: 25,
        },
        {
          cal: 262,
          protein: 10.4,
          fat: 11.9,
          carbo: 26.5,
          weight: 670,
          size: 30,
        },
        {
          cal: 255.7,
          protein: 10.7,
          fat: 12,
          carbo: 24.4,
          weight: 980,
          size: 35,
        },
      ],
    },
  },

  {
    title: "Чиззи чеддер",
    id: 3,
    ingredients: [
      {
        name: "ветчина",
        changeable: true,
      },
      {
        name: "сыр чеддер",
        changeable: false,
      },
      {
        name: "сладкий перец",
        changeable: true,
      },
      {
        name: "моцарелла",
        changeable: false,
      },
      {
        name: "томатный соус",
        changeable: false,
      },
      {
        name: "чеснок",
        changeable: true,
      },
      {
        name: "итальянские травы",
        changeable: true,
      },
    ],
    pizzaSizes: [
      {
        title: "Маленькая",
        size: 25,
        weight: 330,
        price: 444,
        img: {
          thin: "",
          traditional: "cheesy-cheddar/cheesy-chadder-small.jpeg",
        },
      },
      {
        title: "Средняя",
        size: 30,
        weight: 480,
        price: 654,
        img: {
          thin: "cheesy-cheddar/cheesy-chadder-middle-thin.jpeg",
          traditional: "cheesy-cheddar/cheesy-chadder-middle-traditional.jpeg",
        },
      },
      {
        title: "Большая",
        size: 35,
        weight: 630,
        price: 824,
        img: {
          thin: "cheesy-cheddar/cheesy-chadder-big-thin.jpeg",
          traditional: "cheesy-cheddar/cheesy-chadder-big-traditional.jpeg",
        },
      },
    ],
    dough: ["traditional", "thin"],
    additionalIngredients: [
      {
        title: "Сырный бортик",
        img: "toppingImg/cheeseborder.png",
        price: {
          small: 169,
          medium: 169,
          big: 189,
        },
        isActive: true,
      },
      {
        title: "Шампиньоны",
        img: "toppingImg/mashrooms.png",
        price: {
          small: 29,
          medium: 39,
          big: 49,
        },
        isActive: true,
      },
      {
        title: "Цыпленок",
        img: "toppingImg/chiken.png",
        price: {
          small: 49,
          medium: 59,
          big: 79,
        },
        isActive: true,
      },
      {
        title: "Брынза",
        img: "toppingImg/goatCheese.png",
        price: {
          small: 49,
          medium: 59,
          big: 79,
        },
        isActive: true,
      },
      {
        title: "Острый халапеньо",
        img: "toppingImg/jalapeno",
        price: {
          small: 29,
          medium: 39,
          big: 49,
        },
        isActive: true,
      },
      {
        title: "Острый цыпленок",
        img: "toppingImg/spicyChicken.png",
        price: {
          small: 49,
          medium: 59,
          big: 79,
        },
        isActive: true,
      },
    ],
    nutritionVal: {
      traditional: [
        {
          cal: 270.4,
          protein: 10.3,
          fat: 12.5,
          carbo: 27.3,
          weight: 440,
          size: 25,
        },
        {
          cal: 262,
          protein: 10.4,
          fat: 11.9,
          carbo: 26.5,
          weight: 670,
          size: 30,
        },
        {
          cal: 255.7,
          protein: 10.7,
          fat: 12,
          carbo: 24.4,
          weight: 980,
          size: 35,
        },
      ],

      thin: [
        {
          cal: 270.4,
          protein: 10.3,
          fat: 12.5,
          carbo: 27.3,
          weight: 440,
          size: 25,
        },
        {
          cal: 262,
          protein: 10.4,
          fat: 11.9,
          carbo: 26.5,
          weight: 670,
          size: 30,
        },
        {
          cal: 255.7,
          protein: 10.7,
          fat: 12,
          carbo: 24.4,
          weight: 980,
          size: 35,
        },
      ],
    },
  },
  {
    title: "Цезарь",
    id: 4,
    ingredients: [
      {
        name: "Свежие листья салата айсберг,",
        changeable: false,
      },
      {
        name: "цыпленок",
        changeable: true,
      },
      {
        name: "томаты черри",
        changeable: true,
      },
      {
        name: "сыры чеддер и пармезан",
        changeable: false,
      },
      {
        name: "моцарелла",
        changeable: false,
      },
      {
        name: "соус альфредо",
        changeable: false,
      },
      {
        name: "соус цезарь",
        changeable: false,
      },
    ],
    pizzaSizes: [
      {
        title: "Маленькая",
        size: 25,
        weight: 480,
        price: 445,
        img: {
          thin: "#",
          traditional: "cezar/cezar-traditional-small.jpeg",
        },
      },
      {
        title: "Средняя",
        size: 30,
        weight: 640,
        price: 665,
        img: {
          thin: "cezar/cezar-thin-medium.jpeg",
          traditional: "cezar/cezar-traditional-medium.jpeg",
        },
      },
      {
        title: "Большая",
        size: 35,
        weight: 870,
        price: 785,
        img: {
          thin: "#",
          traditional: "#",
        },
      },
    ],
    dough: ["traditional", "thin"],
    additionalIngredients: [
      {
        title: "Сырный бортик",
        img: "toppingImg/cheeseborder.png",
        price: {
          small: 0,
          medium: 169,
          big: 189,
        },
        isActive: true,
      },
      {
        title: "Острый халапеньо",
        img: "toppingImg/jalapeno",
        price: {
          small: 29,
          medium: 39,
          big: 49,
        },
        isActive: true,
      },
      {
        title: "Цыпленок",
        img: "toppingImg/chiken.png",
        price: {
          small: 49,
          medium: 59,
          big: 79,
        },
        isActive: true,
      },
      {
        title: "Ветчина",
        img: "toppingImg/ham",
        price: {
          small: 49,
          medium: 59,
          big: 79,
        },
        isActive: true,
      },
      {
        title: "Острый цыпленок",
        img: "toppingImg/spicyChicken.png",
        price: {
          small: 49,
          medium: 59,
          big: 79,
        },
        isActive: true,
      },
      {
        title: "Острая чоризо",
        img: "toppingImg/chorizo",
        price: {
          small: 49,
          medium: 59,
          big: 79,
        },
        isActive: true,
      },
    ],
    nutritionVal: {
      traditional: [
        {
          cal: 270.4,
          protein: 10.3,
          fat: 12.5,
          carbo: 27.3,
          weight: 440,
          size: 25,
        },
        {
          cal: 262,
          protein: 10.4,
          fat: 11.9,
          carbo: 26.5,
          weight: 670,
          size: 30,
        },
        {
          cal: 255.7,
          protein: 10.7,
          fat: 12,
          carbo: 24.4,
          weight: 980,
          size: 35,
        },
      ],

      thin: [
        {
          cal: 270.4,
          protein: 10.3,
          fat: 12.5,
          carbo: 27.3,
          weight: 440,
          size: 25,
        },
        {
          cal: 262,
          protein: 10.4,
          fat: 11.9,
          carbo: 26.5,
          weight: 670,
          size: 30,
        },
        {
          cal: 255.7,
          protein: 10.7,
          fat: 12,
          carbo: 24.4,
          weight: 980,
          size: 35,
        },
      ],
    },
  },
  {
    title: "Цыпленок блю чиз",
    id: 5,
    ingredients: [
      {
        name: "Цыпленок",
        changeable: true,
      },
      {
        name: "сыр блю чиз",
        changeable: true,
      },
      {
        name: "томаты",
        changeable: true,
      },
      {
        name: "моцарелла",
        changeable: false,
      },
      {
        name: "соус альфредо ",
        changeable: false,
      },
    ],
    pizzaSizes: [
      {
        title: "Маленькая",
        size: 25,
        weight: 410,
        price: 395,
        img: {
          thin: "#",
          traditional:
            "chickenBlueCheese/chickenBlueCheese-traditional-small.jpeg",
        },
      },
      {
        title: "Средняя",
        size: 30,
        weight: 610,
        price: 595,
        img: {
          thin: "chickenBlueCheese/chickenBlueCheese-thin-medium.jpeg",
          traditional:
            "chickenBlueCheese/chickenBlueCheese-traditional-medium.jpeg",
        },
      },
      {
        title: "Большая",
        size: 35,
        weight: 830,
        price: 745,
        img: {
          thin: "chickenBlueCheese/chickenBlueCheese-thin-big.jpeg",
          traditional:
            "chickenBlueCheese/chickenBlueCheese-traditional-big.jpeg",
        },
      },
    ],
    dough: ["traditional", "thin"],
    additionalIngredients: [
      {
        title: "Сырный бортик",
        img: "toppingImg/cheeseborder.png",
        price: {
          small: 0,
          medium: 169,
          big: 189,
        },
        isActive: true,
      },
      {
        title: "Ветчина",
        img: "toppingImg/ham",
        price: {
          small: 49,
          medium: 59,
          big: 79,
        },
        isActive: true,
      },
      {
        title: "Острый халапеньо",
        img: "toppingImg/jalapeno",
        price: {
          small: 29,
          medium: 39,
          big: 49,
        },
        isActive: true,
      },
      {
        title: "Чеддер и пармезан",
        img: "toppingImg/ParmesanCheddar",
        price: {
          small: 49,
          medium: 59,
          big: 79,
        },
        isActive: true,
      },
      {
        title: "Острый цыпленок",
        img: "toppingImg/spicyChicken.png",
        price: {
          small: 49,
          medium: 59,
          big: 79,
        },
        isActive: true,
      },
    ],
    nutritionVal: {
      traditional: [
        {
          cal: 270.4,
          protein: 10.3,
          fat: 12.5,
          carbo: 27.3,
          weight: 440,
          size: 25,
        },
        {
          cal: 262,
          protein: 10.4,
          fat: 11.9,
          carbo: 26.5,
          weight: 670,
          size: 30,
        },
        {
          cal: 255.7,
          protein: 10.7,
          fat: 12,
          carbo: 24.4,
          weight: 980,
          size: 35,
        },
      ],

      thin: [
        {
          cal: 270.4,
          protein: 10.3,
          fat: 12.5,
          carbo: 27.3,
          weight: 440,
          size: 25,
        },
        {
          cal: 262,
          protein: 10.4,
          fat: 11.9,
          carbo: 26.5,
          weight: 670,
          size: 30,
        },
        {
          cal: 255.7,
          protein: 10.7,
          fat: 12,
          carbo: 24.4,
          weight: 980,
          size: 35,
        },
      ],
    },
  },
  {
    title: "Сырная",
    id: 6,
    ingredients: [
      {
        name: "Увеличенная порция моцареллы",
        changeable: false,
      },
      {
        name: "сыры чеддер и пармезан ",
        changeable: false,
      },
      {
        name: "cоус альфредо",
        changeable: false,
      },
    ],
    pizzaSizes: [
      {
        title: "Маленькая",
        size: 25,
        weight: 360,
        price: 395,
        img: {
          thin: "#",
          traditional: "cheese/cheese-traditional-small.jpeg",
        },
      },
      {
        title: "Средняя",
        size: 30,
        weight: 540,
        price: 595,
        img: {
          thin: "cheese/cheese-thin-medium.jpeg",
          traditional: "cheese/cheese-traditional-medium.jpeg",
        },
      },
      {
        title: "Большая",
        size: 35,
        weight: 710,
        price: 745,
        img: {
          thin: "cheese/cheese-thin-big.jpeg",
          traditional: "cheese/cheese-traditional-big.jpeg",
        },
      },
    ],
    dough: ["traditional", "thin"],
    additionalIngredients: [
      {
        title: "Сырный бортик",
        img: "toppingImg/cheeseborder.png",
        price: {
          small: 0,
          medium: 169,
          big: 189,
        },
        isActive: true,
      },
      {
        title: "Ветчина",
        img: "toppingImg/ham",
        price: {
          small: 49,
          medium: 59,
          big: 79,
        },
        isActive: true,
      },
      {
        title: "Цыпленок",
        img: "toppingImg/chiken.png",
        price: {
          small: 49,
          medium: 59,
          big: 79,
        },
        isActive: true,
      },
      {
        title: "Брынза",
        img: "toppingImg/goatCheese.png",
        price: {
          small: 49,
          medium: 59,
          big: 79,
        },
        isActive: true,
      },
      {
        title: "Острый цыпленок",
        img: "toppingImg/spicyChicken.png",
        price: {
          small: 49,
          medium: 59,
          big: 79,
        },
        isActive: true,
      },
      {
        title: "Томаты",
        img: "toppingImg/tomato",
        price: {
          small: 29,
          medium: 39,
          big: 49,
        },
        isActive: true,
      },
    ],
    nutritionVal: {
      traditional: [
        {
          cal: 270.4,
          protein: 10.3,
          fat: 12.5,
          carbo: 27.3,
          weight: 440,
          size: 25,
        },
        {
          cal: 262,
          protein: 10.4,
          fat: 11.9,
          carbo: 26.5,
          weight: 670,
          size: 30,
        },
        {
          cal: 255.7,
          protein: 10.7,
          fat: 12,
          carbo: 24.4,
          weight: 980,
          size: 35,
        },
      ],

      thin: [
        {
          cal: 270.4,
          protein: 10.3,
          fat: 12.5,
          carbo: 27.3,
          weight: 440,
          size: 25,
        },
        {
          cal: 262,
          protein: 10.4,
          fat: 11.9,
          carbo: 26.5,
          weight: 670,
          size: 30,
        },
        {
          cal: 255.7,
          protein: 10.7,
          fat: 12,
          carbo: 24.4,
          weight: 980,
          size: 35,
        },
      ],
    },
  },
  {
    title: "Пепперони фреш",
    id: 7,
    ingredients: [
      {
        name: "Пикантная пеперони",
        changeable: true,
      },
      {
        name: "увеличенная порция моцареллы",
        changeable: false,
      },
      {
        name: "томаты",
        changeable: true,
      },
      {
        name: "томатный соус",
        changeable: false,
      },
    ],
    pizzaSizes: [
      {
        title: "Маленькая",
        size: 25,
        weight: 410,
        price: 395,
        img: {
          thin: "#",
          traditional: "pepperoniFresh/pepperoniFresh-traditional-small.jpeg",
        },
      },
      {
        title: "Средняя",
        size: 30,
        weight: 610,
        price: 595,
        img: {
          thin: "pepperoniFresh/pepperoniFresh-thin-medium.jpeg",
          traditional: "pepperoniFresh/pepperoniFresh-traditional-medium.jpeg",
        },
      },
      {
        title: "Большая",
        size: 35,
        weight: 800,
        price: 745,
        img: {
          thin: "pepperoniFresh/pepperoniFresh-thin-big.jpeg",
          traditional: "pepperoniFresh/pepperoniFresh-traditional-big.jpeg",
        },
      },
    ],
    dough: ["traditional", "thin"],
    additionalIngredients: [
      {
        title: "Сырный бортик",
        img: "toppingImg/cheeseborder.png",
        price: {
          small: 0,
          medium: 169,
          big: 189,
        },
        isActive: true,
      },
      {
        title: "Острый халапеньо",
        img: "toppingImg/jalapeno",
        price: {
          small: 29,
          medium: 39,
          big: 49,
        },
        isActive: true,
      },
      {
        title: "Ветчина",
        img: "toppingImg/ham",
        price: {
          small: 49,
          medium: 59,
          big: 79,
        },
        isActive: true,
      },
      {
        title: "Чедер и пармезан",
        img: "toppingImg/ParmesanCheddar",
        price: {
          small: 49,
          medium: 59,
          big: 79,
        },
        isActive: true,
      },
      {
        title: "Острый цыпленок",
        img: "toppingImg/spicyChicken.png",
        price: {
          small: 49,
          medium: 59,
          big: 79,
        },
        isActive: true,
      },
      {
        title: "Шампиньоны",
        img: "toppingImg/mashrooms.png",
        price: {
          small: 29,
          medium: 39,
          big: 49,
        },
        isActive: true,
      },
    ],
    nutritionVal: {
      traditional: [
        {
          cal: 270.4,
          protein: 10.3,
          fat: 12.5,
          carbo: 27.3,
          weight: 440,
          size: 25,
        },
        {
          cal: 262,
          protein: 10.4,
          fat: 11.9,
          carbo: 26.5,
          weight: 670,
          size: 30,
        },
        {
          cal: 255.7,
          protein: 10.7,
          fat: 12,
          carbo: 24.4,
          weight: 980,
          size: 35,
        },
      ],

      thin: [
        {
          cal: 270.4,
          protein: 10.3,
          fat: 12.5,
          carbo: 27.3,
          weight: 440,
          size: 25,
        },
        {
          cal: 262,
          protein: 10.4,
          fat: 11.9,
          carbo: 26.5,
          weight: 670,
          size: 30,
        },
        {
          cal: 255.7,
          protein: 10.7,
          fat: 12,
          carbo: 24.4,
          weight: 980,
          size: 35,
        },
      ],
    },
  },
  {
    title: "Кисло-сладкий цыпленок",
    id: 8,
    ingredients: [
      {
        name: "Цыпленок",
        changeable: true,
      },
      {
        name: "кислосладкий соус",
        changeable: false,
      },
      {
        name: "моцарелла",
        changeable: false,
      },
      {
        name: "томатный соус",
        changeable: false,
      },
    ],
    pizzaSizes: [
      {
        title: "Маленькая",
        size: 25,
        weight: 370,
        price: 295,
        img: {
          thin: "#",
          traditional: "sweet&sour-chicken/sweet&sour-chicken-small.jpg",
        },
      },
      {
        title: "Средняя",
        size: 30,
        weight: 540,
        price: 435,
        img: {
          thin: "sweet&sour-chicken/sweet&sour-chicken-middle-thin.jpg",
          traditional:
            "sweet&sour-chicken/sweet&sour-chicken-middle-traditional.jpg",
        },
      },
      {
        title: "Большая",
        size: 35,
        weight: 720,
        price: 575,
        img: {
          thin: "sweet&sour-chicken/sweet&sour-chicken-big-thin.jpg",
          traditional:
            "sweet&sour-chicken/sweet&sour-chicken-big-traditional.jpg",
        },
      },
    ],
    dough: ["traditional", "thin"],
    additionalIngredients: [
      {
        title: "Сырный бортик",
        img: "toppingImg/cheeseborder.png",
        price: {
          small: 0,
          medium: 169,
          big: 189,
        },
        isActive: true,
      },
      {
        title: "Моцарелла",
        img: "toppingImg/mozarela",
        price: {
          small: 49,
          medium: 59,
          big: 79,
        },
        isActive: true,
      },
      {
        title: "Сладкий перец",
        img: "toppingImg/bellPepper",
        price: {
          small: 29,
          medium: 39,
          big: 49,
        },
        isActive: true,
      },
      {
        title: "Острый халапеньо",
        img: "toppingImg/jalapeno",
        price: {
          small: 29,
          medium: 39,
          big: 49,
        },
        isActive: true,
      },
      {
        title: "Острый цыпленок",
        img: "toppingImg/spicyChicken.png",
        price: {
          small: 49,
          medium: 59,
          big: 79,
        },
        isActive: true,
      },
      {
        title: "Ветчина",
        img: "toppingImg/ham",
        price: {
          small: 49,
          medium: 59,
          big: 79,
        },
        isActive: true,
      },
    ],
    nutritionVal: {
      traditional: [
        {
          cal: 270.4,
          protein: 10.3,
          fat: 12.5,
          carbo: 27.3,
          weight: 440,
          size: 25,
        },
        {
          cal: 262,
          protein: 10.4,
          fat: 11.9,
          carbo: 26.5,
          weight: 670,
          size: 30,
        },
        {
          cal: 255.7,
          protein: 10.7,
          fat: 12,
          carbo: 24.4,
          weight: 980,
          size: 35,
        },
      ],

      thin: [
        {
          cal: 270.4,
          protein: 10.3,
          fat: 12.5,
          carbo: 27.3,
          weight: 440,
          size: 25,
        },
        {
          cal: 262,
          protein: 10.4,
          fat: 11.9,
          carbo: 26.5,
          weight: 670,
          size: 30,
        },
        {
          cal: 255.7,
          protein: 10.7,
          fat: 12,
          carbo: 24.4,
          weight: 980,
          size: 35,
        },
      ],
    },
  },
  {
    title: "Ветчина и сыр",
    id: 9,
    ingredients: [
      {
        name: "Ветчина",
        changeable: true,
      },
      {
        name: "моцарелла",
        changeable: false,
      },
      {
        name: "соус альфредо",
        changeable: false,
      },
    ],
    pizzaSizes: [
      {
        title: "Маленькая",
        size: 25,
        weight: 330,
        price: 395,
        img: {
          thin: "#",
          traditional: "&4. Path From Repository Root",
        },
      },
      {
        title: "Средняя",
        size: 30,
        weight: 380,
        price: 595,
        img: {
          thin: "ham&cheese/ham&cheese-middle-thin.jpg",
          traditional: "ham&cheese/ham&cheese-middle-traditional.jpg",
        },
      },
      {
        title: "Большая",
        size: 35,
        weight: 610,
        price: 745,
        img: {
          thin: "ham&cheese/ham&cheese-big-thin.jpg",
          traditional: "ham&cheese/ham&cheese-big-traditional.jpg",
        },
      },
    ],
    dough: ["traditional", "thin"],
    additionalIngredients: [
      {
        title: "Сырный бортик",
        img: "toppingImg/cheeseborder.png",
        price: {
          small: 0,
          medium: 169,
          big: 189,
        },
        isActive: true,
      },
      {
        title: "Чедер и пармезан",
        img: "toppingImg/ParmesanCheddar",
        price: {
          small: 49,
          medium: 59,
          big: 79,
        },
        isActive: true,
      },
      {
        title: "Цыпленок",
        img: "toppingImg/chiken.png",
        price: {
          small: 49,
          medium: 59,
          big: 79,
        },
        isActive: true,
      },
      {
        title: "Шампиньоны",
        img: "toppingImg/mashrooms.png",
        price: {
          small: 29,
          medium: 39,
          big: 49,
        },
        isActive: true,
      },
      {
        title: "Острый цыпленок",
        img: "toppingImg/spicyChicken.png",
        price: {
          small: 49,
          medium: 59,
          big: 79,
        },
        isActive: true,
      },
      {
        title: "Брынза",
        img: "toppingImg/goatCheese.png",
        price: {
          small: 49,
          medium: 59,
          big: 79,
        },
        isActive: true,
      },
    ],
    nutritionVal: {
      traditional: [
        {
          cal: 270.4,
          protein: 10.3,
          fat: 12.5,
          carbo: 27.3,
          weight: 440,
          size: 25,
        },
        {
          cal: 262,
          protein: 10.4,
          fat: 11.9,
          carbo: 26.5,
          weight: 670,
          size: 30,
        },
        {
          cal: 255.7,
          protein: 10.7,
          fat: 12,
          carbo: 24.4,
          weight: 980,
          size: 35,
        },
      ],

      thin: [
        {
          cal: 270.4,
          protein: 10.3,
          fat: 12.5,
          carbo: 27.3,
          weight: 440,
          size: 25,
        },
        {
          cal: 262,
          protein: 10.4,
          fat: 11.9,
          carbo: 26.5,
          weight: 670,
          size: 30,
        },
        {
          cal: 255.7,
          protein: 10.7,
          fat: 12,
          carbo: 24.4,
          weight: 980,
          size: 35,
        },
      ],
    },
  },
  {
    title: "Ветчина и грибы",
    id: 10,
    ingredients: [
      {
        name: "Ветчина ",
        changeable: false,
      },
      {
        name: "шампиньоны ",
        changeable: false,
      },
      {
        name: "увеличенная порция моцареллы",
        changeable: false,
      },
      {
        name: "томатный соус ",
        changeable: false,
      },
    ],
    pizzaSizes: [
      {
        title: "Маленькая",
        size: 25,
        weight: 410,
        price: 345,
        img: {
          thin: "#",
          traditional: "ham&mushrooms/ham&mushrooms-small.jpeg",
        },
      },
      {
        title: "Средняя",
        size: 30,
        weight: 600,
        price: 495,
        img: {
          thin: "ham&mushrooms/ham&mushrooms-middle-thin.jpeg",
          traditional: "ham&mushrooms/ham&mushrooms-middle-traditional.jpeg",
        },
      },
      {
        title: "Большая",
        size: 35,
        weight: 790,
        price: 645,
        img: {
          thin: "ham&mushrooms/ham&mushrooms-big-thin.jpeg",
          traditional: "ham&mushrooms/ham&mushrooms-big-traditional.jpeg",
        },
      },
    ],
    dough: ["traditional", "thin"],
    additionalIngredients: [
      {
        title: "Сырный бортик",
        img: "toppingImg/cheeseborder.png",
        price: {
          small: 0,
          medium: 179,
          big: 189,
        },
        isActive: true,
      },
      {
        title: "Острый халапеньо",
        img: "toppingImg/jalapeno",
        price: {
          small: 29,
          medium: 39,
          big: 49,
        },
        isActive: true,
      },
      {
        title: "Шампиньоны",
        img: "toppingImg/mashrooms.png",
        price: {
          small: 29,
          medium: 39,
          big: 49,
        },
        isActive: true,
      },
      {
        title: "Цыпленок",
        img: "toppingImg/chiken.png",
        price: {
          small: 49,
          medium: 59,
          big: 79,
        },
        isActive: true,
      },
      {
        title: "Острый цыпленок",
        img: "toppingImg/spicyChicken.png",
        price: {
          small: 49,
          medium: 59,
          big: 79,
        },
        isActive: true,
      },
      {
        title: "Чедер и пармезан",
        img: "toppingImg/ParmesanCheddar",
        price: {
          small: 49,
          medium: 59,
          big: 79,
        },
        isActive: true,
      },
    ],
    nutritionVal: {
      traditional: [
        {
          cal: 270.4,
          protein: 10.3,
          fat: 12.5,
          carbo: 27.3,
          weight: 440,
          size: 25,
        },
        {
          cal: 262,
          protein: 10.4,
          fat: 11.9,
          carbo: 26.5,
          weight: 670,
          size: 30,
        },
        {
          cal: 255.7,
          protein: 10.7,
          fat: 12,
          carbo: 24.4,
          weight: 980,
          size: 35,
        },
      ],

      thin: [
        {
          cal: 270.4,
          protein: 10.3,
          fat: 12.5,
          carbo: 27.3,
          weight: 440,
          size: 25,
        },
        {
          cal: 262,
          protein: 10.4,
          fat: 11.9,
          carbo: 26.5,
          weight: 670,
          size: 30,
        },
        {
          cal: 255.7,
          protein: 10.7,
          fat: 12,
          carbo: 24.4,
          weight: 980,
          size: 35,
        },
      ],
    },
  },
];

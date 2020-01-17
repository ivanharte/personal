const featured = {
    featured: [0, 1, 2],        //array of ids of featured entries
    activeID: 1
};

const entries = [
    /*----------- MODELO ---------------------------
    {
        id: 0   //autogenerado, igual a posición en array
        date: "2020-01-16",
        title: "Torta de zanahoria sin gluten con cobertura de crema de coco",
            //ver si coincide con metadato HTML, y si puede ser igual que primer párrafo
        description: "Una deliciosa variante de la clásica carrot cake apta para personas celíacas y con intolerancia al gluten. Ideal como postre o para acompañar un té.",
        type: "receta", //si no: "articulo"
        category: "receta", //otras: nutrición, veganismo, barcelona
        mainTopic: "torta de zanahoria",
        tags: ["zanahoria", "torta", "merienda", "postre", "té", "sin gluten", "celíacos"],
        URL: "2020-01-16-receta-torta-de-zanahoria-sin-gluten-con-cobertura-de-crema-de-coco.html", //autogenerado
        thumbnail: {
            large: "2020-01-2016-torta-de-zanahoria-thumbnail-large.jpg", //autogenerado
            small: "2020-01-2016-torta-de-zanahoria-thumbnail-small.jpg", //autogenerado
            altText: "Porción de torta de zanahoria presentada con una taza de té"
        },
        images: [   //autogenerado
            {
                url: "2020-01-2016-algunos-ingredientes-de-la-torta-de-zanahoria.jpg",
                alt: "Algunos ingredientes de la torta de zanahoria: zanahorias, harina sin gluten, leche vegetal, azúcar."
            }
        ],
        ingredients: ["zanahoria", "harina sin gluten", "leche vegetal", "aceite de coco", "azúcar"]
    }, ----------------------------------------------*/
    {
        id: 0,
        date: "2020-01-05",
        title: "Fajitas de vegetales",
        description: "Una combinación de vegetales y salsas veganas únicas para rellenar fajitas de estilo mexicano",
        type: "",
        category: "",
        mainTopic: "",
        tags: [],
        URL: "2020-01-05-fajitas-de-vegetales.html",
        thumbnail: {
            large: "2020-01-05-fajitas-de-vegetales-large.jpg",
            small: "2020-01-05-fajitas-de-vegetales-small.jpg",
            altText: "Fajitas de vegetales servidas en una bandeja"
        },
        images: [],
        ingredients: []
    },
    {
        id: 1,
        date: "2020-01-12",
        title: "Tapas veganas",
        description: "Una selección de platillos veganos para acompañar las cervezas de la tardecita",
        type: "",
        category: "",
        mainTopic: "",
        tags: [],
        URL: "2020-01-12-tapas-veganas.html",
        thumbnail: {
            large: "2020-01-12-tapas-veganas-large.jpg",
            small: "2020-01-12-tapas-veganas-small.jpg",
            altText: "Tapas veganas presentadas sobre una bandeja"
        },
        images: [],
        ingredients: []
    },
    {
        id: 2,
        date: "2020-01-16",
        title: "Ensalada de kale",
        description: "Una deliciosa y nutritiva ensalada de kale para acompañar cualquier plato principal",
        type: "",
        category: "",
        mainTopic: "",
        tags: [],
        URL: "2020-01-16-ensalada-de-kale.html",
        thumbnail: {
            large: "2020-01-16-ensalada-de-kale-large.jpg",
            small: "2020-01-16-ensalada-de-kale-small.jpg",
            altText: "Bowl de ensalada kale"
        },
        images: [],
        ingredients: []
    }
    
];
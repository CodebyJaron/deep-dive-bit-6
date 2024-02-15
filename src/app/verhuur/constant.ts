export interface ProductFeature {
    name: string;
}

export interface Product {
    name: string;
    price: number;
    description: string;
    image: string;

    features: ProductFeature[];
}

export const products: Product[] = [
    {
        name: "Picknicktafel Set",
        price: 100,
        description:
            "Een complete picknicktafel set, ideaal voor gezellige buitendiners met familie en vrienden.",
        image: "/images/biertafel.png",
        features: [
            {
                name: "1 tafel",
            },
            {
                name: "2 banken",
            },
        ],
    },
    {
        name: "Terrasverwarmer",
        price: 150,
        description:
            "Een krachtige terrasverwarmer om zelfs op koele avonden warmte en gezelligheid te bieden tijdens buitenbijeenkomsten.",
        image: "/images/biertafel.png",
        features: [
            {
                name: "Verwarmingselement",
            },
            {
                name: "Instelbare warmtestanden",
            },
        ],
    },
    {
        name: "Opklapbare Partytent",
        price: 200,
        description:
            "Een handige opklapbare partytent om feestjes te organiseren in de tuin of op het strand, ongeacht het weer.",
        image: "/images/biertafel.png",
        features: [
            {
                name: "Waterdicht materiaal",
            },
            {
                name: "Stevig stalen frame",
            },
        ],
    },
    {
        name: "Tuinbarbecue",
        price: 120,
        description:
            "Een robuuste tuinbarbecue, perfect voor het grillen van heerlijke maaltijden en het creëren van mooie herinneringen met vrienden en familie.",
        image: "//images/biertafel.png",
        features: [
            {
                name: "Groot kookoppervlak",
            },
            {
                name: "Verstelbare grillroosters",
            },
        ],
    },
    {
        name: "Hangmat met standaard",
        price: 90,
        description:
            "Een comfortabele hangmat met stevige standaard, ideaal om te ontspannen en tot rust te komen in je tuin of op het terras.",
        image: "/images/biertafel.png",
        features: [
            {
                name: "Duurzaam katoenen doek",
            },
            {
                name: "Stabiele metalen standaard",
            },
        ],
    },
];

interface ProductFeature {
    name: string;
}

interface Product {
    name: string;
    price: number;
    description: string;
    image: string;

    features: ProductFeature[];
}

export const products: Product[] = [
    {
        name: "Biertafel + banken",
        price: 80,
        description:
            "Biertafel + banken perfect voor al je vrienden om 1 pilsje te drinken.",
        image: "ja",
        features: [
            {
                name: "2 banken",
            },
            {
                name: "1 tafel",
            },
        ],
    },
];

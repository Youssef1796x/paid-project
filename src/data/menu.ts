export type MenuCategory = {
  id: string;
  name: string;
};

export type MenuItem = {
  id: string;
  category: string;
  name: string;
  description: string;
  price: number;
  image: string;
  available: boolean;
};

export const menuCategories: MenuCategory[] = [
  {
    id: "burger",
    name: "برجر",
  },
  {
    id: "sandwiches",
    name: "ساندوتشات",
  },
  {
    id: "savory-crepe",
    name: "كريب حادق",
  },
  {
    id: "sweet-crepe",
    name: "كريب حلو",
  },
];

export const menuItems: MenuItem[] = [
  {
    id: "chicken-hill",
    category: "burger",
    name: "تشيكن هيل",
    description: "قطع دجاج مقرمشة وحارة مع صوص الشيدر والهالبينو",
    price: 130,
    image: "/images/menu/برجر/تشيكن هيل.jpg",
    available: true,
  },
  {
    id: "classic-burger",
    category: "burger",
    name: "كلاسيك برجر",
    description: "قطعة برجر لحم مع جبنة شيدر وخس",
    price: 100,
    image: "/images/menu/برجر/كلاسيك برجر.jpg",
    available: true,
  },
  {
    id: "chipsy-lazy",
    category: "burger",
    name: "تشيبزي ليزي",
    description: "قطعة برجر لحم مغطاة بجبنة شيدر مع خس وصوص ثاوزند آيلاند",
    price: 145,
    image: "/images/menu/برجر/تشيبزي ليزي.jpg",
    available: true,
  },
  {
    id: "smash-town",
    category: "burger",
    name: "سماش تاون",
    description:
      "قطعتين برجر سماش لحم مع جبنة شيدر وصوص ثاوزند آيلاند وخس ومخلل",
    price: 150,
    image: "/images/menu/برجر/سماش تاون.jpg",
    available: true,
  },
  {
    id: "golden-strips",
    category: "sandwiches",
    name: "جولدن إستربس",
    description: "قطع دجاج مقرمشة",
    price: 90,
    image: "/images/menu/ساندويتشات/جولدن إستربس.jpg",
    available: true,
  },
  {
    id: "blue-wave",
    category: "sandwiches",
    name: "بلو ويف",
    description: "شرائح دجاج مدخنة",
    price: 90,
    image: "/images/menu/ساندويتشات/بلو ويف.jpg",
    available: true,
  },
  {
    id: "seafood",
    category: "sandwiches",
    name: "بحرية",
    description: "جمبري مقرمش متحضر بخلطتنا السرية",
    price: 130,
    image: "/images/menu/ساندويتشات/بحرية.jpg",
    available: true,
  },
  {
    id: "zefir",
    category: "sandwiches",
    name: "زفير",
    description: "جمبري مشوي على الجريل",
    price: 130,
    image: "/images/menu/ساندويتشات/زفير.png",
    available: true,
  },
  {
    id: "king-smoked",
    category: "savory-crepe",
    name: "كينج سموكد",
    description:
      "قطع دجاج مقرمشة مع بيف بيكون وجبنة شيدر وموتزاريلا وفلفل وزيتون",
    price: 120,
    image: "/images/menu/كريب مالح/كينج سموكد.jpg",
    available: true,
  },
  {
    id: "sonic-boom",
    category: "savory-crepe",
    name: "سونيك بووم",
    description: "دجاج مدخن مع فلفل وزيتون وجبنة وموتزاريلا",
    price: 120,
    image: "/images/menu/كريب مالح/سونيك بووم.jpg",
    available: true,
  },
  {
    id: "original-fajita",
    category: "savory-crepe",
    name: "أورجينال فاهيتا",
    description: "صدور دجاج مشوية مع شرائح بصل وجبنة وموتزاريلا",
    price: 125,
    image: "/images/menu/كريب مالح/أورجينال فاهيتا.jpg",
    available: true,
  },
  {
    id: "ranchition",
    category: "savory-crepe",
    name: "رانشيشن",
    description: "دجاج مقرمش مع صوص رانش وفلفل وزيتون",
    price: 130,
    image: "/images/menu/كريب مالح/رانشيشن.jpg",
    available: true,
  },
  {
    id: "nutella-boom",
    category: "sweet-crepe",
    name: "نوتيلا بووم",
    description: "كريب غرقان بالنوتيلا الأصلية",
    price: 50,
    image: "/images/menu/كريب حلو/نوتيلا بووم.jpg",
    available: true,
  },
  {
    id: "nutella-banana",
    category: "sweet-crepe",
    name: "نوتيلا بانانا",
    description: "كريب غرقان بالنوتيلا مع شرائح موز",
    price: 60,
    image: "/images/menu/كريب حلو/نوتيلا بانانا.jpg",
    available: true,
  },
  {
    id: "nuts-bomb",
    category: "sweet-crepe",
    name: "نوتس بومب",
    description: "كريب غرقان بالنوتيلا مع مكسرات",
    price: 75,
    image: "/images/menu/كريب حلو/نوتس بومب.jpg",
    available: true,
  },
  {
    id: "mix-king-boom",
    category: "sweet-crepe",
    name: "مكس كينج بووم",
    description: "كريب غرقان بالنوتيلا مع موز ومكسرات",
    price: 90,
    image: "/images/menu/كريب حلو/مكس كينج بووم.jpg",
    available: true,
  },
];

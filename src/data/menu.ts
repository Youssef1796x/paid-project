export type MenuCategory = {
  id: string;
  name: string;
};

export type PriceOption = {
  label: string;
  price: number;
};

export type MenuItem = {
  id: string;
  category: string;
  name: string;
  description?: string;
  price?: number;
  priceOptions?: PriceOption[];
  image: string;
  available: boolean;
};

export const menuCategories: MenuCategory[] = [
  {
    id: "chicken-crepe",
    name: "كريب الدجاج",
  },
  {
    id: "meat-cheese-crepe",
    name: "كريب اللحوم والأجبان",
  },
  {
    id: "seafood-crepe",
    name: "كريب السي فود",
  },
  {
    id: "sweet-crepe",
    name: "كريب الحلو",
  },
  {
    id: "chicken-sandwiches",
    name: "سندوتشات الفراخ",
  },
  {
    id: "chicken-burger",
    name: "تشيكن برجر",
  },
  {
    id: "beef-burger",
    name: "بيف برجر",
  },
  {
    id: "smash-burger",
    name: "سماش برجر",
  },
  {
    id: "seafood-meals",
    name: "وجبات السي فود",
  },
  {
    id: "seafood-sandwiches",
    name: "سندوتشات السي فود",
  },
  {
    id: "milano-pasta",
    name: "باستا ميلانو",
  },
  {
    id: "fries-zone",
    name: "قسم البطاطس",
  },
  {
    id: "al-harash",
    name: "قسم الحرش",
  },
  {
    id: "al-harash-meals",
    name: "وجبات الحرش",
  },
  {
    id: "drinks",
    name: "قسم المشروبات",
  },
  {
    id: "meat-chicken-meals",
    name: "وجبات اللحوم والدجاج",
  },
];

export const menuItems: MenuItem[] = [
  {
    id: "king-smoky",
    category: "chicken-crepe",
    name: "كينج سموكي",
    description: "قطع دجاج متبلة، صوص باربيكيو مدخن، ميكس جبن، خضار",
    price: 130,
    image: "",
    available: true,
  },

  {
    id: "sonic-bomb-crepe",
    category: "chicken-crepe",
    name: "سونيك بوم",
    description: "دجاج زنجر مقرمش سبايسي، صوص حار، وموزاريلا",
    price: 130,
    image: "",
    available: true,
  },

  {
    id: "el-chico-fajita",
    category: "chicken-crepe",
    name: "التشيكو فاهيتا",
    description: "شرائح دجاج فاهيتا متبلة، بصل وفلفل ملون، تتبيلة مكسيكية",
    price: 135,
    image: "",
    available: true,
  },

  {
    id: "ranchista",
    category: "chicken-crepe",
    name: "رانشيستا",
    description: "قطع دجاج مشوية، صوص رانش كريمي، وموزاريلا",
    price: 130,
    image: "",
    available: true,
  },

  {
    id: "al-peccino",
    category: "chicken-crepe",
    name: "البيتشينو",
    description: "قطع دجاج، صوص كريمي غني، ميكس أجبان دسمة",
    price: 140,
    image: "",
    available: true,
  },

  {
    id: "blue-wave-crepe",
    category: "chicken-crepe",
    name: "بلو ويف",
    description: "قطع دجاج، صوص الجبنة الريكفورد المميزة، وموزاريلا",
    price: 140,
    image: "",
    available: true,
  },

  {
    id: "chicken-monster",
    category: "chicken-crepe",
    name: "تشيكن مونستر",
    description: "ميكس دجاج مقرمش ومشوي، حشو مضاعف، وموزاريلا",
    price: 140,
    image: "",
    available: true,
  },
];
import { useParams } from "react-router-dom";

const cars = [
  {
    name: "Maruti Suzuki Swift",
    price: "₹6.49 - ₹9.14 Lakh",
    image: "https://www.autovista.in/assets/img/new_cars_colour_variants/swift-colour-solid-fire-red.jpg",
    colors: ["Red", "Blue", "White"],
    description: "A budget-friendly hatchback known for its fuel efficiency and sporty look.",
  },
  {
    name: "Hyundai Creta",
    price: "₹11.00 - ₹20.00 Lakh",
    image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Creta/7695/1651645683867/front-left-side-47.jpg?imwidth=420&impolicy=resize",
    colors: ["Black", "Silver", "Blue"],
    description: "A premium SUV with advanced safety features and modern interiors.",
  },
  {
    name: "Tata Nexon",
    price: "₹8.10 - ₹14.70 Lakh",
    image: "https://c.ndtvimg.com/2025-01/4gkffbro_2025-tata-nexon_625x300_14_January_25.jpg?im=FaceCrop,algorithm=dnn,width=545,height=307",
    colors: ["Grey", "Green", "Orange"],
    description: "A compact SUV with a 5-star safety rating and a bold design.",
  },
  {
    name: "Mahindra Thar",
    price: "₹11.25 - ₹17.00 Lakh",
    image: "https://etimg.etb2bimg.com/photo/108063089.cms",
    colors: ["Red", "Black", "Green"],
    description: "An off-road beast with a rugged design and powerful performance.",
  },
  {
    name: "Kia Seltos",
    price: "₹10.90 - ₹19.65 Lakh",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Seltos-2023/8709/1688465684023/front-left-side-47.jpg",
    colors: ["Blue", "White", "Grey"],
    description: "A stylish SUV with cutting-edge technology and great fuel efficiency.",
  },
  {
    name: "Honda City",
    price: "₹11.70 - ₹16.20 Lakh",
    image: "https://imgcdn.zigwheels.com.au/large/gallery/exterior/2/17/honda-city-front-angle-low-view-440384.jpg",
    colors: ["Silver", "White", "Red"],
    description: "A premium sedan with a spacious interior and smooth driving experience.",
  },
];

const CarDetails = () => {
  const { name } = useParams();
  const car = cars.find((c) => c.name === decodeURIComponent(name));

  if (!car) {
    return <h2 className="text-white text-center text-3xl mt-10">Car not found</h2>;
  }

  return (
    <div className="flex flex-col items-center text-white min-h-screen bg-gray-900 py-10 px-6">
      <img src={car.image} alt={car.name} className="w-80 h-48 object-cover rounded-lg shadow-md" />
      <h2 className="text-3xl font-bold mt-4">{car.name}</h2>
      <p className="text-cyan-400 text-lg font-semibold">{car.price}</p>
      <p className="text-gray-300 mt-4 text-center max-w-xl">{car.description}</p>

      <div className="flex gap-3 mt-4">
        {car.colors.map((color, index) => (
          <span
            key={index}
            className="w-6 h-6 rounded-full border border-gray-300"
            style={{ backgroundColor: color.toLowerCase() }}
            title={color}
          ></span>
        ))}
      </div>

      <Link
        to="/"
        className="mt-6 bg-cyan-500 text-white py-2 px-6 rounded-lg hover:bg-cyan-600 transition"
      >
        Go Back
      </Link>
    </div>
  );
};

export default CarDetails;
import { useFilterStore } from "../store.ts";
import { data } from "../db/data.ts";
import Sidebar from "./Sidebar.tsx";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  country: string;
  img: Record<string, string>;
  price: number;
}

const Main = () => {
  const { selectedCountries, selectedColors, selectedPriceRange } =
    useFilterStore((state) => state);

  const filteredData = data.filter((item: Product) => {
    const matchesColor =
      selectedColors.length === 0 ||
      Object.keys(item.img).some((color) => selectedColors.includes(color));

    const matchesCountry =
      selectedCountries.length === 0 ||
      selectedCountries.includes(item.country);

    const matchesPrice = selectedPriceRange
      ? item.price >= selectedPriceRange.min &&
        item.price <= selectedPriceRange.max
      : true;

    return matchesColor && matchesCountry && matchesPrice;
  });

  return (
    <div>
      <Sidebar />
      <div className="p-4 flex flex-wrap justify-center items-center">
        {filteredData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Main;

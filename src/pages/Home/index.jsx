import { useContext, useState } from "react";
import { Card } from "../../components/Card";
import { Layout } from "../../components/Layout";
import { ProductDetail } from "../../components/ProductDetail";
import { ProductsShoppingContext } from "../../context";
const Home = () => {
  const {
    itemsProductsHome,
    itemsProductsElectronics,
    itemsProductsShoes,
    itemsProductsFurniture,
    itemsProductsToys,
    itemsProductsOthers,
  } = useContext(ProductsShoppingContext);

  const location = window.location.pathname;
  const dataItemsProducts = {
    "/": itemsProductsHome,
    "/shoes": itemsProductsShoes,
    "/electronics": itemsProductsElectronics,
    "/furnitures": itemsProductsFurniture,
    "/itemsProductsToys": itemsProductsToys,
    "/others": itemsProductsOthers,
  };

  const dataItem = dataItemsProducts[location] || [];
  const [searchByTitle, setSearchByTitle] = useState("");
  const dataItemFilter = dataItem.filter(({ title }) =>
    title.toLowerCase().includes(searchByTitle.toLowerCase())
  );

  const renderCardItems = () => {
    if (dataItemFilter.length > 0) {
      return (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {dataItemFilter?.map((data) => (
            <Card
              key={data.id}
              id={data.id}
              data={data}
              categoryName={data.category.name}
              imageSrc={data.images[0]}
              title={data.title.substring(0, 22).trim() + "..."}
              price={data.price}
            />
          ))}
        </div>
      );
    } else {
      return <p className="font-light text-lg">There are no matches!</p>
    }
  };
  return (
    <Layout>
      <h1 className="font-medium text-lg mt-2">
        {location === "/"
          ? "Home"
          : location.substring(1, 2).toUpperCase() + location.substring(2)}
      </h1>
      <input
        className="rounded-lg shadow-lg border-none w-96 py-1 px-4 bg-gray-200 mt-4 mb-8 focus:border-none focus:outline-none"
        type="text"
        placeholder="Search a product"
        onChange={(e) => {
          setSearchByTitle(e.target.value);
        }}
      />
        {renderCardItems()}
      <ProductDetail />
    </Layout>
  );
};

export { Home };

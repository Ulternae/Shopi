import { createContext, useEffect, useState, useMemo } from "react";

const defaultInfoProductToShow = {
  title: "",
  price: "",
  description: "",
  images: [],
};

const ShoppingCartContext = createContext();
const ProductsShoppingContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  // ProductsShoppingContext
  const [itemsProductsShoppingContext, setItemsProductsShoppingContext] = useState(null);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
    .then((response) => response.json())
    .then((data) => setItemsProductsShoppingContext(data));
  }, [setItemsProductsShoppingContext]);
  
  // useMemo
  const itemsProductsHome = useMemo(() => 
  itemsProductsShoppingContext || [],
  [itemsProductsShoppingContext]
);

const itemsProductsElectronics = useMemo(() => 
itemsProductsHome.filter(({ category }) => category.name === "Electronics"), 
[itemsProductsHome]
);

const itemsProductsShoes = useMemo(() => 
itemsProductsHome.filter(({ category }) => category.name === "Shoes"), 
[itemsProductsHome]
);

const itemsProductsFurniture = useMemo(() => 
itemsProductsHome.filter(({ category }) => category.name === "Furniture"), 
[itemsProductsHome]
);

const itemsProductsToys = useMemo(() => 
  itemsProductsHome.filter(({ category }) => category.name === "Toys"), 
  [itemsProductsHome]
);

const itemsProductsOthers = useMemo(() => 
  itemsProductsHome.filter(({ category }) =>
    category.name !== "Electronics" &&
    category.name !== "Shoes" &&
    category.name !== "Furniture" &&
    category.name !== "Toys"
  ), 
  [itemsProductsHome]
);
 

  // ShoppingCard
  const [cartProducts, setCartProducts] = useState([]);
  const [order, setOrder] = useState([])
  // Product Detail
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [productToShow, setProductToShow] = useState(defaultInfoProductToShow);
  // Checkout side menu
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);

  return (
    <ShoppingCartContext.Provider
      value={{
        order,
        setOrder,
        isProductDetailOpen,
        setIsProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        setIsCheckoutSideMenuOpen,
      }}
    >
      <ProductsShoppingContext.Provider
        value={{
          itemsProductsHome,
          itemsProductsElectronics,
          itemsProductsShoes,
          itemsProductsFurniture,
          itemsProductsToys,
          itemsProductsOthers,
        }}
      >
        {children}
      </ProductsShoppingContext.Provider>
    </ShoppingCartContext.Provider>
  );
};
export { ShoppingCartContext, ShoppingCartProvider, ProductsShoppingContext };

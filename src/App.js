import { useState } from "react";
import allProductsData from "./data"; // `allProducts` nomli import o'zgaruvchisini o'zgartirdik

function App() {
  const [products, setProducts] = useState(allProductsData); // `allProducts` nomli o'zgaruvchini `allProductsData`ga o'zgartirdik

  // delete product
  const deleteProduct = (id) => {
    const filteredProducts = products.filter((product) => {
      return product.id !== id;
    });

    setProducts(filteredProducts);
  };

  const filterByBrand = (brand) => {
    if (brand === "all") {
      setProducts(allProductsData); // `allProducts` nomli o'zgaruvchini `allProductsData`ga o'zgartirdik
    } else {
      const filterBrand = allProductsData.filter((product) => {
        return product.brand === brand;
      });
      setProducts(filterBrand);
    }
  };

  const filterByCategory = (category) => {
    if (category === "smartphones") {
      const smartphones = allProductsData.filter(
        (product) => product.category === "smartphones"
      );
      setProducts(smartphones);
    } else {
      const filteredProducts = allProductsData.filter(
        (product) => product.category === category
      );
      setProducts(filteredProducts);
    }
  };

  const filterByLaptops = (category) => {
    if (category === "laptops") {
      const laptops = allProductsData.filter(
        (product) => product.category == "laptops"
      );
      setProducts(laptops);
    } else {
      const filteredProducts = allProductsData.filter(
        (product) => product.category === category
      );
      setProducts(filteredProducts);
    }
  };

  return (
    <div>
      <div className="filter-container">
        <select
          className="select button-30"
          onChange={(e) => {
            filterByBrand(e.target.value);
          }}
        >
          <option value="all">All</option>
          {[
            ...new Set(
              allProductsData.map((product) => {
                return product.brand;
              })
            ),
          ].map((brand) => {
            return (
              <option
                key={brand} // `Math.random()` qismi o'chirilgan
                value={brand}
              >
                {brand}
              </option>
            );
          })}
        </select>

        <button
          onClick={() => filterByLaptops("laptops")}
          className="button-30"
        >
          Laptops
        </button>

        <button
          onClick={() => filterByCategory("smartphones")}
          className="button-30"
        >
          Smartphones
        </button>
      </div>
      <ul className="product-grid">
        {products.map((product) => {
          const {
            id,
            thumbnail,
            title,
            description,
            brand,
            price,
            discountPercentage,
            rating,
            category,
          } = product;
          return (
            <li key={id}>
              <p className="category">{category}</p>
              <img src={thumbnail} alt={description} width={400} />
              <div className="product-content">
                <p>
                  <b>Product Name :</b> {title}
                </p>
                <p>
                  <b>Brand :</b> {brand}
                </p>
                <p>
                  <b>Description : </b> {description}
                </p>
                <p className="price">
                  <span style={{ textDecoration: "line-through" }}>
                    $ {price}
                  </span>
                  <span>
                    ${price - Math.floor((price * discountPercentage) / 100)}
                  </span>
                </p>
                {product.rating > 4.2 && product.rating < 4.8 && (
                  <span style={{ color: "gold", fontSize: "30px" }}>★★★★</span>
                )}
                {product.rating < 4.2 && (
                  <span style={{ color: "gold", fontSize: "30px" }}>★★★</span>
                )}
                {product.rating > 4.8 && (
                  <span style={{ color: "gold", fontSize: "30px" }}>★★★★★</span>
                )}
              </div>

      <button onClick={() => deleteProduct(id)} className="button">
                <svg viewBox="0 0 448 512" class="svgIcon">
                  <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                </svg>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;

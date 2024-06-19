import axios from "axios";
import React, { useEffect, useState, CSSProperties } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const jwt = localStorage.getItem("jwt");
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  let [color, setColor] = useState("#ffffff");

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  if (!jwt) {
    window.location.href = "/login";
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/products/fetchProduct`,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );
        // console.log(result.data);
        setLoading(false);
        setProducts(result.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <section className="text-gray-600 body-font">
      {loading ? (
        <div className="sweet-loading">
          <ClipLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {currentProducts.map((product) => (
              <div key={product.p_id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link to={`/products/${product._id}`}>
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={product.p_img || "https://dummyimage.com/420x260"}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {product.p_cat || "CATEGORY"}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {product.p_name}
                    </h2>
                    <p className="mt-1">
                      ${product.p_cost || "Price not available"}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Stack spacing={2}>
              <Pagination
                count={Math.ceil(products.length / productsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
              />
            </Stack>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsPage;

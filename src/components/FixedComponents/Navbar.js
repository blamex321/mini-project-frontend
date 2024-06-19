import { Button, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");

  function handleLoginClick() {
    navigate("/login");
  }

  function handleSearch(event) {
    event.preventDefault();
    const query = event.target.search.value;
    // Implement your search logic here
  }

  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto"></nav>
          <a
            href="#"
            className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            {jwt ? (
              <form onSubmit={handleSearch} className="flex items-center">
                <TextField
                  name="search"
                  variant="outlined"
                  placeholder="Search..."
                  size="small"
                  sx={{ marginRight: 2 }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#3F51B5",
                  }}
                >
                  Search
                </Button>
              </form>
            ) : (
              <Button
                sx={{
                  backgroundColor: "#3F51B5",
                }}
                variant="contained"
                onClick={handleLoginClick}
              >
                Login
              </Button>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

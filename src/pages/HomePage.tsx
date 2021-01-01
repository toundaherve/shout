import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Breadcrumb = () => {
  return (
    <nav aria-label="breadcrumb d-block">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Library
        </li>
      </ol>
    </nav>
  );
};

interface FilterProps {
  name: string;
  options: Array<string>;
}

const Filter = (props: FilterProps) => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {props.name}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {props.options.map((option, idx) => (
          <li key={idx}>
            <span className="dropdown-item">{option}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Filters = () => {
  const mockFilters = [
    "category",
    "condition",
    "brand",
    "price",
    "date listed",
    "location",
    "delivery options",
    "sort",
  ];
  return (
    <div className="d-block flex-nowrap">
      <div className="d-none d-lg-block">
        <div className="d-flex flex-wrap">
          <span className="flex-grow-1 bg-dark"></span>
          <div
            className="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <button type="button" className="btn btn-outline-primary">
              {"<-"}
            </button>
            <button type="button" className="btn btn-outline-primary">
              {"->"}
            </button>
          </div>
        </div>
        <span className="d-block mb-3"></span>
      </div>
      {/* TODO: Overflow Not Working - Fix overflow-x: auto|hidden*/}
      <div className="d-flex flex-nowrap overflow-auto">
        {mockFilters.map((filter, idx) => (
          <div className="d-flex px-1 py-2" key={idx}>
            <Filter name={filter} options={["Electronics", "Fashion"]} />
          </div>
        ))}
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <Layout>
      <div className="UnifiedHeader">
        <div className="flex-wrap">
          <span className="d-block mb-2 flex-grow-1 flex-shrink-1 w-100"></span>
          <Breadcrumb />
          <h1>Ads for "Iphone" for Sale</h1>
          <Filters />
          <span className="d-block mb-3"></span>
        </div>
      </div>
      <span className="d-block mb-2"></span>
    </Layout>
  );
};

export default HomePage;

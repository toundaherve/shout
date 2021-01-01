import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const HomePage = () => {
  return (
    <Layout>
      <UnifiedHeader />
      <span className="d-block mb-2"></span>
    </Layout>
  );
};

function UnifiedHeader() {
  const mockFilters = ["category", "condition"];
  return (
    <div className="UnifiedHeader">
      <div className="flex-wrap">
        <span className="d-block mb-2 flex-grow-1 flex-shrink-1 w-100"></span>
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
        <h1>Ads for "Iphone" for Sale</h1>
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
          {/* TODO: Overflow Not Working - Check with lots of filters - Fix overflow-x: auto|hidden*/}
          <div className="d-flex flex-nowrap ">
            {mockFilters.map((filter, idx) => (
              <div className="d-flex px-1 py-2" key={idx}>
                <Filter name={filter} options={["Electronics", "Fashion"]} />
              </div>
            ))}
          </div>
        </div>
        <span className="d-block mb-3"></span>
      </div>
    </div>
  );
}

interface FilterProps {
  name: string;
  options: Array<string>;
}

function Filter(props: FilterProps) {
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
}

export default HomePage;

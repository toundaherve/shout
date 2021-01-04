import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const HomePage = () => {
  return (
    <Layout>
      <UnifiedHeader />
      <span className="d-block mb-2"></span>
      <Results />
      <LoadMore />
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

function Results() {
  return (
    <div className="row g-3">
      <div className="col-12 col-md-5">
        <CardGrid />
      </div>
      <div className="d-none d-md-block col-7">
        <div className="position-sticky" style={{ top: "88px" }}>
          <ItemDescription />
        </div>
      </div>
    </div>
  );
}

function CardGrid() {
  const mockCards = [];
  for (let index = 0; index < 40; index++) {
    mockCards.push(index);
  }

  const Card = () => (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Iphone 7s Black</h5>
        <h6 className="card-subtitle mb-2 text-muted">Stephanie</h6>
        <h6 className="card-subtitle mb-2 text-muted">Leeds, UK</h6>
        <h5 className="card-title">$700</h5>
        <p className="card-text">This is a longer ...</p>
      </div>
    </div>
  );

  return (
    <div className="row row-cols-1 g-2">
      {mockCards.map((val, idx) => (
        <div className="col" key={idx}>
          <div
            className="d-none d-md-block "
            onClick={() => console.log("Card clicked")}
          >
            <Card />
          </div>
          <div
            className="d-md-none "
            data-bs-toggle="modal"
            data-bs-target="#itemDescriptionModal"
          >
            <Card />
          </div>
        </div>
      ))}
    </div>
  );
}

export function ItemDescription() {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Iphone 7s Black</h5>
        <h6 className="card-subtitle mb-2 text-muted">Stephanie</h6>
        <h6 className="card-subtitle mb-2 text-muted">Leeds, UK</h6>
        <h5 className="card-title">$700</h5>
        <a href="#1" className="btn btn-primary me-3 ">
          Take offer
        </a>
        <a href="#1" className="btn btn-secondary">
          Save
        </a>
      </div>
      <div className="card-body">
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Some quick example text to build on the
          card title and make up the bulk of the card's content.
        </p>
      </div>
    </div>
  );
}

function LoadMore() {
  return (
    <div className="d-flex justify-content-center flex-wrap py-3">
      <button type="button" className="btn btn-success">
        Load more
      </button>
    </div>
  );
}

export default HomePage;

import React from "react";
import "./App.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PageTitle from "./components/PageTitle";
import { resources } from "./components/Resources";

export default function App() { //funksjon for å sende riktig ressurs til PageTitle (ResourceWrapper)
  const ResourceWrapper = ({ category }) => {
    const filteredResource = resources.find(
      (resource) => resource.category === category
    );

    return <PageTitle resources={[filteredResource]}/>;
  };

  return (
    <Router>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/html" element={<ResourceWrapper category={"HTML"} />} />
          <Route path="/css" element={<ResourceWrapper category={"CSS"} />} />
          <Route path="/javascript" element={<ResourceWrapper category={"JavaScript"} />} />
          <Route path="/react" element={<ResourceWrapper category={"React"} />} />
          <Route path="/sanity" element={<ResourceWrapper category={"Sanity and headless CMS"} />} />
        </Route>
      </Routes>
    </Router>
  );
}


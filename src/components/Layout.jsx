import "../styles/Layout.scss";
import React, { useState } from "react";
import Nav from "./Nav";
import PageTitle from "./PageTitle";
import { resources } from "./Resources";

export default function Layout() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    // finn ressursen som matcher valgt kategori
    const selectedResource = resources.find(
        (resource) => resource.category === selectedCategory
    );

    return (
        <div id="contentbackground">
            <Nav onCategorySelect={setSelectedCategory} />
            
            {selectedResource ? (
                <PageTitle resources={[selectedResource]} />
            ) : (
                <h2>Velg en kategori.</h2>
            )}
        </div>
    );
}

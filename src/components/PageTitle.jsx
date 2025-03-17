import React from "react";

export default function PageTitle({ resources }) {
    return (
        <div>
            {resources.map((resource, index) => (
                <div key={index}>
                    <h3>{resource.category}</h3>
                    <p>{resource.text}</p>
                    <ul>
                        {resource.sources.map((source, sourceIndex) => (
                            <li key={sourceIndex}>
                                <a href={source.url}>
                                    {source.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

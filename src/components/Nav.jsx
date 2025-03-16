import "../styles/Nav.scss";

export default function Nav({ onCategorySelect }) {
    const categories = ["HTML", "CSS", "JavaScript", "React", "Sanity and headless CMS"];

    return (
        <ul id="categoryList">
            {categories.map((category, index) => (
                <li
                    key={index}
                    className="navlist"
                    onClick={() => onCategorySelect(category)}
                >
                    {category}
                </li>
            ))}
        </ul>
    );
}

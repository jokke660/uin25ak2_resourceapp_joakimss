import "../styles/Nav.scss";

export default function Nav(){
    return (
        <ul id="categoryList">
            <li className="navlist">HTML</li>
            <li className="navlist">CSS</li>
            <li className="navlist">JavaScript</li>
            <li className="navlist">React</li>
            <li className="navlist">Sanity and headless CMS</li>
        </ul>
    )
}
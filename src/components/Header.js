import trollFace from "../images/troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                src= {trollFace} 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator - API Test</h2>
            <h4 className="header--project">API data of 100 memes</h4>
        </header>
    )
}
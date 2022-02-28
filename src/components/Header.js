import trollFace from "../images/troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                src= {trollFace} 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator - Test</h2>
            <h4 className="header--project">Pre-loaded data of 100 memes</h4>
        </header>
    )
}
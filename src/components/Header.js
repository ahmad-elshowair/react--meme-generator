import logo from '../images/troll-face.png'


export const Header = ()=>{
    return(
        <nav className='nav'>
            <div className='nav__logo'>
                <img src={logo} className='logo__image' alt='troll face'/>
                <p className='logo__text'>Meme Generator</p>
            </div>
            <h3 className='project__name'>React Course - Project 3</h3>
        </nav>
    );
};
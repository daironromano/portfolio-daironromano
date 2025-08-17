/*Importando react*/
import React from 'react';

/*Componente Header Gerado*/
function Header() {
    /*JSX*/
    return (
        <header className="header">
            <nav className='navbar'>
                <h1 className="logo">daironromano</h1>
                <ul className="nav-links">
                    <li><a href="#about"></a></li>
                    <li><a href="#projects"></a></li>
                    <li><a href="#skills"></a></li>
                    <li><a href="#contacts"></a></li>
                </ul>
            </nav>
        </header>
    )
}
/*Disponbilizando componente*/
export default Header;
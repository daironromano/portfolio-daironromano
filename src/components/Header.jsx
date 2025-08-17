
import React from 'react'; // Importando react
import { useState, useEffect } from 'react'; // Importanto hooks

// Componente Header Gerado
function Header() {
    const [theme, setTheme] = useState('light') // Cria um estado para o tema

    useEffect(() => {
        document.body.setAttribute('data-theme', theme); // Atualiza o atributo no body
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme == 'light' ? 'dark' : 'light' )
    }

    // JSX
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
                <button onClick={toggleTheme}>
                    {theme === 'light' ? 'Modo Escuro' : 'Modo Claro'}    
                </button>
            </nav>
        </header>
    )
}
// Disponbilizando componente
export default Header;
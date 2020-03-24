import React from 'react';

import '../Toolbar/Toolbar.css'
import logo from '../../Logo/Logo';

const toolbar = ( props ) => (
    <header className='Toolbar'>
        <div className='test'>Menu</div>
        <div>{logo}</div>
        <nav>
            ...
        </nav>
    </header>
);

export default toolbar;
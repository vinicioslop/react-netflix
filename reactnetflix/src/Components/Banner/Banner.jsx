import React from 'react';

import './Banner.css';

export default class Banner extends React.Component {
    render() {
        return (
            <div className='banner-container'>
                <div className='banner-imagem-falsa'>
                    <p className='banner-texto'>Conteúdo em Destaque</p>
                </div>
            </div>
        );
    }
}

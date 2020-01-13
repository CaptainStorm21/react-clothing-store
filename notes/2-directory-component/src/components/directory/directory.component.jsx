import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

//class used because we need to store data
//of menu items

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            section: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.pinimg.com/originals/20/5b/6a/205b6a675cbc7536d5d73e10b1e678c6.jpg',
                    id: 1
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://m5aumedia-8962.kxcdn.com/media/catalog/product/cache/2/image/1024x/17f82f742ffe127f42dca9de82fb58b1/4/_/4_model_outdoor-min_2.jpg',
                    id: 2
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.pinimg.com/originals/52/2b/25/522b25d77908a7b75036e405eec1cd76.jpg',
                    id: 3,
                    size: 'large'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2irkUVZkMuJbvxZNdAZoPwx3xW-Aa5p6ZB-aigOx2ea8eoOAF&s',
                    id: 4,
                    size: 'large'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://ossineshoes.com/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/5/1/51_2BZ5XZEZOL_2.jpg',
                    id: 5
                }
            ]

        }
    }

    render() {
        return (
            <div className="directory-menu">
                { this.state.section.map (({ title, imageUrl, id, size }) => (
                         <MenuItem key={id} title={title} imageUrl= {imageUrl} size={size}/>
                    ))}
            </div>
        )
    }
}

export default Directory;
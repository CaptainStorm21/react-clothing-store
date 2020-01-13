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
                },
                {
                    title: 'womens',
                    imageUrl: 'https://dellywood.in/storage/blogs/1551419751.jpg',
                    id: 4,
                    size: 'large'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://blobs.continental-tires.com/www8/servlet/blob/47026/7e836a115c3968adbdd6e8da092cc14f/img-outdoor-shoe-data.jpg',
                    id: 5,
                    size: 'large'
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
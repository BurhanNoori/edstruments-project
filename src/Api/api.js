class Smartphone {
    constructor (id, name, brand, image, description) {
        this._id = id;
        this._name = name;
        this._brand = brand;
        this._image = image;
        this._description = description;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get brand(){
        return this._brand;
    }

    get image() {
        return this._image;
    }

    get description() {
        return this._description;
    }
}

const smartPhones= [
    new Smartphone(
        1,
        'IPhone 15',
        'Apple',
        'https://a.media-amazon.com/images/I/31KxpX7Xk7L._SY445_SX342_QL70_FMwebp_.jpg',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo tincidunt diam, non pellentesque est ultricies ac. Aliquam erat volutpat. Aliquam a lacus lorem. Aenean eu ligula at lorem porttitor fermentum luctus et metus.'
    ),
    new Smartphone(
        2,
        'Galaxy s23',
        'Samsung',
        'https://a.media-amazon.com/images/I/81vxWpPpgNL._AC_UY327_FMwebp_QL65_.jpg',
        'Etiam lacinia, tortor at ornare facilisis, sem diam feugiat urna, nec pulvinar lectus magna ac nisl. Proin at auctor metus. Pellentesque consectetur elit nec dui tristique facilisis. Phasellus aliquam velit et mauris bibendum, at facilisis nisi tempus.'
    ),
    new Smartphone(
        3,
        'Xiaomi 13 pro',
        'Xiaomi',
        'https://cdn.dxomark.com/wp-content/uploads/medias/post-139229/Xiaomi-13-Pro_featured-image-packshot-review-Recovered-1024x691.jpg',
        'Etiam lacinia, tortor at ornare facilisis, sem diam feugiat urna, nec pulvinar lectus magna ac nisl.'
    ),
    new Smartphone(
        4,
        'IPhone 12',
        'Apple',
        'https://a.media-amazon.com/images/I/71657TiFeHL._SL1500_.jpg',
        'Proin at auctor metus. Pellentesque consectetur elit nec dui tristique facilisis. Phasellus aliquam velit et mauris bibendum, at facilisis nisi tempus.'
    ),
]



export class API {
    static async getAll() {
        return new Promise((resolve, reject)=> {
            setTimeout (()=> {
                resolve(smartPhones);
            }, 500);
        })
        
    }
}
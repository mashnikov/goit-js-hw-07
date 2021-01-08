const images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const galleryRef = document.querySelector('#gallery');

const newImages = images.map(image => {
    const galleryItemRef = document.createElement('li');
    const galleryItemImgRef = document.createElement('img');
    galleryItemImgRef.setAttribute('src', image.url);
    galleryItemImgRef.setAttribute('alt', image.alt);
    galleryItemRef.append(galleryItemImgRef);
    //console.log(galleryItemRef);
    return galleryItemRef;
});

galleryRef.append(...newImages);
//console.log(galleryRef);
//console.log(newImages);

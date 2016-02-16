/**
 * Created by sachg on 2/4/2016.
 */


const austine_item1 = {
    item_id: 20, datetime_created:'35599343',name:'Sumsang Galaxy 6 Edge Plus',category: 'Smartphones',
    description: 'newest premium sumsang galaxy phone with gold case and super omoled screen see the images for details',
    photo_album:'/images/austineohonyo/items/20/',value:450.00,condition:'mint condition see the item images',
    watchlist:[1,12,14]
};

const sachgits_item1 = {
    item_id: 19, datetime_created:'356139245',name:'Moto Droid 2',category: 'Smartphones',
    description: 'worlds first shatterproof phone made by motorolla company',
    photo_album:'/images/sachgits/items/20/',value:450.00,condition:'brand new and sealed inside the box',
    watchlist:[20,1,23]
};



export function getItem(){
    return austine_item1;
}
export function getItemId() {
    return austine_item1.item_id;
}
export function getItemDatetimecreated() {
    return austine_item1.datetime_created;
}
export function getItemName() {
    return austine_item1.name;
}
export function getItemCategory() {
    return austine_item1.category;
}
export function getItemDescription() {
    return austine_item1.description;
}
export function getItemPhotoAlbum() {
    return austine_item1.photo_album;
}
export function getItemValue() {
    return austine_item1.value;
}
export function getItemCondition() {
    return austine_item1.condition;
}
export function getItemWatchlist() {
    return austine_item1.watchlist;
}
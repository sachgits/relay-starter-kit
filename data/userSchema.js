/**
 * Created by sachg on 2/16/2016.
 */
import {mongoose } from './dbConfig-compiled';
import {productsSchema} from './ProductsSchema-compiled';
import {addressSchema} from './addressSchema-compiled';
import {destinationSchema} from './locationSchema-compiled';
var Schema = mongoose.Schema;
var SchemaType = mongoose.SchemaType;

var userSchema = new Schema({
    id: SchemaType.ObjectId,
    username: {type:String, required: true},
    age: {type: number, min: 15, max: 75},
    email: {type:String, lowercase: true, required: true},
    password: {type: String, required: true},
    timeCreated: {type: Date, default:Date.now()},
    gender: {type: Boolean, default: 0, comment:"defaults to 0 for MALE"},
    photoAlbum: {type:String, required: true},
    firstname: String,
    lastname: String,
    lastLogin: {type: Date.now, update: Date.now()},
    address: [addressSchema],
    destination: [destinationSchema],
    products: [productsSchema]

});

module.exports = mongoose.model('User', userSchema);
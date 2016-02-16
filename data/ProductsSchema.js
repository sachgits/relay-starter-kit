/**
 * Created by sachg on 2/16/2016.
 */
import {mongoose} from './dbConfig-compiled'

Schema = mongoose.Schema;
SchemaTypes = mongoose.SchemaType;

var productsSchema = Schema({
    sku: SchemaTypes.ObjectId,
    title: String,
    description:String,
    quantity:SchemaTypes.number,
    value: SchemaTypes.float,
    photoAlbum: String,
    dateTime_created: {type: Date, default: Date.now()},
    manufacture_details:{
        model_number: String
    }
});

module.exports = productsSchema;


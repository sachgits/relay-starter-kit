/**
 * Created by sachg on 2/16/2016.
 */

import {mongoose} from './dbConfig-compiled';

Schema = mongoose.Schema;
SchemaType = mongoose.SchemaType;

var addressSchema = Schema({
id: SchemaType.ObjectId,
    city:String,
    state:String,
    country:String,
    addr:String,
    email:String,
    phone:String,
});

module.exports = addressSchema;
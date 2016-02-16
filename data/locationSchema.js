/**
 * Created by sachg on 2/16/2016.
 */
import {mongoose} from './dbConfig-compiled';

var Schema = mongoose.Schema;
var SchemaTypes = mongoose.SchemaType;

var destinationSchema = Schema({
    id: SchemaTypes.ObjectId,
    CoOrdinates:{type:String},
    timeOfVisit: Date
});

module.exports =destinationSchema;
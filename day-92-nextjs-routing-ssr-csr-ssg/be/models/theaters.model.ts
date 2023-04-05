import mongoose, { Schema } from "mongoose";

interface IAddress{
    street1:string,
    city:string,
    state:string,
    zipcode:string
}

interface IGeo{
    type:{
        type:String,
        enum:["Point"],
        required:true
    },
    coordinates:{
        type:[number,number],
        required:true
    }
}

interface ILocation{
    address:IAddress,
    geo:IGeo
}

interface ITheater {
    theaterId:number,
    location:ILocation,
}

const TheaterSchema: Schema = new Schema({})

export default mongoose.model<ITheater>("Theater",TheaterSchema)


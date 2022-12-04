import mongoose from "mongoose";

try {
   await mongoose.connect("mongodb+srv://admin:admin123@cluster0.pxjuyyk.mongodb.net/?retryWrites=true&w=majority")
   console.log("<-<-<-<-<-<-<-<- mongoDb successfully connected ->->->->->->->->");
} catch (error) {
    console.log(">>>>>>>error", error);
}

export const { Schema, model } = mongoose
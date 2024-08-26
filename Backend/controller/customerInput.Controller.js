import { response } from "express";
import CustomerRequirements from "../model/customerInput_model.js";

export const getInput=async(req,res)=>{
    try {
        const customerInput=await CustomerRequirements.find()
        res.status(200).json(CustomerRequirements)
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
}
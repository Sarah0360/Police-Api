import { request } from "express";
import { StatementModel } from "../models/statement.js";



// function to store data in the database
export const addStatement =async (req, res) => {
    try{
    console.log('request', req.body);
     const addData = await StatementModel.create(req.body);
     res.status(200).send(addData);
    } catch (error) {
        console.log(error)

    }
};

 export const getStatements = async(req, res) =>{
    try {
    const getData = await StatementModel.find();
        res.status(200).send(getData)
} catch (error) {
    
}
    };


    export const getStatement = async(req, res) => {
        try {
              
            const getData = await StatementModel.findById(req.params.id);
            res.status(200).send(getData)
        } catch (error) {

        }
    }

    export const updateStatement = async(req, res) => {
        try {
            console.log('request', req.body)
            const status = req.body.caseStatus
            const updateCaseStatus = await StatementModel.findByIdAndUpdate(req.params.id, {caseStatus: status});
            res.status(200).send(updateCaseStatus)
        } catch (error) {
            
        }
    }

    export const deleteStatement = async(req, res) => {
        try {
            console.log('request', req.body)
            const status = req.body.statement
            const deleteData = await StatementModel.findByIdAndDelete(req.params.id, {statement: status});
            res.status(200).send(deleteData)
        } catch (error) {
            
        }
    }

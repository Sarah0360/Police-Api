import { Router } from "express";
import { addStatement, getStatements, getStatement ,updateStatement, deleteStatement } from "../controllers/statement_controller.js";

 const statementRouter = Router();


statementRouter.post('/statement', addStatement) 

// statementRouter.get ('/statement', (req, res) => {
//    res.json('We Are Here To Protect Our Nation')
// });

statementRouter.get ('/statement', getStatements);
statementRouter.get ('/statement/:id', getStatement);
statementRouter.patch('/statement/:id/:caseStatus', updateStatement)
statementRouter.delete('/statement/:id/:statement', deleteStatement)

export default  statementRouter;
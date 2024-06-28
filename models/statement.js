import { Schema, model} from "mongoose";

const statementSchema = new Schema({
    incidentType: {type: String, enum: ['Non-Criminal', 'Criminal']},
    civilianStatus:{type: String, enum: ['Suspects', 'Complainant', 'Witness']},
    statement: {type: String},
    caseStatus: {type: String, enum: ['Open', 'Close']},
    // civilianId: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});

export const StatementModel = model ('statement', statementSchema);


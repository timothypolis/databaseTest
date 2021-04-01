const mongoose = require("mongoose");
const abilitySchema = new mongoose.Schema(
    {
        abilityName:{type:String},
        allowances:[{type:String}],
        method:[{type:String}],
        ancestorID:[{type: mongoose.Schema.Types.ObjectId, ref: "AbilityWtNC"}],
        descendantID:[{type: mongoose.Schema.Types.ObjectId, ref: "AbilityWtNC"}],
        upgradeCost:{type:Number},
        useCost:{type:Number},
        properties:[{type:String}],
        description:{type:String},
        effects:[{effectName:{type:String},effectDesc:{type:String}}],
    }
)
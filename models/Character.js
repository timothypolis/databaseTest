const mongoose = require("mongoose");
const characterSchema = new mongoose.Schema(
    {
        characterName:{type:String},
        characterStatuses:[{statusName:{type:String},statusColor:{colorFont:{type:String},colorBG:{type:String}}}],
        characterStats:[{stat:{type:String},statValue:[{type:Number}]}],
    },
    {timestamps: true}
)

/* #region FOOTER */
const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
/* #endregion */
const mongoose = require("mongoose");
const characterSchema = new mongoose.Schema(
    {
        characterName:{type:String},
        characterStatuses:[{statusNames:[{type:String}]},{statusColor:[{colorFont:{type:String}},{colorBG:{type:String}}]}],
        characterStats:[{stat:{type:String},statValue:[{type:Number}]}],
    },
    {timestamps: true}
)

/* #region footer */
const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
/* #endregion */
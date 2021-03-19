const mongoose = require("mongoose");
const characterSchema = new mongoose.Schema(
    {
        characterName:{type:String},
        characterStats:[{stat: {type: String}, status:[{type:Number}]}],
    },
    {timestamps: true}
)

/* #region footer */
const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
/* #endregion */
const mongoose = require("mongoose");
const characterSchema = new mongoose.Schema(
    {
        characterName:{type:String},
        characterXP:{level:{type:Number},exp:[{type:Number},{type:Number}]},
        characterResources:{hp:[{type:Number},{type:Number}],secondaryResource:[{type:String},{type:Number},{type:Number}]},
        characterStats:[{stat:{type:String},statValue:{type:Number}}],
        positiveAffiliations:[{type:String}],
        negativeAffiliations:[{type:String}],
        skillsSpells:[{type:String}],
        primaryWeapon:{type:String},
        inventorySpace:[{type:Number},{type:Number}],
        money:{type:Number},
        languages:[{type:String},{type:Number}],
        characterBio:[{type:String}],
    },
    {timestamps: true}
)

/* #region FOOTER */
const wtncCharacter = mongoose.model("wtncCharacter", characterSchema);

module.exports = wtncCharacter;
/* #endregion */
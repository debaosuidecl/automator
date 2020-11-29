const mongoose = require("mongoose");

const MacroSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    schema: {
      type: Object,
      //   required: true,
    },
    isFolder: {
      type: boolean,
    },
    underLying: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "macro",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// export model user with MacroSchema
module.exports = mongoose.model("macro", MacroSchema);

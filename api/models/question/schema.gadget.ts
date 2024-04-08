import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "question" model, go to https://setting-metafields.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "rIkYbKv__ws_",
  fields: {
    answer: {
      type: "hasOne",
      child: { model: "answer", belongsToField: "question" },
      storageKey: "28aM9rCc5Uls",
    },
    quiz: {
      type: "belongsTo",
      parent: { model: "quiz" },
      storageKey: "LuRmdMakdok_",
    },
  },
};

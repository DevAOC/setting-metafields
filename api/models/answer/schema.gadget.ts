import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "answer" model, go to https://setting-metafields.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "eG7ejOMnvCHr",
  fields: {
    question: {
      type: "belongsTo",
      parent: { model: "question" },
      storageKey: "aUMCVseJXGum",
    },
  },
};

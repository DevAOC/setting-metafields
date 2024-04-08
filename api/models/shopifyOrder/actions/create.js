import { applyParams, preventCrossShopDataAccess, save, ActionOptions, CreateShopifyOrderActionContext } from "gadget-server";

/**
 * @param { CreateShopifyOrderActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  applyParams(params, record);
  await preventCrossShopDataAccess(params, record);
  await save(record);
};

/**
 * @param { CreateShopifyOrderActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections, trigger }) {
  if (trigger.type === "shopify_webhook") {
    trigger.payload
  }
};

/** @type { ActionOptions } */
export const options = { actionType: "create" };

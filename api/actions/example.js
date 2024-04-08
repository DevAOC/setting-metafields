import { ActionOptions, ExampleGlobalActionContext } from "gadget-server";

/**
 * @param { ExampleGlobalActionContext } context
 */
export async function run({ params, logger, api, connections }) {
  // const shopify = await connections.shopify.forShopId(params.shopId)
  const shopify = connections.shopify.current // Only works if there's Shopify context (webhook, call from Admin UI)

  const metafield = await shopify.graphql(`
  mutation metafieldsSet($metafields: [MetafieldsSetInput!]!) {
    metafieldsSet(metafields: $metafields) {
      metafields {
        id
      }
      userErrors {
        field
        message
      }
    }
  }`, {
    "metafields": [
      {
        "key": "<your-key>",
        "namespace": "<your-namespace>",
        "ownerId": "gid://shopify/Order/10079785100",
        "type": "<your-type>",
        "value": "<your-value>"
      }
    ]
  })


  // ===========================================================================================


  await api.quiz.create({
    questions: [
      {
        create: {
          answer: {
            create: {

            }
          }          
        }
      }
    ]
  })

  await api.question.create({
    quiz: {
      _link: "quizId"
    },
    answer: {
      create: {

      }
    }
  })

  await api.answer.create({
    question: {
      update: {
        id: "questionId",
        quiz: {
          create: {
            
          }
        }
      }
    }
  })


};



/** @type { ActionOptions } */
export const options = {};

export const params = {
  shopId: {
    type: "string"
  }
}

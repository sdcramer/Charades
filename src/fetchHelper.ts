import { GameState } from "./App";

export const fetcher = async (query: string) => {
  const response = await fetch(import.meta.env.VITE_GRAPHQL_EP, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret":
        import.meta.env.VITE_API_KEY,
      "X-REQUEST-TYPE": "GraphQL",
    },
    body: JSON.stringify({ query: query }),
  });
  const responseData = await response.json();

  // console.log("topicsArray =", topicsArray);
  console.log(JSON.stringify(responseData, null, 2));
  
  return responseData.data;
};

export const buildGetTopicsQuery = (gameState: GameState) => {
  const gameStateAgeType = gameState.age.toLowerCase();
  let topicQueries = `query getTopics {`;
  for (let i = 0; i < gameState.categories.length; i++) {
    let gameStateCategoryType = gameState.categories[i]
      .replace(/ /g, "_")
      .toLowerCase();
    let topicQuery = `topic${
      i + 1
    }: get_random_topics(where: {topic_id__topic_age_types: {age_type: {_eq: ${gameStateAgeType}}}, topic_id__topic_category_types: {category_type: {_eq: ${gameStateCategoryType}}}}, limit: 120) {
        description
        image_name
    }`;
    //  topicQueries = topicQueries + topicQuery
    topicQueries += topicQuery;
  }
  // topicQueries = topicQueries + "}";
  topicQueries += "}";
  console.log("topicQueries =", topicQueries)

  return topicQueries;
}
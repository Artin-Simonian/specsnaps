import sendRequest from "./send-request";

const BASE_URL = "/api/pcPosts";

export async function addPC(pcData) {
  return sendRequest(BASE_URL, "POST", pcData);
}

export async function getPCPosts() {
  return sendRequest(BASE_URL);
}

export async function getReviewsForPost(postId) {
  return sendRequest(`${BASE_URL}/${postId}/reviews`);
}

export async function getById(postId) {
  return sendRequest(`${BASE_URL}/${postId}`);
}

export async function createReview(postId, content) {
  return sendRequest(`${BASE_URL}/${postId}/reviews`, "PUT", { content });
}
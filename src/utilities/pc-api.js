import sendRequest from "./send-request";
const BASE_URL = '/api/pcPosts';

export async function addPC(pcData) {
  return sendRequest(BASE_URL, 'POST', pcData);
}

export async function getPCPosts() {
  return sendRequest(BASE_URL);
}
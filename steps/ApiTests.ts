import { Given, Then } from "@cucumber/cucumber";
import { expect, request, APIResponse } from "@playwright/test";

let response: APIResponse;
let apiContext: any;
let userId: number;
let createdUserName = "";
let createdUserStatus = "";
const baseURL = "https://gorest.co.in/public/v2";
const token = "01ef749e5611d06f2dffd53e41b97515f1689abd99e7a425d7d474cb321fccbc"; // ✅ use a valid token from GoREST

// ✅ Helper for random numbers to make email unique
function randomString() {
  return Math.floor(Math.random() * 100000);
}

// ------------------- CREATE USER -------------------
Given('I send a POST request to {string} with body', async function (endpoint: string, body: string) {
  const uniqueBody = body.replace(/<random>/g, randomString().toString());
  const parsedBody = JSON.parse(uniqueBody);

  createdUserName = parsedBody.name.split("<")[0]; // base name e.g., Tamanna
  createdUserStatus = parsedBody.status;

  apiContext = await request.newContext({
    extraHTTPHeaders: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  this.attach(`🟦 REQUEST: POST ${baseURL}${endpoint}\n${uniqueBody}`);

  response = await apiContext.post(`${baseURL}${endpoint}`, { data: parsedBody });
  const resJson = await response.json();
  this.attach(`🟩 RESPONSE:\n${JSON.stringify(resJson, null, 2)}`);

  if (resJson.id) userId = resJson.id;
});

// ------------------- GET USER -------------------
Given('I send a GET request to {string}', async function (endpoint: string) {
  const finalEndpoint = endpoint.replace("{userId}", userId?.toString());
  this.attach(`🟦 REQUEST: GET ${baseURL}${finalEndpoint}`);

  response = await apiContext.get(`${baseURL}${finalEndpoint}`);
  const resJson = await response.json().catch(() => null);
  this.attach(`🟩 RESPONSE:\n${JSON.stringify(resJson, null, 2)}`);
});

// ------------------- UPDATE USER -------------------
Given('I send a PUT request to {string} with body', async function (endpoint: string, body: string) {
  const finalEndpoint = endpoint.replace("{userId}", userId?.toString());
  const parsedBody = JSON.parse(body);

  this.attach(`🟦 REQUEST: PUT ${baseURL}${finalEndpoint}\n${body}`);

  response = await apiContext.put(`${baseURL}${finalEndpoint}`, { data: parsedBody });
  const resJson = await response.json();
  this.attach(`🟩 RESPONSE:\n${JSON.stringify(resJson, null, 2)}`);

  if (resJson.name) createdUserName = resJson.name;
  if (resJson.status) createdUserStatus = resJson.status;
});

// ------------------- DELETE USER -------------------
Given('I send a DELETE request to {string}', async function (endpoint: string) {
  const finalEndpoint = endpoint.replace("{userId}", userId?.toString());
  this.attach(`🟥 REQUEST: DELETE ${baseURL}${finalEndpoint}`);

  response = await apiContext.delete(`${baseURL}${finalEndpoint}`);
  this.attach(`🟩 RESPONSE STATUS: ${response.status()}`);
});

// ------------------- VALIDATIONS -------------------
Then('The response status should be {int}', async function (statusCode: number) {
  this.attach(`🔹 EXPECTED STATUS: ${statusCode}\n🔹 ACTUAL STATUS: ${response.status()}`);
  expect(response.status()).toBe(statusCode);
});

Then('The response should contain {string}', async function (text: string) {
  const bodyText = JSON.stringify(await response.json());
  this.attach(`🔍 Validating body contains: ${text}`);
  expect(bodyText).toContain(text);
});

Then('The response should have a valid {string}', async function (fieldName: string) {
  const json = await response.json();
  this.attach(`🔍 Validating field "${fieldName}" exists and is valid`);
  expect(json[fieldName]).toBeTruthy();
});

Then('The response {string} should be {string}', async function (fieldName: string, expectedValue: string) {
  const json = await response.json();
  this.attach(`🔍 Checking "${fieldName}" value: expected=${expectedValue}, actual=${json[fieldName]}`);
  expect(json[fieldName]).toContain(expectedValue);
});

Then('I attach request and response to report', async function () {
  const resJson = await response.json().catch(() => null);
  this.attach(`🟩 Final Response Data:\n${JSON.stringify(resJson, null, 2)}`);
});

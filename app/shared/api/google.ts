import {
  GoogleTasksResponse,
  GoogleTasksRequestParameters,
  GoogleOAuth2Params,
} from "~/ts/google";
import { googleTaskAxiosClient } from "~/shared/clients/axios";

export async function getGoogleTasksList(
  requestParams?: GoogleTasksRequestParameters
): Promise<GoogleTasksResponse> {
  const params = new URLSearchParams(requestParams);
  const axiosResponse = await googleTaskAxiosClient.get(
    "lists/@default/tasks",
    { params }
  );
  return axiosResponse.data;
}

export function googleOauth2SignIn(params: GoogleOAuth2Params) {
  var state = generateCryptoRandomState();
  localStorage.setItem("state", state);
  var oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";
  var form = document.createElement("form");
  form.setAttribute("method", "GET");
  form.setAttribute("action", oauth2Endpoint);
  for (var p in { ...params, state: state }) {
    var input = document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute("name", p);
    input.setAttribute("value", params[p as keyof GoogleOAuth2Params]);
    form.appendChild(input);
  }
  document.body.appendChild(form);
  form.submit();
}

function generateCryptoRandomState() {
  const randomValues = new Uint32Array(2);
  window.crypto.getRandomValues(randomValues);
  const utf8Encoder = new TextEncoder();
  const utf8Array = utf8Encoder.encode(
    String.fromCharCode.apply(null, Array.from(randomValues))
  );
  return btoa(String.fromCharCode.apply(null, Array.from(utf8Array)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

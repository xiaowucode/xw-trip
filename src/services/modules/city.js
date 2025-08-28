import XWRequest from "../request";

export function getCityAll() {
  return XWRequest.get({
    url: "/city/all"
  });
}
import XWRequest from "../request";

export function getHotSuggests() {
  return XWRequest.get({
    url: "/home/hotSuggests"
  });
}

export function getCategories() {
  return XWRequest.get({
    url: "/home/categories"
  });
}

export function getHouseList(currentPage) {
  return XWRequest.get({
    url: "/home/houselist",
    params: {
      page: currentPage
    }
  });
}
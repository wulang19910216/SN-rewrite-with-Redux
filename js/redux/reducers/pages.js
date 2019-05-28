
"use strict";

import createParseReducer from "./createParseReducer";

export type Page = {
  id: string,
  title: string,
  url: string,
  logo: ?string
};

function fromParseObject(map: Object): Page {
  return {
    id: map.id,
    title: map.get("title"),
    url: map.get("url"),
    logo: map.get("logo") && map.get("logo").url()
  };
}

module.exports = createParseReducer("LOADED_PAGES", fromParseObject);

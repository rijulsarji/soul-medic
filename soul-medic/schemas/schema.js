import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import bracelets from "./bracelets";
import ebooks from "./ebooks";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([bracelets, ebooks]),
});

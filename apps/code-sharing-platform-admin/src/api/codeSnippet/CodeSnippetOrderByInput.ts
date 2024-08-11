import { SortOrder } from "../../util/SortOrder";

export type CodeSnippetOrderByInput = {
  codeContent?: SortOrder;
  codeName?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  owner?: SortOrder;
  programmingLanguage?: SortOrder;
  updatedAt?: SortOrder;
  visibilityStatus?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type FeedbackOrderByInput = {
  author?: SortOrder;
  codeSnippetId?: SortOrder;
  comment?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
};

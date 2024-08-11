import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { FeedbackListRelationFilter } from "../feedback/FeedbackListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CodeSnippetWhereInput = {
  codeContent?: StringNullableFilter;
  codeName?: StringNullableFilter;
  comments?: CommentListRelationFilter;
  description?: StringNullableFilter;
  feedbacks?: FeedbackListRelationFilter;
  id?: StringFilter;
  owner?: StringNullableFilter;
  programmingLanguage?: StringNullableFilter;
  visibilityStatus?: "Option1";
};

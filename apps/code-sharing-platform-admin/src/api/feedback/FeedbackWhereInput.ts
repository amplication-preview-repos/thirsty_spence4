import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CodeSnippetWhereUniqueInput } from "../codeSnippet/CodeSnippetWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type FeedbackWhereInput = {
  author?: StringNullableFilter;
  codeSnippet?: CodeSnippetWhereUniqueInput;
  comment?: StringNullableFilter;
  id?: StringFilter;
  rating?: IntNullableFilter;
};

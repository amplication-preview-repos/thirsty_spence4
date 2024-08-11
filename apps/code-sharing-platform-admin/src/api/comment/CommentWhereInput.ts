import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CodeSnippetWhereUniqueInput } from "../codeSnippet/CodeSnippetWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type CommentWhereInput = {
  author?: StringNullableFilter;
  codeSnippet?: CodeSnippetWhereUniqueInput;
  content?: StringNullableFilter;
  id?: StringFilter;
};

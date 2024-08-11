import { CodeSnippetWhereUniqueInput } from "../codeSnippet/CodeSnippetWhereUniqueInput";

export type CommentCreateInput = {
  author?: string | null;
  codeSnippet?: CodeSnippetWhereUniqueInput | null;
  content?: string | null;
};

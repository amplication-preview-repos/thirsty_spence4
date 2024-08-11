import { CodeSnippetWhereUniqueInput } from "../codeSnippet/CodeSnippetWhereUniqueInput";

export type CommentUpdateInput = {
  author?: string | null;
  codeSnippet?: CodeSnippetWhereUniqueInput | null;
  content?: string | null;
};

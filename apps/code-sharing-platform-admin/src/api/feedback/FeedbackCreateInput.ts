import { CodeSnippetWhereUniqueInput } from "../codeSnippet/CodeSnippetWhereUniqueInput";

export type FeedbackCreateInput = {
  author?: string | null;
  codeSnippet?: CodeSnippetWhereUniqueInput | null;
  comment?: string | null;
  rating?: number | null;
};

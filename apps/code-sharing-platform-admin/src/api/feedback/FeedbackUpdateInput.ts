import { CodeSnippetWhereUniqueInput } from "../codeSnippet/CodeSnippetWhereUniqueInput";

export type FeedbackUpdateInput = {
  author?: string | null;
  codeSnippet?: CodeSnippetWhereUniqueInput | null;
  comment?: string | null;
  rating?: number | null;
};

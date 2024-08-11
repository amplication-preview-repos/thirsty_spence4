import { CodeSnippet } from "../codeSnippet/CodeSnippet";

export type Comment = {
  author: string | null;
  codeSnippet?: CodeSnippet | null;
  content: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};

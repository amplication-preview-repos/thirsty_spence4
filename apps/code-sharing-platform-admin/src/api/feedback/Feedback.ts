import { CodeSnippet } from "../codeSnippet/CodeSnippet";

export type Feedback = {
  author: string | null;
  codeSnippet?: CodeSnippet | null;
  comment: string | null;
  createdAt: Date;
  id: string;
  rating: number | null;
  updatedAt: Date;
};

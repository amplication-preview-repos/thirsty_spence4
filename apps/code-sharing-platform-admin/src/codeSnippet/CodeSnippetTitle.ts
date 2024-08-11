import { CodeSnippet as TCodeSnippet } from "../api/codeSnippet/CodeSnippet";

export const CODESNIPPET_TITLE_FIELD = "codeName";

export const CodeSnippetTitle = (record: TCodeSnippet): string => {
  return record.codeName?.toString() || String(record.id);
};

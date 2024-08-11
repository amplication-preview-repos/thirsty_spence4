import { CommentCreateNestedManyWithoutCodeSnippetsInput } from "./CommentCreateNestedManyWithoutCodeSnippetsInput";
import { FeedbackCreateNestedManyWithoutCodeSnippetsInput } from "./FeedbackCreateNestedManyWithoutCodeSnippetsInput";

export type CodeSnippetCreateInput = {
  codeContent?: string | null;
  codeName?: string | null;
  comments?: CommentCreateNestedManyWithoutCodeSnippetsInput;
  description?: string | null;
  feedbacks?: FeedbackCreateNestedManyWithoutCodeSnippetsInput;
  owner?: string | null;
  programmingLanguage?: string | null;
  visibilityStatus?: "Option1" | null;
};

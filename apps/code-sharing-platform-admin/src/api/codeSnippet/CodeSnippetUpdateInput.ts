import { CommentUpdateManyWithoutCodeSnippetsInput } from "./CommentUpdateManyWithoutCodeSnippetsInput";
import { FeedbackUpdateManyWithoutCodeSnippetsInput } from "./FeedbackUpdateManyWithoutCodeSnippetsInput";

export type CodeSnippetUpdateInput = {
  codeContent?: string | null;
  codeName?: string | null;
  comments?: CommentUpdateManyWithoutCodeSnippetsInput;
  description?: string | null;
  feedbacks?: FeedbackUpdateManyWithoutCodeSnippetsInput;
  owner?: string | null;
  programmingLanguage?: string | null;
  visibilityStatus?: "Option1" | null;
};

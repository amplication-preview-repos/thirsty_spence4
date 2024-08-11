import { Comment } from "../comment/Comment";
import { Feedback } from "../feedback/Feedback";

export type CodeSnippet = {
  codeContent: string | null;
  codeName: string | null;
  comments?: Array<Comment>;
  createdAt: Date;
  description: string | null;
  feedbacks?: Array<Feedback>;
  id: string;
  owner: string | null;
  programmingLanguage: string | null;
  updatedAt: Date;
  visibilityStatus?: "Option1" | null;
};

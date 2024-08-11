import { Feedback as TFeedback } from "../api/feedback/Feedback";

export const FEEDBACK_TITLE_FIELD = "author";

export const FeedbackTitle = (record: TFeedback): string => {
  return record.author?.toString() || String(record.id);
};

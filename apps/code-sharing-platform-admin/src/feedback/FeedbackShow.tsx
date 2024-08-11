import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { CODESNIPPET_TITLE_FIELD } from "../codeSnippet/CodeSnippetTitle";

export const FeedbackShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="author" source="author" />
        <ReferenceField
          label="codeSnippet"
          source="codesnippet.id"
          reference="CodeSnippet"
        >
          <TextField source={CODESNIPPET_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="comment" source="comment" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="rating" source="rating" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};

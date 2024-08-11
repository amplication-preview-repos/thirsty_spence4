import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CODESNIPPET_TITLE_FIELD } from "./CodeSnippetTitle";

export const CodeSnippetShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="codeContent" source="codeContent" />
        <TextField label="codeName" source="codeName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="owner" source="owner" />
        <TextField label="programmingLanguage" source="programmingLanguage" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="visibilityStatus" source="visibilityStatus" />
        <ReferenceManyField
          reference="Comment"
          target="codeSnippetId"
          label="Comments"
        >
          <Datagrid rowClick="show">
            <TextField label="author" source="author" />
            <ReferenceField
              label="codeSnippet"
              source="codesnippet.id"
              reference="CodeSnippet"
            >
              <TextField source={CODESNIPPET_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Feedback"
          target="codeSnippetId"
          label="Feedbacks"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

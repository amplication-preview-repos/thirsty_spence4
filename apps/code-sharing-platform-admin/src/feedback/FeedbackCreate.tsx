import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { CodeSnippetTitle } from "../codeSnippet/CodeSnippetTitle";

export const FeedbackCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <ReferenceInput
          source="codeSnippet.id"
          reference="CodeSnippet"
          label="codeSnippet"
        >
          <SelectInput optionText={CodeSnippetTitle} />
        </ReferenceInput>
        <TextInput label="comment" multiline source="comment" />
        <NumberInput step={1} label="rating" source="rating" />
      </SimpleForm>
    </Create>
  );
};

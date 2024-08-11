import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CodeSnippetList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CodeSnippets"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="codeContent" source="codeContent" />
        <TextField label="codeName" source="codeName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="owner" source="owner" />
        <TextField label="programmingLanguage" source="programmingLanguage" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="visibilityStatus" source="visibilityStatus" />
      </Datagrid>
    </List>
  );
};

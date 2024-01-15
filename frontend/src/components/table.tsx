import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { book_interface, param_interface } from "../interfaces/books";
import {
  DeleteButtonRenderer,
  EditButtonRenderer,
  UpdatettonRenderer,
} from "./functions";

// Create new GridExample component
const BooksTable = ({ books }: { books: book_interface[] }) => {
  // Column Definitions: Defines & controls grid columns.
  const [edOpen, setEdOpen] = useState(false);
  const [upOpen, setUpOpen] = useState(false);
  const [deOpen, setDeOpen] = useState(false);
  const formatDate = (params: param_interface) => {
    return new Date(params.value).toLocaleDateString();
  };

  const colDefs = [
    {
      headerName: "Name",
      field: "title",
      filter: "agTextColumnFilter",
    },
    { field: "author" },
    { headerName: "Publish Year", field: "publishYear" },
    {
      headerName: "added date",
      field: "createdAt",
      valueFormatter: formatDate,
    },
    {
      headerName: "last updated",
      field: "updatedAt",
      valueFormatter: formatDate,
    },
    {
      headerName: "Edit",
      cellRenderer: (params: param_interface) =>
        EditButtonRenderer(params, edOpen, setEdOpen),
      colId: "edit",
    },
    {
      headerName: "Update",
      cellRenderer: (params: param_interface) =>
        UpdatettonRenderer(params, upOpen, setUpOpen),
      colId: "update",
    },
    {
      headerName: "Delete",
      cellRenderer: (params: param_interface) =>
        DeleteButtonRenderer(params, deOpen, setDeOpen),
      colId: "delete",
    },
  ];

  // Container: Defines the grid's theme & dimensions.
  return (
    <div
      className={"ag-theme-quartz-dark "}
      style={{
        width: "80%",
        height: "80vh",
      }}
    >
      <AgGridReact rowData={books} columnDefs={colDefs} />
    </div>
  );
};

export default BooksTable;

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { useRef, useState, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";
import { book_interface, param_interface } from "../interfaces/books";
import {
  DeleteButtonRenderer,
  EditButtonRenderer,
  UpdatettonRenderer,
} from "./functions";
import Spinner from "./spinner";

// Create new GridExample component
const BooksTable = ({ books }: { books: book_interface[] }) => {
  // Column Definitions: Defines & controls grid columns

  const gridRef: any = useRef(null);
  const [edOpen, setEdOpen] = useState(false);
  const [upOpen, setUpOpen] = useState(false);
  const [deOpen, setDeOpen] = useState(false);
  const formatDate = (params: param_interface) => {
    return new Date(params.value).toLocaleDateString();
  };

  const showOverlay = useCallback(() => {
    gridRef?.current?.api?.showLoadingOverlay();
  }, []);

  const hideOverlay = useCallback(() => {
    gridRef.current.api.hideOverlay();
  }, []);

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
        DeleteButtonRenderer(
          params,
          deOpen,
          setDeOpen,
          showOverlay,
          hideOverlay
        ),
      colId: "delete",
    },
  ];

  return (
    <div
      className={"ag-theme-quartz-dark "}
      style={{
        width: "80%",
        height: "80vh",
      }}
    >
      <AgGridReact
        ref={gridRef}
        rowData={books}
        columnDefs={colDefs}
        overlayLoadingTemplate={
          '<span class="no-data-loader">No data found</span>'
        }
        overlayNoRowsTemplate={
          "<div><button class='bg-transparant hover:bg-gray-100 text-white pointer  font-semibold py-2 px-4 border border-gray-400 rounded shadow'>No books present</button></div>"
        }
      />
    </div>
  );
};

export default BooksTable;

import React from "react";
import DataTable from "react-data-table-component";
import { data } from "./data";
import { Icon } from "./Icon";
import styled from "styled-components";

const CellContainer = styled.div`
  display: flex;
  align-items: center;
`;

function App() {
  return (
    <div className="App">
      <DataTable
        columns={[
          {
            name: "ID",
            sortable: true,
            cell: (data) => (
              <CellContainer>
                <Icon name="folder" color="#0B82F4" />
                <p>{data.id}</p>
              </CellContainer>
            ),
          },

          {
            name: "imp",
            selector: "imp",
            sortable: true,
          },
          {
            name: "created_at",
            sortable: true,
            selector: "created_at",
          },
        ]}
        data={data}
        defaultSortField="id"
        selectableRows={true}
        selectableRowsHighlight={true}
        pagination={true}
        noHeader={true}
        fixedHeader={true}
        highlightOnHover={true}
        paginationPerPage={100}
        paginationRowsPerPageOptions={[10, 100, 500, 1000]}
      />
    </div>
  );
}

export default App;

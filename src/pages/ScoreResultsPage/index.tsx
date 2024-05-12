import { useQuery } from "@tanstack/react-query";
import { getScoringResults } from "../../services";
import { Suspense } from "../../components";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const Index = () => {
  const {
    data: scoreList,
    isPending,
    error,
  } = useQuery({
    queryKey: ["fetchResults"],
    queryFn: getScoringResults,
  });

  const columns: GridColDef[] = [
    {
      field: "userName",
      headerName: "Username",
      flex: 1,
      sortable: true,
    },
    {
      field: "score",
      headerName: "Score",
      flex: 1,
      sortable: true,
    },
  ];

  return (
    <Suspense isPending={isPending} error={error?.message}>
      <DataGrid
        rows={scoreList}
        columns={columns}
        initialState={{
          sorting: {
            sortModel: [{ field: "score", sort: "desc" }],
          },
        }}
      />
    </Suspense>
  );
};

export default Index;

import { useQuery } from "@tanstack/react-query";
import { getScoringResults } from "../../services";
import { Suspense, GameStatus } from "../../components";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Grid } from "@mui/material";

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
      <Grid
        container
        display="flex"
        direction="column"
        alignItems="center"
        gap={3}
      >
        <Grid item>
          <GameStatus />
        </Grid>
        <Grid item>
          <DataGrid
            rows={scoreList}
            columns={columns}
            initialState={{
              sorting: {
                sortModel: [{ field: "score", sort: "desc" }],
              },
            }}
          />
        </Grid>
      </Grid>
    </Suspense>
  );
};

export default Index;

import {FC, useMemo} from 'react';
import {
  Box
} from '@mui/material';
import BrowseViewHeader from "./components/BrowseViewHeader/BrowseViewHeader.tsx";
import {DataGrid, GridPaginationModel} from "@mui/x-data-grid";
import {BrowseColumns} from "../../pages/DefaultBrowsePage/hooks/useBrowseViewData.ts";
import {useSearchParams} from "react-router";

interface BrowseViewProps {
  //required
  title: string;
  columns: BrowseColumns[];
  loading: boolean;
  data: any[];

//optional
  hidePrint?: boolean;
  hideAllRecords: boolean;

  customActions?: unknown[];

    pagination?: {
        gridPaginationModel: GridPaginationModel;
        handleOnPaginationChange: (paginationModel: GridPaginationModel) => void;
    }
}

const BrowseView: FC<BrowseViewProps> = (props: BrowseViewProps) => {
    const columns = props.columns.map((header) => {
        return {
            field: header.name,
            headerName: header.name,
            width: 150,
        }
    });



    return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: 2,
        width: '100%',
      }}
    >
      {/* Title */}
      <BrowseViewHeader title={props.title} />
      {/* Table Container */}
      <Box sx={{
          //height: '100%',
          height: 300,
          flexGrow: 1,
          width: '100%',
          display: 'flex',
            flexDirection: 'column',
      }}>
          <DataGrid
              sx={{
                  flexGrow: 1,
                  overflow: 'auto',
                  '& .MuiDataGrid-virtualScroller': {
                      overflowY: 'auto',
                  },
              }}
              rows={props.data}
              columns={columns}
              loading={props.loading}
              //sx={{height: '100%'}}
              pagination={true}
              paginationModel={props.pagination?.gridPaginationModel}
              onPaginationModelChange={props.pagination?.handleOnPaginationChange}
          />
      </Box>
      {/*<Box sx={{flexGrow: 1}}>
        <TableContainer component={Paper} sx={{height: '100%'}}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {props.rows.map((header) => (
                    <TableCell key={header} align={"center"}>
                      {header}
                    </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {props.data.length === 0 && (
                  <Typography variant={"h6"} component={"h2"} align={"center"}>
                    No records found
                  </Typography>
              )}
              {props.data.map((row, index) => (
                  <TableRow key={index}>
                    {props.rows.map((header) => (
                        <TableCell key={header} align={"center"}>
                          {row[header as keyof typeof row]}
                        </TableCell>
                    ))}
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>*/}
    </Box>
  );
};

export default BrowseView;
export type { BrowseViewProps };

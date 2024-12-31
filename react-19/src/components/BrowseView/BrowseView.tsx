import { FC } from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

interface BrowseViewProps {
  //required
  title: string;
  rows: string[];

  data: any[];

  hidePrint?: boolean;
  hideAllRecords: boolean;

  customActions?: unknown[];
}

const BrowseView: FC<BrowseViewProps> = (props: BrowseViewProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        padding: 2,
      }}
    >
      {/* Title */}
      <Typography variant="h4" component="h1" gutterBottom>
        {props.title}
      </Typography>

      {/* Table Container */}
      <Box sx={{ flexGrow: 1 }}>
        <TableContainer component={Paper} sx={{ height: '100%' }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {props.rows.map((header) => (
                  <TableCell key={header} align="center">
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {props.data.map((row, index) => (
                <TableRow key={index}>
                  {props.rows.map((header) => (
                    <TableCell key={header} align="center">
                      {row[header as keyof typeof row]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default BrowseView;
export type { BrowseViewProps };

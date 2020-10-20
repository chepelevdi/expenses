import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  makeStyles,
  Paper,
  TableBody,
} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

type Align = 'inherit' | 'left' | 'center' | 'right' | 'justify' | undefined;
type CellType = string | number;

interface HeaderTitlesInt {
  title: string;
  align?: Align;
}

interface RowsInt {
  cells: CellInt[];
  id: string | undefined;
}

interface CellInt {
  align?: Align;
  title: CellType;
}

interface TableConstructorInt {
  headerTitles: HeaderTitlesInt[];
  rows?: RowsInt[];
}

const TableConstructor = ({
  headerTitles,
  rows,
}: TableConstructorInt): JSX.Element => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {headerTitles.map((el) => {
              return (
                <TableCell key={el.title} align={el.align || 'center'}>
                  {el.title}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.length
            ? rows.map((row) => (
                <TableRow key={row.id}>
                  {row.cells.map((el) => {
                    return (
                      <TableCell key={el.title} align={el.align || 'center'}>
                        {el.title}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableConstructor;

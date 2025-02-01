import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { colors } from '@mui/material';


const StyledTableCell = styled(TableCell)(({ }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: colors.blueGrey,
    color: colors.blueGrey,
    fontSize:16,
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.background.paper,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  ProductName: string,
  Price: string,
  TotalOrder: number,
  TotalAmount: string,
) {
  return { ProductName, Price, TotalOrder, TotalAmount };
}

const rows = [
  createData('Camera Lens', '$178', 325, '$1,46,660'),
  createData('Black Sleep Dress', '$237',451, '$46,660'),
  createData('Argan Oil', '$262', 125, '$3,46,676'),
  createData('EAU DE Parfum', '$305', 50, '$3,46,981'),
];

export default function OrderTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product Name</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Total Order </StyledTableCell>
            <StyledTableCell align="right">Total Amount</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.ProductName}>
              <StyledTableCell component="th" scope="row">
                {row.ProductName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Price}</StyledTableCell>
              <StyledTableCell align="right">{row.TotalOrder}</StyledTableCell>
              <StyledTableCell align="right">{row.TotalAmount}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import Avatar from '@mui/material/Avatar';
import MenuList from '@mui/material/MenuList';
import Collapse from '@mui/material/Collapse';
import MenuItem from '@mui/material/MenuItem';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';

import { useBoolean } from 'src/hooks/use-boolean';

// import { fCurrency } from 'src/utils/format-number';
// import { fDate, fTime } from 'src/utils/format-time';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { ConfirmDialog } from 'src/components/custom-dialog';
import { usePopover, CustomPopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------



export function DashboardTableRow({ row, selected, onViewRow, onSelectRow, onDeleteRow }) {
  
  const confirm = useBoolean();

  const collapse = useBoolean();

  const popover = usePopover();

  const renderPrimary = (
    <TableRow hover selected={selected} sx={{width:'100%'}}>
      <TableCell padding="checkbox">
        <Checkbox
          checked={selected}
          onClick={onSelectRow}
          inputProps={{ id: `row-checkbox-${row.id}`, 'aria-label': `Row checkbox` }}
        />
      </TableCell>

      <TableCell>
      <Label
          variant="soft"
          color={
            (row.status === 'verified' && 'success') ||
            (row.status === 'uploading' && 'warning') ||
            (row.status === 'unverified' && 'error') ||
            (row.staus === 'processing' && 'primary')||
            'primary'
          }
        >
          {row.status}
        </Label>
        <ListItemText
          primary={row.listName}
          secondary={row.date}
          primaryTypographyProps={{ typography: 'body2', noWrap: true }}
          secondaryTypographyProps={{
            mt: 0.5,
            component: 'span',
            typography: 'body2',
          }}
        />
      </TableCell>

      <TableCell align="left">
         Contains {row.containedEmails} Emails
         {row.creditStatus && <Typography variant="body2" color="rgb(34, 197, 94)">{row.containedEmails} Credit Consumed </Typography>}
          </TableCell>

      <TableCell sx={{display:"flex",alignItems:"center",justifyContent:"end",height:"103px",gap:2}}>
        {/* <Label
          variant="soft"
          sx={{p:1.5,pt:2,pb:2,lineHeight:"24px",color:"#078DEE",backgroundColor:"transparent",border:"1px solid",borderRadius:"8px",borderColor:"rgba(7, 141, 238, 0.48)",fontSize:"14px"}}
          
        > */}
          <Button variant="outlined" color="primary">
          
           {
            (row.status === 'verified' && 'Dawonload Report') ||
            (row.status === 'uploading' && 'Uploading') ||
            (row.status === 'unverified' && 'Start Verification') ||
            (row.staus === 'processing' && 'Verification in Progress')||
            'Verification in Progress'
          }
             {/* </Typography> */}
        {/* </Label> */}
        </Button>
        <IconButton color={popover.open ? 'inherit' : 'default'} onClick={popover.onOpen}>
          <Iconify icon="eva:more-vertical-fill" />
        </IconButton>
      </TableCell>

      {/* <TableCell align="right" sx={{ px: 1, whiteSpace: 'nowrap' }}>
        <IconButton
          color={collapse.value ? 'inherit' : 'default'}
          onClick={collapse.onToggle}
          sx={{ ...(collapse.value && { bgcolor: 'action.hover' }) }}
        >
          <Iconify icon="eva:arrow-ios-downward-fill" />
        </IconButton>

        <IconButton color={popover.open ? 'inherit' : 'default'} onClick={popover.onOpen}>
          <Iconify icon="eva:more-vertical-fill" />
        </IconButton>
      </TableCell> */}
    </TableRow>
  );

  const renderSecondary = (
    <TableRow>
      {/* <TableCell sx={{ p: 0, border: 'none' }} colSpan={8}> */}
      <TableCell sx={{ p: 0, border: 'none' }} >
        <Collapse
          in={collapse.value}
          timeout="auto"
          unmountOnExit
          sx={{ bgcolor: 'background.neutral' }}
        >
          <Paper sx={{ m: 1.5 }}>
            {row.items.map((item) => (
              <Stack
                key={item.id}
                direction="row"
                alignItems="center"
                sx={{
                  p: (theme) => theme.spacing(1.5, 2, 1.5, 1.5),
                  '&:not(:last-of-type)': {
                    borderBottom: (theme) => `solid 2px ${theme.vars.palette.background.neutral}`,
                  },
                }}
              >
                {/* <Avatar
                  src={item.coverUrl}
                  variant="rounded"
                  sx={{ width: 48, height: 48, mr: 2 }}
                /> */}

                <ListItemText
                  primary={item.name}
                  secondary={item.sku}
                  primaryTypographyProps={{ typography: 'body2' }}
                  secondaryTypographyProps={{
                    component: 'span',
                    color: 'text.disabled',
                    mt: 0.5,
                  }}
                />

                <div>x{item.quantity} </div>

                <Box sx={{ width: 110, textAlign: 'right' }}>{(item.price)}</Box>
              </Stack>
            ))}
          </Paper>
        </Collapse>
      </TableCell>
    </TableRow>
  );

  return (
    <>
      {renderPrimary}

      {/* {renderSecondary} */}

      <CustomPopover
        open={popover.open}
        anchorEl={popover.anchorEl}
        onClose={popover.onClose}
        slotProps={{ arrow: { placement: 'right-top' } }}
      >
        <MenuList>
          <MenuItem
            onClick={() => {
              confirm.onTrue();
              popover.onClose();
            }}
            sx={{ color: 'error.main' }}
          >
            <Iconify icon="solar:trash-bin-trash-bold" />
            Delete
          </MenuItem>

          <MenuItem
            onClick={() => {
              onViewRow();
              popover.onClose();
            }}
          >
            <Iconify icon="solar:eye-bold" />
            View
          </MenuItem>
        </MenuList>
      </CustomPopover>

      <ConfirmDialog
        open={confirm.value}
        onClose={confirm.onFalse}
        title="Delete"
        content="Are you sure want to delete?"
        action={
          <Button variant="contained" color="error" onClick={onDeleteRow}>
            Delete
          </Button>
        }
      />
    </>
  );
}


import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { useState, useEffect } from 'react';

import {
  Box,
  Dialog,
  Button,
  Divider,
  TextField,
  DialogTitle,
  DialogContent,
  DialogActions,
  useMediaQuery,
} from '@mui/material';

import { useBoolean } from 'src/hooks/use-boolean';

export function RenameFolderDialog({ open, onClose, listName }) {
  const [newListName, setNewListName] = useState(listName);
  const [hasError, setHasError] = useState(false);
  const theme = useTheme();
  const isWeb = useMediaQuery(theme.breakpoints.up('sm'));
  const dialog = useBoolean();

  useEffect(() => {
    setNewListName(listName);
  }, [listName]);

  const handleAdd = () => {
    if (!newListName.trim()) {
      setHasError(true);
      return;
    }
    setHasError(false);

    
    onClose(); // Close the dialog when Update is clicked
  };

  const handleNameChange = (event) => {
    setNewListName(event.target.value); // Update the name when typing
    if (event.target.value.trim()) {
      setHasError(false); // Reset the error if there's text
    }
  };

  return (
    <Dialog
        open={open}
        onClose={onClose}
        PaperProps={isWeb ? { style: { minWidth: '600px' } } : { style: { minWidth: '330px' } }}
      >
        <DialogTitle
          sx={{ fontWeight: '600', display: 'flex', justifyContent: 'space-between' }}
          onClick={dialog.onFalse}
        >
          Rename Folder
        </DialogTitle>
        <Divider sx={{ mb: 3, borderStyle: 'dashed' }} />

        <DialogContent>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              autoFocus
              fullWidth
              type="text"
              margin="dense"
              variant="outlined"
              label="Folder Name"
              value={newListName} // Set value from state
              onChange={handleNameChange} // Allow editing
              error={hasError} // Show error if validation fails
              helperText={
                hasError ? (
                  'Please enter folder name.'
                ) : (
                  <span>
                    You can rename folder from here.{' '}
                    <Link
                      href="https://forum.pabbly.com/threads/rename-folder.26322/"
                      style={{ color: '#078DEE' }}
                      underline="always"
                      target="_blank"
                    >
                      Learn more
                    </Link>
                  </span>
                )
              }
            />
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleAdd} variant="contained" color="primary">
            Update
          </Button>
          <Button onClick={onClose} variant="outlined">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
  );
}

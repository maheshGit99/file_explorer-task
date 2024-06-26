import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFolder, updateFolder } from "../../redux/slice/FolderSlice";

const AddFolderModel = ({
  openModal,
  setOpenModal,
  editTag,
  selectFolderId,
}) => {
  const [folderName, setFolderName] = useState();
  const dispatch = useDispatch();

  const currentPanel = useSelector((state) => state.FolderSlice.currentPanel);

  const handleData = () => {
    if (editTag === "edit") {
      const payload = {
        newFolderName: folderName,
        panelId: currentPanel,
        folderId: selectFolderId?.id,
      };
      console.log("pay", payload);
      dispatch(updateFolder(payload));
    }
    if (editTag === "add") {
      const payload = {
        folderName: folderName,
        panelId: currentPanel,
      };
      dispatch(addFolder(payload));
    }
    handleClose();
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Dialog
            open={openModal}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {editTag === "edit" ? "Edit" : "Add"} New Folder
            </DialogTitle>
            <DialogContent>
              <TextField
                variant="outlined"
                label="New folder name"
                onChange={(e) => setFolderName(e.target.value)}
                defaultValue={selectFolderId?.folder_name}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => handleData()}>
                {" "}
                {editTag === "edit" ? "Edit" : "Add"}
              </Button>
              <Button onClick={handleClose} autoFocus>
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
    </>
  );
};

export default AddFolderModel;

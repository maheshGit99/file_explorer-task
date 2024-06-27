import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import FolderIconPng from "../../../assets/images/png/folder.png";
import AddFolderModel from "../../../component/common/AddFolderModel";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { deleteFolder } from "../../../redux/slice/FolderSlice";

const DiskC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectFolderId, setSelectFolderId] = useState("");
  const [editTag, setEditTag] = useState("");
  const dispatch = useDispatch();

  const folderData = useSelector((state) => state.FolderSlice.files);
  const currentPanel = useSelector((state) => state.FolderSlice.currentPanel);

  const filterData = folderData.filter((data) => data.id === currentPanel);

  console.log("currentPanel", currentPanel);

  const handleClickOpen = () => {
    setOpenModal(true);
    setEditTag("add");
  };
  const handleEditFolder = () => {
    setOpenModal(true);
    setEditTag("edit");
  };

  // const selected = [];
  const handleSelect = (item) => {
    if (item === selectFolderId) {
      setSelectFolderId("");
    } else {
      setSelectFolderId(item);
    }
  };
  const handleDelete = () => {
    const payload = {
      panelId: currentPanel,
      folderId: selectFolderId?.id,
    };
    dispatch(deleteFolder(payload));
    setSelectFolderId("");
  };
  return (
    <>
      <Box className="folder_common_section">
        <Box className="file_top_header">
          <Box className="add_folder">
            {selectFolderId && (
              <>
                <Button
                  variant="outlined"
                  startIcon={<EditIcon />}
                  onClick={handleEditFolder}
                >
                  Edit Folder
                </Button>{" "}
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  onClick={handleDelete}
                >
                  Delete Folder
                </Button>
              </>
            )}
            <Button
              variant="outlined"
              startIcon={<CreateNewFolderIcon />}
              onClick={handleClickOpen}
              sx={{ marginLeft: "5px" }}
            >
              Add Folder
            </Button>{" "}
          </Box>
        </Box>
        <Box className="file_folder_wrap">
          <Grid container spacing={2}>
            {filterData[0]?.folder?.map((item, index) => (
              <Grid item lg={2} md={3}>
                <Box
                  className={`foleder_wrap ${
                    item?.id === selectFolderId.id ? "selected" : ""
                  }`}
                  onClick={() => {
                    handleSelect(item);
                  }}
                >
                  <Box className="folder_icon">
                    <img src={FolderIconPng} alt="" />
                  </Box>
                  <Typography variant="body2">{item?.folder_name}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <AddFolderModel
        openModal={openModal}
        setOpenModal={setOpenModal}
        selectFolderId={selectFolderId}
        editTag={editTag}
      />
    </>
  );
};

export default DiskC;

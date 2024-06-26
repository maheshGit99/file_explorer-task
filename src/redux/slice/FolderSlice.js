import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  files: [
    {
      id: 1,
      panel_name: "Desktop",
      folder: [],
    },
    {
      id: 2,
      panel_name: "Download",
      folder: [],
    },
    {
      id: 3,
      panel_name: "Diskc",
      folder: [],
    },
    {
      id: 4,
      panel_name: "Diskd",
      folder: [],
    },
  ],
  currentPanel: 1,
};

export const FolderSlice = createSlice({
  name: "folder",
  initialState,
  reducers: {
    Currentpanel: (state, action) => {
      state.currentPanel = action.payload;
    },
    addFolder: (state, action) => {
      const { panelId, folderName } = action.payload;
      const panel = state.files.find((panel) => panel.id === panelId);
      if (panel) {
        const newFolderId = panel.folder.length
          ? Math.max(...panel.folder.map((f) => f.id)) + 1
          : 1;
        panel.folder.push({ id: newFolderId, folder_name: folderName });
      }
    },
    updateFolder: (state, action) => {
      const { panelId, folderId, newFolderName } = action.payload;
      const panel = state.files.find((panel) => panel.id === panelId);
      if (panel) {
        const folder = panel.folder.find((f) => f.id === folderId);
        if (folder) {
          folder.folder_name = newFolderName;
        }
      }
    },
    deleteFolder: (state, action) => {
      const { panelId, folderId } = action.payload;
      const panel = state.files.find((panel) => panel.id === panelId);
      if (panel) {
        panel.folder = panel.folder.filter((f) => f.id !== folderId);
      }
    },
  },
});

export const { Currentpanel, addFolder, updateFolder, deleteFolder } =
  FolderSlice.actions;
export default FolderSlice.reducer;

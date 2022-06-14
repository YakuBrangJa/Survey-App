import { configureStore } from "@reduxjs/toolkit";

import formCardContent from "./formCardContent";
import uiState from "./ui-state";

const store = configureStore({
  reducer: {
    formCardContent,
    uiState,
  },
});

export default store;

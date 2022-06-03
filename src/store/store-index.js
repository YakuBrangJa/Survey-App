import { configureStore } from "@reduxjs/toolkit";

import formCardContent from "./formCardContent";

const store = configureStore({
  reducer: {
    formCardContent: formCardContent,
  },
});

export default store;

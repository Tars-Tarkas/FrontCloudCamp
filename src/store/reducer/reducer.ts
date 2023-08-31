import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface IFCCData {
  phone: string;
  email: string;
}

export interface IFCCObject {
  FCCData: IFCCData[];
  status: "idle" | "loading" | "success" | "failed";
  message: string;
}

export interface IFethRes {
  status: string;
  message: string;
}

export const fetchData: any = createAsyncThunk(
  "FCC/fetchData",
  async function (_, { rejectWithValue }) {
    try {
      const res = await fetch(
        "https://api.sbercloud.ru/content/v1/bootcamp/frontend",
        {
          method: "post",
          body: JSON.stringify(FCCSlice),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!res.ok) {
        throw new Error("Server Error!");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      // return rejectWithValue(error.message);
    }
  }
);

const FCCSlice = createSlice({
  name: "FCC",
  initialState: {
    FCCData: [],
    status: "idle",
    message: "",
  } as IFCCObject,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      // state.loading = true;
      // state.error = null;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.message = action.payload.message;
      // state.PFjson = action.payload;
      // state.error = null;
      // state.loading = false;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.message = "";
      // state.loading = false;
      // state.error = action.error.message;
    });
  },
});
export const {} = FCCSlice.actions;

export default FCCSlice.reducer;

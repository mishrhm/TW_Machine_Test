import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { CountriesState, Country } from "./types";

const initialState: CountriesState = {
  list: [],
  status: "idle",
  error: null,
  selectedRegion: "All",
  visibleCount: 10,
};

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    const response = await fetch(
      "https://restcountries.com/v2/all?fields=name,region,flag",
    );
    if (!response.ok) {
      throw new Error("Failed to fetch country records.");
    }
    const data = await response.json();
    return data as Country[];
  },
);

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setRegion: (state, action: PayloadAction<string>) => {
      state.selectedRegion = action.payload;
      state.visibleCount = 10;
    },
    loadMore: (state) => {
      state.visibleCount += 10;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchCountries.fulfilled,
        (state, action: PayloadAction<Country[]>) => {
          state.status = "succeeded";
          state.list = action.payload;
        },
      )
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});
const countriesReducer = countriesSlice.reducer;
export const { setRegion, loadMore } = countriesSlice.actions;
export default countriesReducer;

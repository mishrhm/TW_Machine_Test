export interface Country {
  name: string;
  region: string;
  flag: string; //url
}

export interface CountriesState {
  list: Country[];
  status: "loading" | "succeeded" | "failed";
  error: string | null;
  selectedRegion: string;
  visibleCount: number; //for pafination
}

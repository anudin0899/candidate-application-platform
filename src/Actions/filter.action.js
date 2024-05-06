import { UPDATE_FILTER } from "./constant";


export const updateFilter = (filterName, value) => ({
  type: UPDATE_FILTER,
  payload: { filterName, value }
});
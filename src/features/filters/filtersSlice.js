import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    jobType:'all',
    jobLocation:'all',
}
const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setJobType: (state, action) => {
            state.jobType = action.payload;
            console.log("filter action.payload type",action.payload)
        },
        setJobLocation: (state, action) => {
            state.jobLocation = action.payload;
            console.log("filter action.payload location",action.payload)
        }
    }
})
export const { setJobLocation, setJobType } = filtersSlice.actions;
export default filtersSlice.reducer;
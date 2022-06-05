import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { Student } from "models";


export interface DashboardStatistics {
  maleCount: number;
  femaleCount: number;
  hightMarkCount: number;
  lowMarkCount: number;
}

export interface DashboardState {
  loading: boolean;
  statistics: DashboardStatistics;
  highestStudentsList: Student[];
  lowestStudentsList: Student[];
  rankingByCityList: RankingByCity[]
}
export interface RankingByCity {
  cityID: string
  rankingList: Student[];
}
const initialState: DashboardState = {
  loading: false,
  statistics: {
    maleCount: 0,
    femaleCount: 0,
    hightMarkCount: 0,
    lowMarkCount: 0,
  },
  highestStudentsList: [],
  lowestStudentsList: [],
  rankingByCityList: []
}
const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    fetchData(state: DashboardState) {
      state.loading = true;
    },
    fetchDataSuccess(state: DashboardState) {
      state.loading = false
    },
    fetchDataFailed(state: DashboardState) {
      state.loading = false
    },

    setStatistics(state: DashboardState, action: PayloadAction<DashboardStatistics>) {
      state.statistics = action.payload
    },
    sethighestStudentsList(state: DashboardState, action: PayloadAction<Student[]>) {
      state.highestStudentsList = action.payload
    },
    setlowestStudentsList(state: DashboardState, action: PayloadAction<Student[]>) {
      state.lowestStudentsList = action.payload
    },
    setrankingByCityList(state: DashboardState, action: PayloadAction<RankingByCity[]>) {
      state.rankingByCityList = action.payload
    },


  },


})

//Action

export const dashboardActions = dashboardSlice.actions
//Selector

export const selectedDashboardLoading = (state: RootState) => state.dashboard.loading
export const selectedDashboardStatistic = (state: RootState) => state.dashboard.statistics
export const selectedHighestStudentList = (state: RootState) => state.dashboard.highestStudentsList
export const selectedLowestStudentList = (state: RootState) => state.dashboard.lowestStudentsList
export const selectedRankingByCityList = (state: RootState) => state.dashboard.rankingByCityList


//Reducer

const dashboardReducer = dashboardSlice.reducer
export default dashboardReducer
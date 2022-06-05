import { useAppDispatch, useAppSelector } from 'app/hooks';
import { useEffect } from 'react';
import { dashboardActions, selectedDashboardLoading, selectedDashboardStatistic, selectedHighestStudentList, selectedLowestStudentList, selectedRankingByCityList } from './dasboardSlice';




export default function Dashboard() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectedDashboardLoading)
  const statistics = useAppSelector(selectedDashboardStatistic)
  const highestStudentsList = useAppSelector(selectedHighestStudentList)
  const lowestStudentsList = useAppSelector(selectedLowestStudentList)
  const rankingByCityList = useAppSelector(selectedRankingByCityList)

  useEffect(() => {
    dispatch(dashboardActions.fetchData())
  }, [dispatch])
  console.log({ loading, statistics, highestStudentsList, lowestStudentsList, rankingByCityList })
  return (
    <h2>
      " Dashboard"
    </h2>
  );
}


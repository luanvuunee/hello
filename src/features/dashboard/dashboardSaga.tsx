import cityAPI from "api/cityAPI";
import studentAPI from "api/studentsAPI";
import { City, ListResponse, Student } from "models";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { dashboardActions, RankingByCity } from "./dasboardSlice";

function* fetchStatistics() {
  try {
    console.log("asd")
    // const reponseList
    const reponseList: Array<ListResponse<Student>> = yield all([
      call(studentAPI.getAll, {
        _page: 1,
        _limit: 1,
        gender: 'male'
      }),
      call(studentAPI.getAll, {
        _page: 1,
        _limit: 1,
        gender: 'female'
      }),
      call(studentAPI.getAll, {
        _page: 1,
        _limit: 1,
        mark_gte: 8
      }),
      call(studentAPI.getAll, {
        _page: 1,
        _limit: 1,
        mark_lte: 5
      })
    ]);



    const statistics = reponseList.map((x) => x.pagination?._totalRows)

    const [maleCount, femaleCount, hightMarkCount, lowMarkCount] = statistics;
    yield put(dashboardActions.setStatistics({ maleCount, femaleCount, hightMarkCount, lowMarkCount }))


  } catch (error) {
    console.log(error, ' dashboard');


  }

}


function* fetchHighestStudentsList() {
  const { data }: ListResponse<Student> = yield call(studentAPI.getAll, {
    _page: 1,
    _limit: 5,
    _sort: 'mark',
    _order: 'desc',

  });
  yield put(dashboardActions.sethighestStudentsList(data))
}

function* fetchLowestStudentsList() {
  const { data }: ListResponse<Student> = yield call(studentAPI.getAll, {
    _page: 1,
    _limit: 5,
    _sort: 'mark',
    _order: 'asc'

  });
  yield put(dashboardActions.setlowestStudentsList(data))
}


function* fetchRankingByCity() {
  // lay list thanh pho

  const { data: listCity }: ListResponse<City> = yield call(cityAPI.getAll)

  // lay diem tung thanh pho
  const callList = listCity.map(item => call(studentAPI.getAll, {
    _page: 1,
    _limit: 5,
    _order: 'desc',
    _sort: 'mark',
    city: item.code,
  }));


  const responseList: Array<ListResponse<Student>> = yield all(callList);

  const rankingByCityList: Array<RankingByCity> = responseList.map((city, idx) => ({
    cityID: listCity[idx].code,
    rankingList: city.data

  }))

  //cap nhat lai state list
  yield put(dashboardActions.setrankingByCityList(rankingByCityList))

}

function* fetchDashboardData() {
  try {
    yield all([
      call(fetchStatistics),
      call(fetchHighestStudentsList),
      call(fetchLowestStudentsList),
      call(fetchRankingByCity),
    ]);
    yield put(dashboardActions.fetchDataSuccess())
  } catch (error) {

  }
}
export default function* dashboardSaga() {
  yield takeLatest(dashboardActions.fetchData.type, fetchDashboardData)
}
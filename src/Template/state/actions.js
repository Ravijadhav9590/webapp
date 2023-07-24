import { dashboardConstants } from "./action-types";
import { dashboardDataApi } from "../utils/api";

/**
 * All Actions for Admin
 */

/**
 * To update Admin state
 * @param {string} auth
 */
const dashboardError = (error) => {
  return {
    type: dashboardConstants.DASHBOARD_DATA_FAILURE,
    dashboardError: error,
    dashboardLoading: false,
  };
};

const dashboardSuccess = (response) => {
  return {
    type: dashboardConstants.DASHBOARD_DATA_SUCCESS,
    dashboardData: response.data.info.countsAndChanges,
    dashboardLoading: false,
  };
};

const getDashboardData = () => {
  return (dispatch, getState) => {
    // const token = getState().authentication.token;
    const token = true;
    dashboardDataApi
      .dashboardDataRequest()
      .then((response) => {
        dispatch(dashboardSuccess(response));
      })
      .catch((error) => {
        dispatch(dashboardError(error));
      });
  };
};

export const dashboardAction = {
  getDashboardData,
};

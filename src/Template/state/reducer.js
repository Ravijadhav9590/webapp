import { dashboardConstants } from "./action-types";

const initialState = {
  dashboardData: [],
  dashboardLoading: true,
  dashboardError: null,
};

const template = (state = initialState, action) => {
  switch (action.type) {
    case dashboardConstants.DASHBOARD_DATA_SUCCESS:
      return {
        ...state,
        dashboardData: action.dashboardData,
        dashboardLoading: action.dashboardLoading,
      };
    case dashboardConstants.DASHBOARD_DATA_FAILURE:
      return {
        ...state,
        dashboardError: action.dashboardError,
        dashboardLoading: action.dashboardLoading,
      };
    default:
      return state;
  }
};
export { template };

import { contractConstants } from "./action-types";

const initialState = {
  contractData: null,
  contractLoading: null,
  contractError: null,
};

const property = (state = initialState, action) => {
  switch (action.type) {
    case contractConstants.CONTRACT_PAGE_SUCCESS:
      return {
        ...state,
        contractData: action.contractData,
        contractLoading: action.contractLoading,
        contractError: null,
      };
    case contractConstants.CONTRACT_PAGE_FAILURE:
      return {
        ...state,
        contractData: [],
        contractLoading: action.contractLoading,
        contractError: action.contractError,
      };
    case contractConstants.RESET_COMPRESSED_VIEW:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
export { property };

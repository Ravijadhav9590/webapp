import { contractConstants } from "./action-types";
import { contractDataApi } from "../utils/api";
/**
 * All Actions for contract Page
 */

/**
 * To update Navbar title action
 * @param {string}
 */

const contractError = (error) => {
  return {
    type: contractConstants.CONTRACT_PAGE_FAILURE,
    contractError: error,
    contractLoading: false,
  };
};

const contractSuccess = (response) => {
  return {
    type: contractConstants.CONTRACT_PAGE_SUCCESS,
    contractData: response.data.info,
    contractLoading: false,
  };
};

const getContractData = (id) => {
  return (dispatch, getState) => {
    // const token = getState().authentication.token;
    const token = true;
    contractDataApi
      .contractPageLoadRequest(token, id)
      .then((response) => {
        dispatch(contractSuccess(response));
      })
      .catch((error) => {
        dispatch(contractError(error));
      });
  };
};

const resetCompressedViewData = () => ({
  type: contractConstants.RESET_COMPRESSED_VIEW,
});
export const contractDataHandle = {
  getContractData,
  resetCompressedViewData,
};

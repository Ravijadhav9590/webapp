import { listingPageConstants } from "./action-types";
import { listingDataApi } from "../utils/api";
/**
 * All Actions for Listing Page
 */

/**
 * To update Navbar title action
 * @param {string}
 */

const listingError = (error) => {
  return {
    type: listingPageConstants.LISTING_PAGE_FAILURE,
    listingError: error,
    listLoading: true,
  };
};

const listingSuccess = (response) => {
  return {
    type: listingPageConstants.LISTING_PAGE_SUCCESS,
    listingData: response.data.info,
    listLoading: false,
  };
};

const getListingData = () => {
  return (dispatch, getState) => {
    // const token = getState().authentication.token;
    const token = true;
    listingDataApi
      .listingPageLoadRequest(token)
      .then((response) => {
        dispatch(listingSuccess(response));
      })
      .catch((error) => {
        dispatch(listingError(error));
      });
  };
};

const sendPreviewError = (error) => {
  return {
    type: listingPageConstants.EDIT_CATEGORY_FAILURE,
    editCategoryError: error,
    editCategoryLoading: true,
  };
};

const sendPreviewSuccess = (response) => {
  return {
    type: listingPageConstants.EDIT_CATEGORY_SUCCESS,
    editCategoryData: response.data.info,
    editCategoryLoading: false,
  };
};

const editCategoryArray = (id, updateData) => {
  return (dispatch, getState) => {
    // const token = getState().authentication.token;
    const token = true;
    listingDataApi
      .editCategoryArrayRequest(token, id, updateData)
      .then((response) => {
        dispatch(sendPreviewSuccess(response));
      })
      .catch((error) => {
        dispatch(sendPreviewError(error));
      });
  };
};

const deleteContractError = (error) => {
  return {
    type: listingPageConstants.DELETE_CONTRACT_FAILURE,
    deleteContractError: error,
    deleteContractLoading: true,
  };
};

const deleteContractSuccess = (response) => {
  // console.log("response", response);
  return {
    type: listingPageConstants.DELETE_CONTRACT_SUCCESS,
    deleteContractData: response.data.info,
    deleteContractLoading: false,
  };
};

const deleteContract = (id) => {
  return (dispatch, getState) => {
    // const token = getState().authentication.token;
    const token = true;
    listingDataApi
      .deleteContractRequest(token, id)
      .then((response) => {
        dispatch(deleteContractSuccess(response));
        dispatch(getListingData());
      })
      .catch((error) => {
        dispatch(deleteContractError(error));
      });
  };
};

const resetListingData = () => ({
  type: listingPageConstants.RESET_LISTING_PAGE,
});

export const listingDataHandle = {
  getListingData,
  editCategoryArray,
  resetListingData,
  deleteContract,
};

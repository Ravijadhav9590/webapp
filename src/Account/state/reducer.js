import { listingPageConstants } from "./action-types";

const initialState = {
  listingData: [],
  listLoading: true,
  listingError: null,
  editCategoryData: null,
  editCategoryLoading: false,
  editCategoryError: null,
  deleteContractData: null,
  deleteContractLoading: false,
  deleteContractError: null,
};

const account = (state = initialState, action) => {
  switch (action.type) {
    case listingPageConstants.LISTING_PAGE_SUCCESS:
      return {
        ...state,
        listingData: action.listingData,
        listLoading: action.listLoading,
        listingError: null,
      };
    case listingPageConstants.LISTING_PAGE_FAILURE:
      return {
        ...state,
        listingData: [],
        listLoading: action.listLoading,
        listingError: action.listingError,
      };

    case listingPageConstants.EDIT_CATEGORY_SUCCESS:
      return {
        ...state,
        editCategoryData: action.editCategoryData,
        editCategoryLoading: action.editCategoryLoading,
        editCategoryError: null,
      };
    case listingPageConstants.EDIT_CATEGORY_FAILURE:
      return {
        ...state,
        editCategory: [],
        editCategoryLoading: action.editCategoryLoading,
        editCategoryError: action.editCategoryError,
      };

    case listingPageConstants.DELETE_CONTRACT_SUCCESS:
      return {
        ...state,
        deleteContractData: action.deleteContractData,
        deleteContractLoading: action.deleteContractLoading,
        deleteContractError: null,
      };
    case listingPageConstants.DELETE_CONTRACT_FAILURE:
      return {
        ...state,
        deleteContractData: [],
        deleteContractLoading: action.deleteContractLoading,
        deleteContractError: action.deleteContractError,
      };
    case listingPageConstants.RESET_LISTING_PAGE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
export { account };

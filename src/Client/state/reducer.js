import { listingEditConstants } from "./action-types";

const initialState = {
  createCategoryData: null,
  createCategoryLoading: true,
  dashboardError: null,

  getCategoryData: [],
  getSubCategoryData: [],
  getDockTypeData: [],
  uploadImageData: [],

  getCategoryLoading: true,
  getSubCategoryLoading: true,
  getDockTypeLoading: true,
  uploadImageLoading: true,

  getCategoryError: null,
  getDockTypeError: null,
  getSubCategoryError: null,
  uploadImageError: null,
};

const client = (state = initialState, action) => {
  switch (action.type) {
    case listingEditConstants.CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        createCategoryData: action.createCategoryData,
        createCategoryLoading: action.createCategoryLoading,
      };
    case listingEditConstants.CREATE_CATEGORY_FAILURE:
      return {
        ...state,
        createCategoryError: action.createCategoryError,
        createCategoryLoading: action.createCategoryLoading,
      };

    // Get category
    case listingEditConstants.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        getCategoryData: action.getCategoryData,
        getCategoryLoading: action.getCategoryLoading,
      };
    case listingEditConstants.GET_CATEGORY_FAILURE:
      return {
        ...state,
        getCategoryError: action.getCategoryError,
        getCategoryLoading: action.getCategoryLoading,
      };

    // Get Sub category
    case listingEditConstants.GET_SUBCATEGORY_SUCCESS:
      return {
        ...state,
        getSubCategoryData: action.getSubCategoryData,
        getSubCategoryLoading: action.getSubCategoryLoading,
      };
    case listingEditConstants.GET_SUBCATEGORY_FAILURE:
      return {
        ...state,
        getSubCategoryError: action.getSubCategoryError,
        getSubCategoryLoading: action.getSubCategoryLoading,
      };

    // Get Dock Type
    case listingEditConstants.GET_DOCKTYPE_SUCCESS:
      return {
        ...state,
        getDockTypeData: action.getDockTypeData,
        getDockTypeLoading: action.getDockTypeLoading,
      };
    case listingEditConstants.GET_DOCKTYPE_FAILURE:
      return {
        ...state,
        getDockTypeError: action.getDockTypeError,
        getDockTypeLoading: action.getDockTypeLoading,
      };

    // Upload icon Image
    case listingEditConstants.UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        uploadImageData: action.uploadImageData,
        uploadImageLoading: action.uploadImageLoading,
      };
    case listingEditConstants.UPLOAD_IMAGE_FAILURE:
      return {
        ...state,
        uploadImageError: action.uploadImageError,
        uploadImageLoading: action.uploadImageLoading,
      };

    // Get Edit Category
    case listingEditConstants.EDIT_CATEGORY_SUCCESS:
      return {
        ...state,
        editCategoryData: action.editCategoryData,
        editCategoryLoading: action.editCategoryLoading,
      };
    case listingEditConstants.EDIT_CATEGORY_FAILURE:
      return {
        ...state,
        editCategoryError: action.editCategoryError,
        editCategoryLoading: action.editCategoryLoading,
      };

    case listingEditConstants.DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        deleteCategoryData: action.deleteCategoryData,
        deleteCategoryLoading: action.deleteCategoryLoading,
      };
    case listingEditConstants.DELETE_CATEGORY_FAILURE:
      return {
        ...state,
        deleteCategoryError: action.deleteCategoryError,
        deleteCategoryLoading: action.deleteCategoryLoading,
      };
    default:
      return state;
  }
};
export { client };

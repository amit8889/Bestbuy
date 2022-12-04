import {
  All_PRODUCT_REQUEST,
  All_PRODUCT_SUCCESS,
  All_PRODUCT_FAIL,
  CLEAR_ERRORS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  NEW_REVIEW_FAIL,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_RESET,
  NEW_REVIEW_SUCCESS,
  ADMIN_PRODUCT_FAIL,
  ADMIN_PRODUCT_REQUEST,
  ADMIN_PRODUCT_SUCCESS,
  NEW_PRODUCT_FAIL,
  NEW_PRODUCT_REQUEST,
  NEW_PRODUCT_SUCCESS,
  NEW_PRODUCT_RESET,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_RESET,
  DELETE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_RESET,
  UPDATE_PRODUCT_SUCCESS,
  DELETE_REVIEW_FAIL,
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_RESET,
  DELETE_REVIEW_SUCCESS,
  All_REVIEW_FAIL,
  All_REVIEW_REQUEST,
  All_REVIEW_SUCCESS
} from "../constants/productConstant";
import { UPDATE_PASSWORD_FAIL } from "../constants/userConstant";

const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case All_PRODUCT_REQUEST:
      case ADMIN_PRODUCT_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case All_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        productsCount: action.payload.productCount,
        resultperpage:action.payload.resultperpage
      };
    case All_PRODUCT_FAIL:
      case ADMIN_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    case  ADMIN_PRODUCT_SUCCESS:
      return{
        loading:false,
        products:action.payload
      }
    default:
      return state;
  }
};

const productDetailsReducer = (state = { product:{} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
        ...state
      };
    case PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
        
      };
    case PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

const productReducer = (state = { }, action) => {
  switch (action.type) {
    case DELETE_PRODUCT_REQUEST:
      case UPDATE_PRODUCT_REQUEST:
      return {
        loading: true,
        ...state
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
        
      };

      case UPDATE_PRODUCT_SUCCESS:
        return {
        ...state,
        loading: false,
        isUpdated: action.payload,
        
      };
    case DELETE_PRODUCT_FAIL:
      case UPDATE_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

      case DELETE_PRODUCT_RESET:
        return {
          ...state,
         
          isDeleted:false ,
        };

        case UPDATE_PRODUCT_RESET:
        return {
          ...state,
         
          isUpdated:false ,
        };


    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};


const newReviewReducer = (state = { }, action) => {
  switch (action.type) {
    case NEW_REVIEW_REQUEST:
      return {
        loading: true,
        ...state
      };
    case NEW_REVIEW_SUCCESS:
      return {
        loading: false,
        success: action.payload,
        
      };
    case NEW_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

      case NEW_REVIEW_RESET:
        return {
          ...state,
         
          success: action.payload,
        };


    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};


//creating a new product by admin
const newProductReducer = (state = {product:{}}, action) => {
  switch (action.type) {
    case NEW_PRODUCT_REQUEST:
      return {
        loading: true,
        ...state
      };
    case NEW_PRODUCT_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        product: action.payload.product,
        
      };
    case NEW_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

      case NEW_PRODUCT_RESET:
        return {
          ...state,
         
          success: action.payload,
        };


    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

//get all product reviews by admin
const productReviewsReducer = (state = { reviews:[] }, action) => {
  switch (action.type) {
    case All_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
        
      };
    case All_REVIEW_SUCCESS:
      return {
        loading: false,
        reviews: action.payload,
        
      };
    case All_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

//creating a new product  reviews by admin
const reviewReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_REVIEW_REQUEST:
      return {
        loading: true,
        ...state
      };
    case DELETE_REVIEW_SUCCESS:
      return {
        loading: false,
        isDeleted: action.payload,
       
        
      };
    case DELETE_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

      case DELETE_REVIEW_RESET:
        return {
          ...state,
         
          isDeleted: false,
        };


    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
export {reviewReducer,productReviewsReducer,productsReducer,productReducer,
  newProductReducer,productDetailsReducer,newReviewReducer}; 

import {
  FETCH_REWARDS_BEGIN,
  FETCH_REWARDS_FAILED,
  FETCH_DAYS_OUT_SUCCESS,
  FETCH_FOOD_DRINK_SUCCESS,
  FETCH_TRAVEL_SUCCESS,
  FETCH_PAMPER_FITNESS_SUCCESS,
  FETCH_ENTERTAINMENT_SUCCESS,
  FETCH_SUPERSAVINGS_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
  foodDrink: [],
  daysOut: [],
  travel: [],
  pamperFitness: [],
  entertainment: [],
  supersavings: [],
  loading: false,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_REWARDS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_REWARDS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case FETCH_FOOD_DRINK_SUCCESS:
      return {
        ...state,
        loading: false,
        foodDrink: action.payload
      };
    case FETCH_DAYS_OUT_SUCCESS:
      return {
        ...state,
        loading: false,
        daysOut: action.payload
      };
    case FETCH_TRAVEL_SUCCESS:
      return {
        ...state,
        loading: false,
        travel: action.payload
      };
    case FETCH_PAMPER_FITNESS_SUCCESS:
      return {
        ...state,
        loading: false,
        pamperFitness: action.payload
      };
    case FETCH_ENTERTAINMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        entertainment: action.payload
      };
    case FETCH_SUPERSAVINGS_SUCCESS:
      return {
        ...state,
        loading: false,
        supersavings: action.payload
      };
    default:
      return state;
  }
};

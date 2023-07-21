import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import CategoriesReducer from "./CategoriesReducer";
import RewardsReducer from "./RewardsReducer";
import RedeemReducer from "./RedeemReducer";
import SubRewardsReducer from "./SubRewardsReducer";
import AccountReducer from "./AccountReducer";
import ContactReducer from "./ContactReducer";
import GetRegionsReducer from "./GetRegionsReducer";
import GetVenuesReducer from "./GetVenuesReducer";
import EmailUniqueCodeReducer from "./EmailUniqueCodeReducer";

export default combineReducers({
  auth: AuthReducer,
  categories: CategoriesReducer,
  rewards: RewardsReducer,
  redeem: RedeemReducer,
  subRewards: SubRewardsReducer,
  account: AccountReducer,
  contact: ContactReducer,
  getRegions: GetRegionsReducer,
  getVenues: GetVenuesReducer,
  emailUniqueCode: EmailUniqueCodeReducer
});

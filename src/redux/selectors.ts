import {IGlobalState} from "./state";

interface IRootState extends IGlobalState {}


export const selectAllState = (state: IRootState) => state.currency
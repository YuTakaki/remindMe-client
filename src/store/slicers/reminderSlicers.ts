import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { ReminderSliceType, TasksType } from "../../types/types";
import { addReminderAction, getTodayReminderAction } from "../actions/reminderAction";

const initialState : ReminderSliceType = {
  loading : false,
  reminders : {},
  currentReminder : null,
}
const reminderSlicers = createSlice({
  name : "reminder",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get today reminder
    builder.addCase(getTodayReminderAction.pending, (state) => {
      state.loading = true
    });

    builder.addCase(getTodayReminderAction.fulfilled, (state, action) => {
      // const reminders : any = {}
      action.payload.forEach((task : TasksType) => {
        const date = moment(task.date).format('MMMM DD');
        if(date in state.reminders){
          state.reminders[date].push(task);
        }else{
          state.reminders[date] = [task];
        }
      });

      state.loading = false;
    });

    //add reminder
    builder.addCase(addReminderAction.pending, (state) => {
      state.loading = true
    });

    builder.addCase(addReminderAction.fulfilled, (state, action) => {
      const date = moment(action.payload.date).format('MMMM DD');
      if(date in state.reminders){
        state.reminders[date].push(action.payload);
      }else{
        state.reminders[date] = [action.payload];
      }
      state.loading = false;
    });
  }
})

const reminderReducer = reminderSlicers.reducer
export default reminderReducer
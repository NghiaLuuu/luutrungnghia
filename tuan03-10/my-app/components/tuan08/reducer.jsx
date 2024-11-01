import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    {
      id: '1',
      name: 'Lê Văn C',
      jobs: ['Tester', 'Developer', 'CEO'],
    },
  ],
};

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    addJob: (state, action) => {
      const { userId, job } = action.payload;
      const user = state.users.find(user => user.id === userId);
      if (user) {
        user.jobs.push(job);
      }
    },
    removeJob: (state, action) => {
      const { userId, jobIndex } = action.payload;
      const user = state.users.find(user => user.id === userId);
      if (user) {
        user.jobs.splice(jobIndex, 1);
      }
    },
  },
});

// Xuất actions và reducer
export const { addJob, removeJob } = jobSlice.actions;
export default jobSlice.reducer;

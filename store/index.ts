import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  candidates: {
    list: [
      {
        id: 1,
        firstName: 'Alice',
        lastName: 'Dupont',
        email: 'alice@example.com',
        cv: '/cv-alice.pdf',
      },
      {
        id: 2,
        firstName: 'Bob',
        lastName: 'Martin',
        email: 'bob@example.com',
        cv: '/cv-bob.pdf',
      },
    ],
  },
};

const candidatesReducer = (state = initialState.candidates, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: {
    candidates: candidatesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

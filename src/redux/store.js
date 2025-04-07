// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import userProfileReducer from './slices/UserProfile';

const store = configureStore({
    reducer: {
        userProfile: userProfileReducer,
        // userExperience: userExperienceReducer,
        // userReview: userReviewReducer,
    },
});

export default store;

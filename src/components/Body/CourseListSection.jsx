import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../features/auth/authSlice';
import { fetchCourses } from '../../features/courses/courseRequest';

const CourseListSection = () => {
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);
  const token = auth.token;
  const [error, setError] = useState('');

  const fetchCourseHandler = async () => {
    try {
      setError('');
      await dispatch(fetchCourses(token));
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <button onClick={fetchCourseHandler}>Fetch Courses</button>
    </div>
  );
};

export default CourseListSection;

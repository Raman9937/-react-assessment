import React, { useState, useEffect } from "react";
import ODAS from "../api/odas";

export const useAssessments = () => {
  const [assessments, setAssessments] = useState([]);
  const [userAssessments, setUserAssessments] = useState([]);

  // TODO - fetch the data from API
  const fetchAssignment = async () => {
    try {
      const response = await ODAS.get();
      setAssessments(response?.assessments);
    } catch (error) {}
  };

  useEffect(() => {
    fetchAssignment();
  }, []);

  return {
    assessments: assessments,
    userAssessments: userAssessments,
  };
};

export default useAssessments;

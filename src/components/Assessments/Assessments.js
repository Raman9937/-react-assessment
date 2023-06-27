import React from "react";
import classes from "./Assessments.module.scss";
import { Card, Container } from "react-bootstrap";
import useAssessments from "../../hooks/useAssessments";
import AssessmentItem from "./AssessmentItem";

const Assessments = () => {
  const { assessments } = useAssessments();

  return (
    <Container>
      <div className={classes.assignmentWrapper}>
        <h1 className={classes.title}>AVAILABLE</h1>
        <Card>
          {assessments &&
            assessments.length > 0 &&
            assessments.map((assessment) => (
              <AssessmentItem assessment={assessment} key={assessment.id} />
            ))}
        </Card>
      </div>
    </Container>
  );
};

export default Assessments;

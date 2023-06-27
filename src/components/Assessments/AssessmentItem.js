import React, { memo, useContext } from "react";
import classes from "./Assessments.module.scss";
import { Row, Col, Button } from "react-bootstrap";
import { ReactComponent as ChatIcon } from "../../assets/chat.svg";
import { ReactComponent as ChevronRight } from "../../assets/chevron-right.svg";

const AssessmentItem = memo(({ assessment }) => {
  const tagClassnameMapping = {
    health: classes.tagRed,
    food: classes.tagPurple,
    housing: classes.tagLightblue,
  };

  const getTagClassNames = (tagName) => {
    const tag = tagName?.toLowerCase();
    return tagClassnameMapping[tag];
  };

  const ShowAssignmentTitle = (title) => {
    alert(title);
  };

  return (
    <div className={classes.assignmentItem}>
      <Row>
        <Col md={9} sm={12}>
          <div className={classes.assignmentBody}>
            <div
              className={`${classes.tag} ${
                assessment?.tag
                  ? getTagClassNames(assessment.tag)
                  : classes.tagDefault
              } `}
            >
              <ChatIcon className={classes.tagIcon} />
            </div>

            <div className={classes.assignmentTextWrapper}>
              <h3 className={classes.assignmentTitle}>{assessment?.title}</h3>
              <p className={classes.assignmentAuther}>{assessment?.author}</p>
            </div>
          </div>
        </Col>
        <Col md={3} sm={12}>
          <div className={classes.assignmentBtnWrappper}>
            <Button onClick={() => ShowAssignmentTitle(assessment?.title)}>
              <span className="me-2">Get started</span>
              <ChevronRight />
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
});

export default AssessmentItem;

import React from "react";
import { Card, CardBody, CardTitle, CardText, Badge } from "reactstrap";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const MyCard = ({ details }) => {
  return (
    <Card>
      <CardBody className="text-center">
        <img
          className={"rounded-circle img-thumbnail borderd-danger"}
          src={details.picture?.large}
          height={"150"}
          width={"150"}
          alt="##"
        />
        <CardTitle className="text-primary">
          <h1>
            <span className="pr-2">{details.name?.title}</span>
            <span>{details.name?.first}</span>
            <span>{details.name?.last}</span>
            <Badge pill color="dark">
              {details.dob?.age}
            </Badge>
          </h1>
        </CardTitle>
        <CardText>
          <h5>
            <FaEnvelope />
            {details.email}
          </h5>
          <p>
            <FaMapMarkedAlt />
            {details.location?.city}
          </p>
          <p>
            <FaPhone />
            {details.phone}
          </p>
        </CardText>
      </CardBody>
    </Card>
  );
};
export default MyCard;

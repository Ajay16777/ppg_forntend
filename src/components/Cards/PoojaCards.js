import React from "react";
import { Link } from "react-router-dom";

//bootstrap
import { Button, Card, CardBody, CardTitle } from "reactstrap";

// react-router-dom
// import { Link } from "react-router-dom";
const PoojaCards = ({ data }) => (
  <Card className="product_cards">
    <div className="img_wraped">
      <img
        className="img-fluid rounded"
        src={data.image}
        alt={data.title}
        loading="lazy"
      />
    </div>

    <CardBody>
      <CardTitle className="text-truncate">{data.name}</CardTitle>

      <div className="actions">
        <Button
          className="btn-rounded"
          to={`/pooja/${data._id}`}
          tag={Link}
          outline
          color="amber"
        >
          Book Pooja
        </Button>
      </div>
    </CardBody>
  </Card>
);
export default PoojaCards;

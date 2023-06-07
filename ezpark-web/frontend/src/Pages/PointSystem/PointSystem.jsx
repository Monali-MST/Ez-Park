import React from "react";
import Badges from "../../Components/PointsystemDetails/Badges/Badges";
import Points from "../../Components/PointsystemDetails/Points/Points";
import Discount from "../../Components/PointsystemDetails/Discount/Discount";
import RefundLevels from "../../Components/PointsystemDetails/RefundLevels/RefundLevels";
import NavBarPoint from "../../Components/PointsystemDetails/NavBarPoint/NavBarPoint";

const PointSystem = () => {
  return (
    <div>
      <NavBarPoint/>
      <Badges />
      <Points />
      <Discount />
      <RefundLevels />
    </div>
  );
};

export default PointSystem;

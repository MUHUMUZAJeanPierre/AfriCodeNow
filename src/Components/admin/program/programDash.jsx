import React from "react";

// components

import CardTable from "../cardStat/cardTable";
import { Link } from "react-router-dom";

export default function ProgramDash() {
  return (
    <>
      <div className="flex pt-[4rem] mx-[2rem] ml-[17rem]">
          <CardTable cardHeading="COURSES" addButton="Add courses"  />
      </div>
    </>
  );
}

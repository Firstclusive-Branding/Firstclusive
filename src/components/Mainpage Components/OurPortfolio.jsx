import React, { useEffect } from "react";
import "../../styles/Mainpage Styles/OurPortfolio.css";
import UnderDevelopment from "./UnderDevelopment ";

function OurPortfolio() {
  useEffect(() => {
    document.title = `Portfolio - Firstclusive`;
  }, []);
  return (
    <div>
      <UnderDevelopment />
    </div>
  );
}

export default OurPortfolio;

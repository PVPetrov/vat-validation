import React, { Fragment } from 'react';
import InputSection from "./InputSection";
import InfoSection from "./InfoSection";
import Card from "../components/Card";

const Main = () => (
  <Fragment>
    <h1>VAT VALIDATOR</h1>
    <Card>
      <InputSection />
      <InfoSection />
    </Card>
  </Fragment>
)

export default Main;

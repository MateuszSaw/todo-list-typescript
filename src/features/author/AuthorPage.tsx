import React, { FunctionComponent } from "react";
import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

const AuthorPage: FunctionComponent = () => (
  <Container>
    <Header title='O autorze'/>
    <Section
    title='Mateusz Sawicki'
    body={
      <>
        Cześć jestem Mateusz 😊. Od jakiegoś czasu uczę się programować.
        Chciałbym zostać Frontend Developerem.<br/>
        Uwielbiam wszystko co związane z piłką nożną - to moje hobby ⚽.
      </>
    }
    />
  </Container>
);

  export default AuthorPage;



import React from "react";
import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import Buttons from "./Buttons";
import Form from "./Form";
import Search from "./Search";
import TaskList from "./TaskList";

function TasksPage(): JSX.Element {
  return (
    <Container>
      <Header title="Lista zadań"/>
      <Section title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section title="Wyszukiwarka"
        body={<Search />}
      />
      <Section title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent ={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
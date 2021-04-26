import { nanoid } from "@reduxjs/toolkit";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../tasksSlice";
import { Button, StyledForm} from "./styled";

const Form: React.FC<{}> = () => {
  const [newTaskContent, setNewTaskContent] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();


  const onFormSubmit = (event: React.FormEvent): void => {
    event.preventDefault();

    const trimmedNewTaskContent: string = newTaskContent.trim();
    if(!trimmedNewTaskContent){
      return;
    };

    dispatch(addTask({
      content: trimmedNewTaskContent,
      done: false,
      id: nanoid(),
    }));

    setNewTaskContent("");
    inputRef?.current?.focus();
  }

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <input
        value={newTaskContent}
        className="form__input"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
        ref={inputRef}
      />
      <Button>
        Dodaj zadanie
      </Button>
    </StyledForm>
  )
};

export default Form;
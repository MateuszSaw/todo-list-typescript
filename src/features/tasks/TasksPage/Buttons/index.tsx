import React from "react";
import { useSelector, useDispatch } from "react-redux";
import  { Wrapper } from "./styled";
import Button from "../../Button"
import { selectAreTaskEmpty, selectHideDone, selectIsEveryTaskDone, setAllDone, toggleHideDone } from "../../tasksSlice";

const Buttons = () => {
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const areTaskEmpty = useSelector(selectAreTaskEmpty);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <Wrapper>
      {!areTaskEmpty && (
      <>
        <Button onClick={() => dispatch(toggleHideDone())}>
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Button>
        <Button
          onClick = {() => dispatch(setAllDone())}
          disabled = {isEveryTaskDone}
        >
          Ukończ wszystkie
        </Button>
        </>
      )}
    </Wrapper>
  );
}

export default Buttons;
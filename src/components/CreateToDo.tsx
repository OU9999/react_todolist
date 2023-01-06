import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, IToDos, toDoState } from "../atoms";

interface IToDo {
  toDo: string;
}
function CreateToDo() {
  const category = useRecoilValue(categoryState);
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IToDo>();
  const handleValid = (data: IToDo) => {
    setToDos((oldToDos) => [
      { text: data.toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", { required: "toDo is required" })}
        placeholder="write to do"
      />
      <button>add</button>
    </form>
  );
}

export default CreateToDo;

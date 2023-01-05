import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";

interface IToDo {
  toDo: string;
}
function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IToDo>();
  const handleValid = (data: IToDo) => {
    setToDos((oldToDos) => [
      { text: data.toDo, id: Date.now(), category: "TO_DO" },
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

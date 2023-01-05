import { useForm } from "react-hook-form";

/* function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDoError, setToDoError] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDoError("");
    setToDo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (toDo.length < 10) {
      return setToDoError("너무 짧음 10자 이상 ㄱ");
    }
    console.log("submit!");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={toDo} placeholder="write to do" onChange={onChange} />
        <button>add</button>
        {toDoError !== "" ? toDoError : null}
      </form>
    </div>
  );
} */

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  passWord: string;
  passWord1: string;
  extraError?: string;
}

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.passWord !== data.passWord1) {
      setError(
        "passWord1",
        { message: "PassWord are not same" },
        { shouldFocus: true }
      );
    }
    // setError("extraError", { message: "Server Offline" });
  };
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "write here",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "only naver.com allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message as string}</span>
        <input
          {...register("firstName", { required: "write here" })}
          placeholder="FirstName"
        />
        <span>{errors?.firstName?.message as string}</span>
        <input
          {...register("lastName", { required: "write here" })}
          placeholder="LastName"
        />
        <span>{errors?.lastName?.message as string}</span>
        <input
          {...register("userName", {
            required: "write here",
            minLength: {
              value: 5,
              message: "more than 5",
            },
            validate: {
              no_OU: async (value) =>
                (await value.includes("OU")) ? "it's already defined" : true,
              no_YH: (value) =>
                value.includes("YH") ? "it's already defined" : true,
            },
          })}
          placeholder="UserName"
        />
        <span>{errors?.userName?.message as string}</span>
        <input
          {...register("passWord", {
            required: "password is required",
          })}
          placeholder="PassWord"
        />
        <span>{errors?.passWord?.message as string}</span>
        <input
          {...register("passWord1", { required: "password again is required" })}
          placeholder="PassWord again"
        />
        <span>{errors?.passWord1?.message as string}</span>
        <button>add</button>
        <span>{errors?.extraError?.message as string}</span>
      </form>
    </div>
  );
}
export default LoginForm;

import { useState } from "react";
import { BsFillTrashFill } from "@react-icons/all-files/bs/BsFillTrashFill";

function App() {
  const [todo, setTodo] = useState("");
  const [todoes, setTodoes] = useState([]);
  const AddNewTodo = (e) => {
    e.preventDefault();
    setTodoes([...todoes, { title: todo, id: Math.random() }]);
    setTodo("");
  };
  const DeleteTodo = (id) => {
    let newArr = todoes.filter((todo) => {
      return todo.id != id;
    });
    setTodoes(newArr);
  };

  return (
    <div className="justify-center flex mt-60 flex-col mx-8">
      <form
        className="bg-blue-300 flex flex-row justify-between"
        onSubmit={(e) => {
          AddNewTodo(e);
        }}
      >
        <input
          type="text"
          className="border-2 border-sky-500 h-[50px] outline-none"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button type="submit" className="bg-red-900">
          Add
        </button>
      </form>

      {todoes.map((todo, index) => {
        return (
          <div key={index} className="flex items-center">
            <div className="bg-gray-400 w-full mt-3">{todo.title}</div>
            <BsFillTrashFill
              size={20}
              className="mt-3 cursor-pointer"
              onClick={() => {
                DeleteTodo(todo.id);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;

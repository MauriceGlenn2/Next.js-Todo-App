import CreateTodo from "@/Components/CreateTodo";
import ToDoList from "@/Components/ToDoList";


export default function Home() {
  return (
    <>
      <div className="container">
        <ToDoList />
        <CreateTodo />
      </div>
    </>
  );
}

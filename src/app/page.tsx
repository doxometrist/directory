import { TodoItem } from "@/components/TodoItem";
import { prisma } from "@/db";
import { Header } from "../components/Header";

function getTodos() {
  return prisma.todo.findMany();
}

export default async function Home() {
  const todos = await getTodos();

  // await prisma.todo.create({ data: { title: "test", complete: false } });

  return (
    <>
      <Header />
      <ul className="pl-4">
        {todos.map((todo) => <TodoItem key={todo.id} {...todo} />)}
      </ul>
    </>
  );
}

import { TodoItem } from "@/components/TodoItem";
import { prisma } from "@/db";
import { Header } from "../components/Header";

function getTodos() {
  return prisma.todo.findMany();
}

async function toggleTodo(id: string, complete: boolean) {
  "use server";
  await prisma.todo.update({ where: { id }, data: { complete } });
  // console.log(id, complete);
  // no redirects here
}

export default async function Home() {
  const todos = await getTodos();

  // await prisma.todo.create({ data: { title: "test", complete: false } });

  return (
    <>
      <Header />
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  );
}

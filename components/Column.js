// components/Column.js
import TaskCard from "./TaskCard";

export default function Column({ title, tasks }) {
  return (
    <div className="p-4 rounded-lg min-w-[250px]">
      <h3 className="font-semibold text-xl mb-4">{title}</h3>
      <div className="space-y-4">
        {tasks.map(task => (
          <TaskCard key={task.id} title={task.title} />
        ))}
      </div>
    </div>
  );
}

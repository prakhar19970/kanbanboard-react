// components/TaskCard.js
export default function TaskCard({ title }) {
    return (
      <div className="p-4 bg-secondary-bg rounded-lg hover:bg-gray-600 cursor-pointer transition">
        {title}
      </div>
    );
  }
  
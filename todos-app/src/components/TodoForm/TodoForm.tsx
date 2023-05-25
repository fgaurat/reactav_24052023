import { FormEventHandler } from "react";

interface TodoFormProps {
  handleSubmit: (event: React.SyntheticEvent) => void;
}

function TodoForm({ handleSubmit }: TodoFormProps) {
  return (
    <div>
      <h2>TodoForm</h2>
      {/* <h2>TodoForm</h2>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <input type="text" name="title" id="title" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          <input type="checkbox" name="completed" id="completed" className="mr-2 leading-tight"/>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add</button>
        </form> */}
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Titre
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Titre"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="completed"
          >
            Completed
          </label>
          <input
            className="mr-2 leading-tight"
            id="completed"
            type="checkbox"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Soumettre
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;

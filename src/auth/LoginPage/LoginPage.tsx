export const LoginPage = () => {
  return (
    <div className="grid grid-cols-2 h-screen gap-2 p-4">
      <div className="before:contents fixed w-full h-screen bg-[#f9fafb] top-0 left-0 -z-10"></div>

      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-4xl mb-8">Ingresar</h1>

          <form className="grid gap-4">
            <div className="grid gap-3">
              <label
                htmlFor="email"
                className="text-lg font-medium text-gray-900 dark:text-white"
              >
                Correo
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="usuario@cotecmar.com..."
                required
              />
            </div>
            <div className="grid gap-3">
              <label
                htmlFor="password"
                className="text-lg font-medium text-gray-900 dark:text-white"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                placeholder="Contraseña..."
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="text-white bg-[#447dfc] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <figure>
        <img
          className="object-cover w-full h-full"
          src="/public/assets/Visionary technology-rafiki.svg"
          alt="Ingresar"
        />
      </figure>
    </div>
  );
};

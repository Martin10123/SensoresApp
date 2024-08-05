import { listSidebar, listSidebarIcons } from "../../helpers/listSidebar";

export const Sidebar = () => {
  return (
    <aside className="md:min-w-96 max-w-96 h-screen grid grid-cols-[5rem,1fr] bg-white">
      <div className="flex flex-col justify-between p-4 border-r">
        <div className="flex flex-col items-center gap-14">
          <figure>
            <img
              className="w-20 h-20 object-cover cursor-pointer"
              src="/assets/logo_cotecmar.png"
              alt="Logo cotecmar"
            />
          </figure>
          {listSidebarIcons.map((item) => (
            <div
              className="hover:bg-slate-100 hover:p-2 hover:rounded-lg hover:shadow-md duration-300"
              key={item.name}
            >
              <img
                className="w-7 h-7 object-cover cursor-pointer"
                src={item.name}
                alt="Icon"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 items-center">
          <figure>
            <img
              className="w-12 h-12 object-cover rounded-full cursor-pointer"
              src="/assets/user.jpg"
              alt=""
            />
          </figure>

          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7 cursor-pointer hover:bg-red-500 hover:p-2 hover:text-white hover:rounded-lg hover:shadow-md duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
            />
          </svg>
        </div>
      </div>

      <div className="border-r flex flex-col gap-4 p-4">
        <h1 className="text-3xl font-medium text-gray-300 pt-4 pb-8">
          Opciónes
        </h1>

        {listSidebar.map((item) => (
          <div className="border-b pb-4 flex flex-col gap-4" key={item.name}>
            <h2 className="text-xs text-gray-500 uppercase">{item.name}</h2>
            <ul className="grid gap-2">
              {item.elements.map((element) => (
                <li
                  className="flex items-center gap-4 p-2 hover:bg-slate-100 duration-300 cursor-pointer"
                  key={element.name}
                >
                  <figure>
                    <img
                      className="w-5 h-5 object-cover"
                      src={element.icon}
                      alt={element.name}
                    />
                  </figure>
                  {element.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
};

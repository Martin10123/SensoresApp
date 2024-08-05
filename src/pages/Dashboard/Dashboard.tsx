import { Sidebar } from "../components/Sidebar";

export const Dashboard = () => {
  return (
    <main className="before:content before:fixed before:top-0 before:left-0 before:w-full before:h-screen before:bg-[#f3f4f6] before:-z-10 grid grid-cols-[0fr,1fr] gap-4">
      <Sidebar />

      <section>
        <h1>Dashboard</h1>

        <article className="grid grid-cols-3">
          <div>
            <h2>Grafico 1</h2>
          </div>
          <div>
            <h2>Grafico 2</h2>
          </div>
          <div>
            <h2>Grafico 3</h2>
          </div>
        </article>

        <article>
          <div>
            <h2>grafico de barras mayor</h2>
          </div>
          <div>
            <h2>grafico de lineas mayor</h2>
          </div>
        </article>

        <section>
          <h2>Lista de modificaciones</h2>

          <div>
            <ul>
              <li>
                <span>Martin Elias</span>
                <p>Modificacion 1</p>
                <p>Fecha: 12/12/2021</p>
              </li>
              <li>
                <span>Martin Elias</span>
                <p>Modificacion 1</p>
                <p>Fecha: 12/12/2021</p>
              </li>
              <li>
                <span>Martin Elias</span>
                <p>Modificacion 1</p>
                <p>Fecha: 12/12/2021</p>
              </li>
              <li>
                <span>Martin Elias</span>
                <p>Modificacion 1</p>
                <p>Fecha: 12/12/2021</p>
              </li>
              <li>
                <span>Martin Elias</span>
                <p>Modificacion 1</p>
                <p>Fecha: 12/12/2021</p>
              </li>
              <li>
                <span>Martin Elias</span>
                <p>Modificacion 1</p>
                <p>Fecha: 12/12/2021</p>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Informacion del buque</h2>
        </section>
      </section>
    </main>
  );
};

// #f3f4f6

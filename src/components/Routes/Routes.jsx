import "./Routes.css";
import { routesData } from "../../data/routesData";
import { FaRoute, FaClock, FaRoad, FaEuroSign } from "react-icons/fa";

function Routes() {
  return (
    <section id="routes" className="routes">
      <div className="container">
        <h2 className="section-title">Популярные маршруты</h2>
        <p className="section-subtitle">
          Основные направления с понятной стоимостью и ориентировочным временем
          в пути.
        </p>

        <div className="routes__list">
          {routesData.map((route, index) => (
            <article className="route-card" key={index}>
              <h3>
                <FaRoute />
                <span>
                  {route.from} — {route.to}
                </span>
              </h3>

              <div className="route-card__meta">
                <p>
                  <FaClock />
                  <span>{route.time}</span>
                </p>

                <p>
                  <FaRoad />
                  <span>{route.distance}</span>
                </p>

                <p className="route-card__price">
                  <FaEuroSign />
                  <span>от {route.price}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Routes;

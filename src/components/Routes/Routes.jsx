import "./Routes.css";
import { routesData } from "../../data/routesData";

function Routes() {
  return (
    <section id="routes" className="routes">
      <div className="container">
        <h2 className="section-title">Популярные маршруты</h2>

        <div className="routes__list">
          {routesData.map((route, index) => (
            <div className="route-card" key={index}>
              <h3>
                {route.from} - {route.to}
              </h3>
              <p>Время: {route.time}</p>
              <p>Расстояние: {route.distance}</p>
              <p className="route-card__price">Цена: от {route.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Routes;

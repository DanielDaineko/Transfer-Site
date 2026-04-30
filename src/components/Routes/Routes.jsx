import "./Routes.css";
import { routesData } from "../../data/routesData";
import { FaRoute, FaClock, FaRoad, FaEuroSign } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Routes() {
  const { t } = useTranslation();

  return (
    <section id="routes" className="routes">
      <div className="container">
        <h2 className="section-title">{t("routes.title")}</h2>
        <p className="section-subtitle">{t("routes.subtitle")}</p>

        <div className="routes__list">
          {routesData.map((route, index) => (
            <article className="route-card" key={index}>
              <h3>
                <FaRoute />
                <span>
                  {route.from} - {route.to}
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
                  <span>
                    {t("routes.from")} {route.price}
                  </span>
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

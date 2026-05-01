import "./Routes.css";
import { FaClock, FaRoad, FaEuroSign, FaArrowRight } from "react-icons/fa";
import { routesData } from "../../data/routesData";
import { useTranslation } from "react-i18next";

function Routes() {
  const { t } = useTranslation();

  return (
    <section id="routes" className="routes reveal">
      <div className="container">
        <h2 className="section-title">{t("routes.title")}</h2>
        <p className="section-subtitle">{t("routes.subtitle")}</p>

        <div className="routes__grid">
          {routesData.map((route, index) => (
            <article className="route-card reveal" key={index}>
              <div>
                <h3>
                  {t(route.fromKey)} — {t(route.toKey)}
                </h3>

                <div className="route-card__meta">
                  <span>
                    <FaClock />
                    {t(route.timeKey)}
                  </span>

                  <span>
                    <FaRoad />
                    {t(route.distanceKey)}
                  </span>
                </div>

                <p className="route-card__price">
                  <FaEuroSign />
                  {t("routes.from")} {route.price}
                </p>
              </div>

              <div className="route-card__map">
                <span></span>
                <FaArrowRight />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Routes;

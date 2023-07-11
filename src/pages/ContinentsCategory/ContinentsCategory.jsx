import "./ContinentsCategory.css";
import { data } from "../../data/Data";
import { Link } from "react-router-dom";

export const ContinentsCategory = () => {
  return (
    <div className="continent-category">
      <h1 className="continent-title">Welcome to Trip Advisor</h1>
      <h2>Top Continents for your Next Holiday</h2>
      <div className="continent-items">
        {data.continents.map(({ id, name, image }) => {
          return (
            <Link to={`/country/${id}`}>
              <div className="continent">
                <img
                  src={image}
                  alt="continent-img"
                  className="img-style"
                ></img>
                <div className="location-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                </div>

                <p className="continent-name">{name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

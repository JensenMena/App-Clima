import { useState } from "react";
import './styles/WeatherCard.css';

const WeatherCard = ({ weather, temp }) => {
    const [isCelsius, setIsCelsius] = useState(true)
    const changeDegrees = () => {
        setIsCelsius(!isCelsius);
    }
    return (
        <section className="card flex-container">
            <h1 className="card_title">Weather App</h1>
            <h2 className="card_country">
                {weather?.name}, {weather?.sys.country}
            </h2>
            <article className="card_body grid-container">
                <div className="card_image_container">
                    <img className="card_image"
                        src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
                        alt={weather?.weather[0].main}
                    />
                </div>
                <article className="info grid-container">
                    <h3 className="info_title">{weather?.weather[0].description}</h3>
                    <ul className="info_list grid-container">
                        <li className="info_item grid-container">
                            <span className="info_label">Wind Speed</span>
                            <span className="info_value">{weather?.wind.speed}m/s</span>
                        </li>
                        <li className="info_item grid container">
                            <span className="info_label">Clouds</span>
                            <span className="info_value">{weather?.clouds.all}%</span>
                        </li>
                        <li className="info_item grid container">
                            <span className="info_label">Pressure</span>
                            <span className="info_value">{weather?.main.pressure}hPa</span>
                        </li>
                    </ul>
                </article>
                <h2 className="card_temp">{isCelsius ? `${temp?.celsius}°C` : `${temp?.fahrenheit}°F`}</h2>
                <button className="card_btn" onClick={changeDegrees}>Change to {isCelsius ? '°F' : '°C'}</button>
            </article>
        </section>
    );
};

export default WeatherCard;



































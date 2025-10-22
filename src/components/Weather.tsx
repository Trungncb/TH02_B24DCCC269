import React, { useState } from "react";
import axios from "axios";

interface WeatherData {
  current_condition: {
    temp_C: string;
    weatherDesc: { value: string }[];
  }[];
}

const Weather: React.FC = () => {
  const [city, setCity] = useState<string>("Hà Nội");
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const getWeather = async () => {
    try {
      const res = await axios.get<WeatherData>(`https://wttr.in/${city}?format=j1`);
      setWeather(res.data);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu thời tiết:", error);
    }
  };

  return (
    <div>
      <h2>Thời tiết</h2>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Nhập tên thành phố"
      />
      <button onClick={getWeather}>Xem</button>

      {weather && (
        <div style={{ marginTop: "20px" }}>
          <p><strong>Nhiệt độ:</strong> {weather.current_condition[0].temp_C}°C</p>
          <p>{weather.current_condition[0].weatherDesc[0].value}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;

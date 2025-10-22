import React, { useEffect, useState } from "react";
import axios from "axios";

interface Article {
  id: number;
  title: string;
  summary: string;
  url: string;
  image_url: string;
}

const News: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    axios
      .get("https://api.spaceflightnewsapi.net/v4/articles?limit=10")
      .then((res) => setArticles(res.data.results))
      .catch((err) => console.error("Lỗi khi lấy tin tức:", err));
  }, []);

  return (
    <div>
      <h2>Tin tức vũ trụ</h2>
      {articles.map((a) => (
        <div key={a.id} style={{ marginBottom: "20px", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
          <h3>{a.title}</h3>
          <img src={a.image_url} alt={a.title} style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }} />
          <p>{a.summary}</p>
          <a href={a.url} target="_blank" rel="noopener noreferrer">Đọc thêm</a>
        </div>
      ))}
    </div>
  );
};

export default News;

import { useEffect } from "react";
import axios from "axios";
import content from "../data/content.json";

export default function DataSender() {
  useEffect(() => {
    axios.post(
      "https://reqres.in/api/workintech",
      content,
      {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      }
    )
    .then(response => {
      console.log("Veri başarıyla gönderildi:", response.data);
    })
    .catch(error => {
      console.error("Gönderme hatası:", error);
    });
  }, []);

  return (
    <div>
      
    </div>
  );
}

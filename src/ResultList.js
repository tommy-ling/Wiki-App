import { useState, useEffect } from "react";
import axios from "axios";
import Result from "./Result";

function ResultList({ value }) {
  const [result, setResult] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        list: 'search',
        utf8: "",
        format: 'json',
        origin: '*',
        srsearch: value
      }
      })
      setResult(data.query.search)
    }
    fetchData()
  }, [value])

  return (
      result.length ?
      result.map((article, idx) => {
        return (
            <Result key={idx} article={article} />
        )
      }) :
      ""
  );
}

export default ResultList;
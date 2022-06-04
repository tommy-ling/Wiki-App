import { useState, useEffect } from "react";
import axios from "axios";
import './Result.css'

function Result({ article }) {
  const [text, setText] = useState('')
  const [mouseOver, setMouseOver] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
      params: {
        format: 'json',
        action: 'query',
        prop: 'extracts',
        exintro: '1',
        explaintext: '1',
        redirects: '1',
        origin: '*',
        pageids: article.pageid
      }
      })
      let text = data.query.pages[article.pageid].extract
      let firstPar = text.split('. ')[0]+'.'
      setText(firstPar)
    }
    fetchData()
  }, [article])

  return (
      <div className="result"
        onClick={() => {window.open(`https://en.wikipedia.org/?curid=${article.pageid}`)}}
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}>
          {mouseOver ?
          <div className="result-outline"></div> :
          "" }
        <h3>{article.title}</h3>
        <p>{text}</p>
      </div>
  );
}

export default Result;
import { useState } from "react";
import ResultList from "./ResultList";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import { InputAdornment } from "@mui/material";
import './SearchApp.css'

function SearchApp() {
  const [value, setValue] = useState('')
  const [searchWord, setSearchWord] = useState('')
  const [showResult, setShowResult] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setValue(searchWord)
    setShowResult(true)
  }

  const handelChange = (e) => {
    setSearchWord(e.target.value)
  }

  const handleClear = () => {
    setShowResult(false)
    setSearchWord('')
    setValue('')
  }

  return (
    <div className={showResult ? "container-result" : "container"}>
      <div className="header">
        <div className="randomSearch" 
          onClick={() => {window.open('https://en.wikipedia.org/wiki/Special:Random')}}>
          <h3>Click here for a random article</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <TextField
          value={searchWord}
          onChange={handelChange}
          type='text'
          sx={{
            "& .MuiOutlinedInput-root": {
              "& > fieldset": { borderColor: "white" },
              paddingRight: 0,
              "& > input": { color: "white" }
            },
            "& .MuiOutlinedInput-root:hover": {
              "& > fieldset": { borderColor: "white" },
            },
            "& .MuiOutlinedInput-root.Mui-focused" : {
              "& > fieldset": { borderColor: "white" }
              }
          }}
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <Button onClick={handleClear}>
                  <ClearIcon sx={{color: 'white'}}/>
                </Button>
              </InputAdornment>
            )
          }}
          />
        </form>
      </div>
      {showResult ? <ResultList value={value} /> :
      <h3>Click icon to search</h3>
      }
    </div>
  );
}

export default SearchApp;

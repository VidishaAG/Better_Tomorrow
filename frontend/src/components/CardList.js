import React, { useEffect, useState } from 'react'
import { Card } from './Card'

export const CardList = () => {
  const [allIssues, setAllIssues] = useState([]);

  useEffect(() => {
    async function fetchData() {

      const url = "http://localhost:5000/allIssues";
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();

      if (response.status === 200) {
        setAllIssues(json);
      }
    }
    fetchData();

  }, [])

  return (
    allIssues.map((issue, index) => {
      return <Card key={index} name={issue.name} heading={issue.heading} description={issue.description} />
    })
  )
}

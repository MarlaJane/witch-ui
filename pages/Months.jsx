import React, { useEffect, useState } from 'react'
import Month from '../components/Month'
import Search from '../components/Search'
import Title from '../components/Title'
import Page from '../components/Page'
import { filterMonths, retrieveMonths } from '../utils/months'
// console.log('retrieveMonths: ', retrieveMonths);

export default () => {
  const [monthsList, setMonthsList] = useState([])
  // console.log('useState: ', useState);
  // console.log('monthsList: ', monthsList);
  const [filteredMonthsList, setFilteredMonthsList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    // console.log('useEffect: ', useEffect);
    async function pullData() {
      // console.log('pullData: ', pullData);
      const months = await retrieveMonths()
      // console.log('months: ', months);

      setMonthsList(months)
      setFilteredMonthsList(months)
      // console.log('months: ', months)
      // console.log('setFilteredMonthsList: ', setFilteredMonthsList);
    }

    pullData()
    // console.log('pullData: ', pullData);
  }, [])

  useEffect(() => {
    // console.log('useEffect(() => : ', useEffect(() => );
    const filtered = filterMonths(monthsList, searchTerm)
    // console.log('filterMonths(monthsList, searchTerm): ', filterMonths(monthsList, searchTerm));

    setFilteredMonthsList(filtered)
    // console.log('filtered: ', filtered);
    // console.log('setFilteredMonthsList: ', setFilteredMonthsList);
  }, [searchTerm])

  return (
    <Page>
      <Title />
      <Search term={searchTerm} setter={setSearchTerm} />
      <div className="output">
        {
          filteredMonthsList.map(month => (
            // console.log('fi: ', fi);
            <Month
              key={month.id}
              id={month.id}
              name={month.name}
              affirmation={month.affirmation}
            />
          ))
        }
      </div>
    </Page>
  )
}

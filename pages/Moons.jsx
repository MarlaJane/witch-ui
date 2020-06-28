import React, { useEffect, useState } from 'react'
import MonthDetails from '../components/MonthDetails'
import Page from '../components/Page'
import Moon from '../components/Moon'
import Title from '../components/Title'
import { retrieveMonthMoons } from '../utils/moons'

export default ({ location }) => {
  const [monthId, setMonthId] = useState(0)
  const [month, setMonth] = useState({})
  const [moonList, setMoonList] = useState([])

  useEffect(() => {
    async function pullData() {
      const { id, details, Moons } = await retrieveMonthMoons(location)
      setMonthId(id)
      setMonth(details)
      setMoonList(Moons)
    }

    pullData()
  }, [])

  return (
    <Page>
      <Title />
      {
        monthId
          ? (
            <>
              <MonthDetails name={month.name} affirmation={month.affirmation} />
              {
                moonList.map(moon => (
                  <Moon
                    key={moon.id}
                    id={moon.id}
                    name={moon.name}
                  // newAndWaxing={moon.newAndWaxing}
                  // full={moon.full}
                  // waningAndDark={moon.waningAndDark}
                  />
                ))
              }
            </>
          )
          : (<div>Not Found</div>)
      }
    </Page>
  )
}

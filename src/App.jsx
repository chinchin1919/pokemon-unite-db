import React, { useEffect, useRef, useState } from 'react';

const App = () => {


  return (
    <>
      {/* <StatsTable key={keyExample} stats={statsExample} /> */}
      <Stats />
    </>
  )
}

const StatsTable = (props) => {
  const stats = props.stats.stats
  const key = props.stats.key

  // const tableBody = stats.map((stat) => {
  //   key.map(k => (
  //     <>
  //       <td>
  //         {stats[k]}
  //       </td>
  //     </>
  //   ))
  // })
  const head = key.map((k, i) => {
    console.log(`<th key=${i}>${k}</th>`)
    return <th key={i}>{k}</th>
  })
  console.log(head)
  return (
    <table className="table w-full">
      <thead>
        <tr>
          {head}
        </tr>
      </thead>
      <tbody>
        {
          stats.map((stat) => {
            return (
              <tr>
                {key.map(k => (
                  <td>
                    {stat[k]}
                  </td>
                ))}
              </tr>
            )
          })
        }
      </tbody>

    </table>
  )
}

const Description = (props) => {
  const info = props.props.info
  return (
    <>
      {/* <div className="mockup-phone">
        <div className="camera" />
        <div className="display">
          <div className="artboard artboard-demo phone-1">
            <img src="https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Clefable.png" />
            <p className="text-4xl text-white">{props.info.name}</p>
          </div>
        </div>
      </div> */}

      <div className='w-1/4 m-4 bg-gray-800 rounded-lg'>
        <div className="flex justify-center items-center">
          <img src="https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Clefable.png" />
        </div>
        <p className="text-4xl text-center text-gray-100">{info.name}</p>
      </div>
    </>
  )
}

const Stats = () => {
  const statsExample = [{ level: 1, hp: 1000, atk: 100 }, { level: 2, hp: 2000, atk: 200 }];
  const keyExample = ["level", "hp", "atk"];
  const tableInfo = { key: keyExample, stats: statsExample }

  // const stats = useRef([{ level: 1, hp: 1000, atk: 80 }, { level: 2, hp: 2000, atk: 160 }]);
  // const [statsTable, setStatsTable] = useState([])

  // useEffect(() => {

  // }, [stats])
  return (
    <>
      <div className="flex m-8 bg-gray-600 rounded-lg">
        <Description props={{ info: { name: "Clefable" } }} />
        <div className="ml-2 w-3/4">
          <StatsTable stats={tableInfo} />
        </div>
      </div>

    </>
  )
}

export default App;
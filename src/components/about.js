import React from 'react'

export default function About() {
  return (
    <>
    {/* <div className='text-center cont'>
      <h3>This is the FLAMES Finder Website.</h3>
      <h5>F - Friends</h5>
      <h5>L - Lovers</h5>
      <h5>A - Affection</h5>
      <h5>M - Marriage</h5>
      <h5>E - Enemys</h5>
      <h5>S - Siblings</h5>
    </div> */}
    <div className='cont1'>
      <h3>Steps to Find</h3>
      <ol>
        <li>Lets take 2 names Mrudula and Harry</li>
        <li>Eliminate the common characters in both names with same frequencies. <br />
           Here, Mrudula and Harry have 'a', 1 'r' common. Eliminate these in both names.  
        </li>
        <li>Count the remaining characters. Here, 'm','u','u','d','l','h','r','y' = 8</li>
        <li>Eliminate each Letter in "Flames" which is in 8th position from the eliminated character in each time <br/>
        Here, F_AMES = F_AM_S = F_A__S = __A__S = __A___ </li>
        <li>Consider the last remaining character as Your relation</li>
      </ol>
    </div>
    </>
  )
}

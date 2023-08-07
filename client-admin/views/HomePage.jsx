import React, { useState } from 'react'

export default function HomePage() {
    return (
        <>
        {/* flex-column */}
        {/* align-items-center */}
            <div className="d-flex flex-column align-items-center">
                <img src="https://d29c1z66frfv6c.cloudfront.net/pub/media/banner/23/6/W27-Homepage-Ladies-Men-Divided-Kids-Baby-Sport-Up-to-70-Sale.jpg" alt="" style={{width: "45%"}} className="mt-5" />
                <div style={{position: "relative"}}>
                    <img src="https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FgxnbE5BMOTY%2Fhqdefault.jpg" alt="" />
                    {/* <div style={{position: absolute; bottom: 0}} className="w-100 text-center">
                        <p className={text-danger}>bikini bottom</p> */}
                        {/* <p>AIDWD</p>
                        <p>AIDWD</p>
                        <p>AIDWD</p> */}
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}

import React from 'react'
import './display.css'
const Display = (val) => {
    
    return (
    // <>{console.log("val",val.val.val.props.AQI)}hello</>
        <div class="page-content page-container" id="page-content">
    <div class="padding">
        <div class="justify-content-center">
            <div>
                
                <div class="card card-weather">
                    <div class="card-body">
                        <div class="weather-date-location">
                            <h3>{localStorage.getItem("city")}</h3>
                            <p class="text-gray"> <span class="weather-date">Updated on  {val.val.props.updatedAt}</span> <span class="weather-location"> {val.val.props.placeName}, {val.val.props.division}, {val.val.props.state}</span> </p>
                        </div>
                        <div class="weather-data d-flex">
                            <div class="mr-auto">
                                {/* <h4 class="display-3">{val.val.props.AQI} <span class="symbol">µg/m3</span></h4> */}
                                <h4 class="display-3">{val.val.props.AQI} </h4>
                                <p>{val.val.props.aqiInfo.category}</p>
                                <p>Main pollutant is {val.val.props.aqiInfo.pollutant} - {val.val.props.aqiInfo.concentration} µg/m3</p>
                            </div>
                        </div>
                    </div>
                    <div style={{background:val.val.colour}}class="card-body p-0">
                        <div class="d-flex weakly-weather">
                            <div class="weakly-weather-item">
                                <p class="mb-0"> CO</p> <i class="mdi mdi-weather-cloudy"></i>
                                <p class="mb-0"> {val.val.props.CO} </p>
                                <p class="mb-0" style={{fontSize:"10px"}}> µg/m3 </p>
                            </div>
                            <div class="weakly-weather-item">
                                <p class="mb-1"> NO2 </p> <i class="mdi mdi-weather-hail"></i>
                                <p class="mb-0"> {val.val.props.NO2} </p>
                                <p class="mb-0" style={{fontSize:"10px"}}> µg/m3 </p>
                            </div>
                            <div class="weakly-weather-item">
                                <p class="mb-1"> OZONE </p> <i class="mdi mdi-weather-partlycloudy"></i>
                                <p class="mb-0"> {val.val.props.OZONE} </p>
                                <p class="mb-0" style={{fontSize:"10px"}}> µg/m3 </p>
                            </div>
                            <div class="weakly-weather-item">
                                <p class="mb-1"> PM10 </p> <i class="mdi mdi-weather-pouring"></i>
                                <p class="mb-0"> {val.val.props.PM10} </p>
                                <p class="mb-0" style={{fontSize:"10px"}}> ppb </p>
                            </div>
                            <div class="weakly-weather-item">
                                <p class="mb-1"> PM25 </p> <i class="mdi mdi-weather-pouring"></i>
                                <p class="mb-0"> {val.val.props.PM25} </p>
                                <p class="mb-0" style={{fontSize:"10px"}}> ppb </p>
                            </div>
                            <div class="weakly-weather-item">
                                <p class="mb-1"> SO2 </p> <i class="mdi mdi-weather-snowy-rainy"></i>
                                <p class="mb-0"> {val.val.props.SO2} </p>
                                <p class="mb-0" style={{fontSize:"10px"}}> µg/m3 </p>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
</div>
    )
}
export default Display;
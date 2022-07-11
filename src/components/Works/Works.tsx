import React from 'react'
import './Works.css'

const Works = () => {
  return (
    <div className='mt-8'>
      <div>
        <h5 className='font-semibold text-lg mb-4'>Work:</h5>
        <ul>
          <li>
            <a className='app-link' href='https://livingatlas.arcgis.com/wayback/' target='_blank'>World Imagery Wayback</a> - explore, compare and start using all different versions of World Imagery Basemap released since 2014.
          </li>

          <li>
            <a className='app-link' href='https://livingatlas.arcgis.com/policy/browse/' target='_blank'>Esri Maps for Public Policy</a> - provides map-based data on community issues such as health, housing, and jobs to support nonprofit planning and action. 
          </li>

          <li>
            <a className='app-link' href='https://livingatlas.arcgis.com/unemploymentpulse/#@=-97.212,37.79,4' target='_blank'>Unemployment Pulse</a> and <a className='app-link' href='https://livingatlas.arcgis.com/covidpulse/' target='_blank'>Covid Pulse</a> apps - visualize time series data via sparkline map symbols.
          </li>

          <li>
            <a className='app-link' href='https://livingatlas.arcgis.com/waterbalance/' target='_blank'>Water Balance App</a> - quickly analyze and graph decades of change in Earth's water budget using data from NASA's GLDAS services.
          </li>

          <li>
            <a className='app-link' href='https://livingatlas.arcgis.com/vessel-traffic/#@=-115.998,32.998,6&time=202006&sublayer=Cargo' target='_blank'>U.S. Vessel Traffic</a> - explore the paths of vessels in and around U.S. waters, look for patterns and trends by time, vessel type, and place.
          </li>

          <li>
            <a className='app-link' href='https://livingatlas.arcgis.com/sea-ice/' target='_blank'>Sea Ice Aware</a>, <a className='app-link' href='https://livingatlas.arcgis.com/airquality/' target='_blank'>Air Quality Aware</a>, <a className='app-link' href='https://livingatlas.arcgis.com/hurricane/' target='_blank'>Hurricane Aware</a> and <a className='app-link' href='https://livingatlas.arcgis.com/wildfire/#@=-106.823,34.614,5' target='_blank'>USA Wildfires</a> - easy-to-use applications that try to simplify access to environmental and demographic information.
          </li>
        </ul>
      </div>

      <div className='mt-4'>
        <h5 className='mb-4'>Here are some old <b>side projects</b> that I worked on mostly in collaboration with my co-worker <a href='https://twitter.com/John_M_Nelson' target='_blank'>John Nelson</a>, I  built them long time ago when jQuery was still my first choice library.</h5>

        <ul>
          <li>
            <a className='app-link' href='https://adventuresinmapping.com/2016/08/30/photochrome-io/' target='_blank'>photochrome.io</a> - word-derived color palettes by sampling colors from mashed up photos.
          </li>

          <li>
            <a className='app-link' href='https://vannizhang.github.io/wonder/' target='_blank'>the United States of Wonder</a> - a autocomplete map of our stately curiosity.
          </li>

          <li>
            <a className='app-link' href='https://vannizhang.github.io/lego-map/' target='_blank'>BRICK-IFIER</a> - making lego-ified maps.
          </li>

          <li>
            <a className='app-link' href='https://vannizhang.github.io/birdeye-view/dist/' target='_blank'>Birds-eye view map</a> - from summit of Mt. Washington, White Mountains, New-Hampshire.
          </li>

          <li>
            <a className='app-link' href='https://vannizhang.github.io/migration_flow_map/' target='_blank'>County-to-County Migration Flows</a> - visualize county migration data (2008-2012) provided by American Community Survey.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Works
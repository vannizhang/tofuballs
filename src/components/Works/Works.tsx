import React from 'react';
// import './Works.css'

const Works = () => {
    return (
        <div className="mt-12 border-gray-200 dark:border-slate-600 pb-10">
            <div>
                <h5 className="font-semibold text-lg mb-4">Work:</h5>
                <ul className="list-outside pl-4">
                    <li>
                        <a
                            href="https://livingatlas.arcgis.com/wayback/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            World Imagery Wayback
                        </a>{' '}
                        - explore, compare and start using all different
                        versions of World Imagery Basemap released since 2014.
                    </li>

                    <li>
                        <a
                            href="https://github.com/Esri/imagery-explorer-apps"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Imagery Explorer Apps:
                        </a>
                        <ul className="mt-2">
                            <li>
                                <a
                                    href="https://livingatlas.arcgis.com/landsatexplorer/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Landsat Explorer
                                </a>{' '}
                                - visualize and analyze the extensive Landsat
                                imagery archive spanning back to 1982.
                            </li>

                            <li>
                                <a
                                    href="https://livingatlas.arcgis.com/sentinel2explorer/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Sentinel-2 Explorer
                                </a>{' '}
                                - Explore and begin to unlock the wealth of
                                information provided by Sentinel-2
                            </li>

                            <li>
                                <a
                                    href="https://livingatlas.arcgis.com/sentinel1explorer/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Sentinel-1 Explorer
                                </a>{' '}
                                - unlock the wealth of information that
                                Sentinel-1 provides.
                            </li>

                            <li>
                                <a
                                    href="https://livingatlas.arcgis.com/landcoverexplorer/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Sentinel-2 Land Cover Explorer
                                </a>{' '}
                                - explore land cover change using Sentinel-2 10m
                                Land Use/Land Cover data.
                            </li>

                            <li>
                                <a
                                    href="https://livingatlas.arcgis.com/nlcdlandcoverexplorer/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    NLCD Land Cover Explorer
                                </a>{' '}
                                - explore and compare annual NLCD Land Cover
                                data since 1985.
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a
                            href="https://github.com/vannizhang/wayback-core"
                            target="_blank"
                            rel="noreferrer"
                        >
                            wayback-core
                        </a>{' '}
                        - NPM package that powers the{' '}
                        <a
                            href="https://livingatlas.arcgis.com/wayback/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            World Imagery Wayback
                        </a>{' '}
                        app, it offers core functionalities to retrieve versions
                        of the World Imagery Wayback archieve.
                    </li>

                    <li>
                        <a
                            href="https://github.com/vannizhang/react-d3-charts"
                            target="_blank"
                            rel="noreferrer"
                        >
                            React D3 Charts
                        </a>{' '}
                        - A collection of simple and reusable charts with D3,
                        React and TypeScript.
                    </li>

                    <li>
                        <a
                            href="https://github.com/vannizhang/react-redux-boilerplate"
                            target="_blank"
                            rel="noreferrer"
                        >
                            React-Redux Boilerplate
                        </a>{' '}
                        - A project template that provides an easier and faster
                        way to start a React+Redux project with TypeScript.
                    </li>

                    <li>
                        <a
                            href="https://livingatlas.arcgis.com/emu/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Ecological Marine Unit Explorer
                        </a>{' '}
                        - portrays a 3-dimensional classification of
                        physiographic and ecological information about ocean
                        water.
                    </li>

                    {/* <li>
                        <a
                            href="https://livingatlas.arcgis.com/policy/browse/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Esri Maps for Public Policy
                        </a>{' '}
                        - provides map-based data on community issues such as
                        health, housing, and jobs to support nonprofit planning
                        and action.
                    </li> */}

                    <li>
                        <a
                            href="https://livingatlas.arcgis.com/unemploymentpulse/#@=-97.212,37.79,4"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Unemployment Pulse
                        </a>{' '}
                        and{' '}
                        <a
                            href="https://livingatlas.arcgis.com/covidpulse/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Covid Pulse
                        </a>{' '}
                        apps - visualize time series data via sparkline map
                        symbols.
                    </li>

                    <li>
                        <a
                            href="https://livingatlas.arcgis.com/vessel-traffic/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            U.S. Vessel Traffic
                        </a>{' '}
                        - explore the paths of vessels in and around U.S.
                        waters, look for patterns and trends by time, vessel
                        type, and place.
                    </li>

                    {/* <li>
                        <a
                            href="https://livingatlas.arcgis.com/sea-ice/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Sea Ice Aware
                        </a>
                        ,{' '}
                        <a
                            href="https://livingatlas.arcgis.com/airquality/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Air Quality Aware
                        </a>
                        ,{' '}
                        <a
                            href="https://livingatlas.arcgis.com/hurricane/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Hurricane Aware
                        </a>{' '}
                        and{' '}
                        <a
                            href="https://livingatlas.arcgis.com/wildfire/#@=-106.823,34.614,5"
                            target="_blank"
                            rel="noreferrer"
                        >
                            USA Wildfires
                        </a>{' '}
                        - easy-to-use applications that try to simplify access
                        to environmental and demographic information.
                    </li> */}

                    {/* <li>
                        <a
                            href="https://adventuresinmapping.com/2016/08/30/photochrome-io/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            photochrome.io
                        </a>
                        ,{' '}
                        <a
                            href="https://vannizhang.github.io/wonder/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            the United States of Wonder
                        </a>
                        ,{' '}
                        <a
                            href="https://vannizhang.github.io/lego-map/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            BRICK-IFIER
                        </a>
                        ,{' '}
                        <a
                            href="https://vannizhang.github.io/birdeye-view/dist/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Birds-eye view map
                        </a>
                        ,{' '}
                        <a
                            href="https://vannizhang.github.io/migration_flow_map/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            County-to-County Migration Flows
                        </a>{' '}
                        - some old side projects that I worked on long time ago
                        (when jQuery was still my first choice library).
                    </li> */}
                </ul>
            </div>
        </div>
    );
};

export default Works;

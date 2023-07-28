import React from 'react';

const About = () => {
    return (
        <div>
            <p>
                Hello, I&#39;m Jinnan, a front-end developer based in Redlands,
                CA. At Esri, I lead the front-end development of the{' '}
                <a
                    href="https://livingatlas.arcgis.com/en/home/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Living Atlas
                </a>{' '}
                team and build apps using contents on Living Atlas along with
                other Esri technologies.
            </p>

            <p>
                I enjoy solving problems by breaking them down into smaller
                parts, whether it&#39;s building a front-end app or writing a
                script to automate a task. I also enjoy spending time learning
                and practicing ways to write clean, maintainable, and reusable
                code that makes life easier for my future self.
            </p>

            <p>
                Currently, I&#39;m working on a{' '}
                <a href="https://github.com/vannizhang/react-d3-charts">
                    UI library
                </a>{' '}
                that can be used to create simple charts with D3, React and
                TypeScript.
            </p>
        </div>
    );
};

export default About;

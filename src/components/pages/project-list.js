import React, { Component } from 'react';
// images
import JewelProj from '../../images/projects/jewel-proj.jpg';
import TwinProj from '../../images/projects/twin-proj.jpg';
import AptiProj from '../../images/projects/apti-proj.jpg';
import LimitProj from '../../images/projects/limitless-proj.jpg';
import AllProjects
    from "./allprojectlist";


export default class ProjectList extends Component {
  render() {
      let projectsAll = [
          {
              name: 'AptiSkills',
              img: AptiProj,
              link: 'https://www.aptiskills.fr/',
              color: '#f29b40',
              description: 'Some Details of Apti Skills'
          },
          {
              name: 'Twin Red',
              img: TwinProj,
              link: 'https://www.twinred.com/',
              color: '#da0000',
              description: 'Some Details of Twin Red'
          },
          {
              name: 'Jewel Hero',
              img: JewelProj,
              link: 'https://jewelhero.com/',
              color: '#49678e',
              description: 'Some Details of Jewel Hero'
          },
          {
              name: 'Limitless',
              img: LimitProj,
              link: 'https://limitlesscreativeco.com/',
              color: '#000',
              description: 'Some Details of Limitless'
          }
      ];
      return (
        <div className="section padt-0">
            <div className="project-list-wrap">
                <div className="container-fluid" id="project-slider">
                    {
                        projectsAll.map(function(project, index) {
                            return (
                                <AllProjects project={project} key={index} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
  }
}
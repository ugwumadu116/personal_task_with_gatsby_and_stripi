import React from 'react';
import SingleCourse from './singleCourse';
import {graphql, useStaticQuery} from 'gatsby';
import style from '../../css/courses.module.css';
import Title from '../Title';

const query =  graphql`
{
    allStrapiCourse(sort: {fields: publish, order: ASC}) {
      nodes {
        title
        url        
        id
        publish
        image {
          childImageSharp {
            fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }  
`

const Course = () => {
    const {allStrapiCourse:{nodes:courses}} = useStaticQuery(query)
    console.log(courses)
    return (
        <section className={style.courses}>
            <Title title="Joel" subtitle="courses"></Title>
            <div className={style.center}>
                {courses.map(item => {
                    return <SingleCourse key={item.id} {...item}></SingleCourse>
                })
                }
            </div>
        </section>
    );
}
 
export default Course;

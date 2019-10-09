import React from 'react';
import SingleCourse from '../Courses/singleCourse';
import {graphql, useStaticQuery, Link} from 'gatsby';
import style from '../../css/courses.module.css';
import Title from '../Title';

const query =  graphql`
{
    allStrapiCourse(sort: {fields: publish, order: ASC}, limit:2) {
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
    return (
        <section className={style.courses}>
            <Title title="top" subtitle="courses"></Title>
            <div className={style.center}>
                {courses.map(item => {
                    return <SingleCourse key={item.id} {...item}></SingleCourse>
                })
                }
            </div>
            <Link to="/courses" className="btn-primary">
                all course
            </Link>
        </section>
    );
}
 
export default Course;

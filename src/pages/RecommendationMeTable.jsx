import React from 'react';

const RecommendationMeTable = ({i,recommend}) => {
    const { 
        recommendationName,recommenderEmail,
        title        

    } = recommend
    // console.log(recommend)
    return (
       <tr className="hover">
      
               <th>{i+1}</th>
               <td>{recommendationName}</td>
               <td>{recommenderEmail}</td>
               <td>{title?.substr(0,17)}...</td>
               
               </tr>
    );
};

export default RecommendationMeTable;
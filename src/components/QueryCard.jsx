import React from 'react';
// {
//     "_id": "6767e66d7e1dc87f5825e9eb",
//     "userName": "gddgfdgd",
//     "email": "email@gmail.com",
//     "userImage": "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
//     "productName": "Nivea Lotion",
//     "productBrand": "Nivea",
//     "imageUrl": "https://m.media-amazon.com/images/I/61LDUu1YQoL._SL1000_.jpg",
//     "title": "Best Substitutes for olitalia",
//     "boycottingDetails": "The company may be accused of using child labor, paying unfair wages, or maintaining poor working conditions for its employees.",
//     "currentDate": "12/22/2024",
//     "currentTime": "4:14:03 PM",
//     "recommendationCount": 0
// }
const QueryCard = ({query}) => {
    const {imageUrl,productName,title,boycottingDetails,currentDate,currentTime,recommendationCount,email,userName} = query
    // console.log(query)
    if (!query) {
        return <p></p>
    }
    return (
        <div className="card bg-base-100  shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={imageUrl?imageUrl:''}
            alt={productName}
            className="rounded-xl aspect-video object-cover" />
        </figure>
        <div className="card-body ">
            <div className="flex justify-between items-center">
                <h2>{currentDate}</h2>
                <h2>{currentTime}</h2>
            </div>
          <h2 className="card-title">Product Name: {productName}</h2>
          <h3>Title:{title}</h3>
          <div>
                <h2>User Name: {userName}</h2>
                <h2>User Email:{email}</h2>
            </div>
          <p>Boycotting Details: {boycottingDetails?.substr(0,17)}...</p>
          <h3>Recommendation Count: {recommendationCount}</h3>
          <div className="card-actions">
            <button className="btn btn-primary">Recommend</button>
          </div>
        </div>
      </div>
    );
};

export default QueryCard;
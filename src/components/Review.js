import React from 'react'
import Tooltip from './Tooltip'
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";

const Review = ({data}) => {
    // const data = props.data
    const content = data.content
    const analytics = data.analytics

    let arr=[];
    let n = content.length
    if(analytics.length>0){
        
        let szAnalytics = analytics.length;
        // insert first
        let firstidx=analytics[0].highlight_indices[0][0]
        arr.push([0,firstidx,'Neutral',''])
        let cnt=firstidx;


        analytics.map((analytic)=>{
            analytic.highlight_indices.map((indices)=>{
                if(cnt < indices[0]){
                    arr.push([cnt,indices[0],'Neutral',''])
                    cnt=indices[0];
                }
                arr.push([...indices,analytic.topic])
                cnt= indices[1]
            })
        })

        // last
        let nhighlight= analytics[szAnalytics-1].highlight_indices.length
        let lastidx=analytics[szAnalytics-1].highlight_indices[nhighlight-1][1]

        arr.push([lastidx,n,'Neutral',''])

        // console.log(arr)
    }
    else if(analytics.length === 0){
        arr.push([0,n,'Neutral',''])
    }

    let stars= parseInt( data.rating_review_score/2 );
    let nonstars= parseInt( 5-stars );

    let starArr=[]
    let nonstarArr=[]

    for(let i=0;i<stars;i++){
        starArr.push(i);
    }
    for(let i=0;i<nonstars;i++){
        nonstarArr.push(i);
    }


    // console.log(arr)
  return (
    <div className='my-20 '>
      <div className='flex flex-row gap-2 justify-center'>
        <div>
            <img className='imageSize' src={data.source.icon} />
        </div>
        <div className='w-3/4 border-y-2 py-1'>
            <div>
                <span className='font-bold'>{data.reviewer_name}</span>
                <span>{` wrote a review at `}</span>
                <span className='font-bold'>{data.source.name}</span>
            </div>
            <div>
            <span className='stars'>
                {
                    starArr.map((star)=>(<FaStar color='orange' />))
                }
                {
                    nonstarArr.map((star)=>(<CiStar  />))
                }
            </span>
                <span>{` `}</span>
                <span>{data.date}</span>
            </div>
            <div>
                {
                    arr.map((tags,index)=> (<Tooltip key={index} content={content} tags={tags}/>) )
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Review

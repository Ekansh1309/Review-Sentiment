import React, { useState } from 'react';

const Tooltip = ({content,tags}) => {
    // console.log(tags)
    let id=0;
    if(tags[0]===-1){
        id=0;
    }
    else{
        id=tags[0];
    }
    
      return (
        <span>
          {/* {
                <p>{content.slice(tags[0],tags[1])}</p>
          } */}
          {
            tags[2] === "Neutral" &&
             <span className='' >{content.slice(id,tags[1])}</span>
          }
          {
            tags[2] === "Positive" &&
             <span title={tags[3]} className='positive-highlight' >{content.slice(id,tags[1])}</span>
            }
          {
            tags[2] === "Negative" &&
             <span title={tags[3]} className='negative-highlight' >{content.slice(id,tags[1])}</span>
          }

        </span>
      );
};

export default Tooltip;

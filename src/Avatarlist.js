import React from 'react';

const Avatarlist = (props) => {
    return (
       <div className="avatar_style ma4 bg-light-red dib pa3 grow shadow-5 tc">
         <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar"/>
         <h1>{props.name}</h1>
         <p>{props.work}</p>
       </div>
       )
}

export default Avatarlist;
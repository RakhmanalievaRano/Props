 import React from 'react'
import { UserName } from './UserName'
import { UserAge }  from "./UserAge"
 

 
  export const Users = (props) => {
   return (
    <div>
        {props.userInfo.map((el)=>{
            return(
            <div>
                <UserName name={el.name}/>
                <UserAge age={el.age}/>
            </div>

            )
        })}
    </div>
   )
    }
 

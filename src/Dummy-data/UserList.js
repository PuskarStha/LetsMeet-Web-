import React, { Component } from 'react';
import userlist from './Dummy-data.json';
import './userlist.css';
class PostList extends Component{
    render(){
        return(
            <div className='usercontainer' >
               {userlist.map((User,index)=>{
                   return( 
                     <div className='second'>
                         <div className='first'>
                   <div className='zero'>
                   {User.name}
                   </div>
                   </div>
                   </div>
            
                    )
                   
               })}

            </div>
        )
    }
}
export default PostList;
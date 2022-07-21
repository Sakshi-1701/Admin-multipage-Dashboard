import React from 'react'
import "./userEdit.css"
import PersonIcon from '@mui/icons-material/Person';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PublishIcon from '@mui/icons-material/Publish';
import { display } from '@mui/system';
import { Link } from 'react-router-dom';

function UserEdit() {
  return (
    <div className='userEdit'>
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
           <Link to= "/newUser">
            <button className='userAddButton'>Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://grid.gograph.com/vector-man-in-business-suit-icon-vector-art_gg69663582.jpg" alt="" className='userShowImg'/>
                    <div className="userShowTopTitle">
                       <span className="userShowUserName">Jai Sharma</span>
                       <span className="userShowUserTitle">SWE Intern</span>

                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details </span>
                    <div className="userShowInfo">
                    <PersonIcon className='userShowIcon'/>
                    <span className="userShowInfoTitle">jaisharma17</span>
                    </div>
                    <div className="userShowInfo">
                    <PlaceIcon className='userShowIcon'/>
                    <span className="userShowInfoTitle">India</span>
                    </div>
                    <div className="userShowInfo">
                    <PhoneIcon className='userShowIcon'/>
                    <span className="userShowInfoTitle">+91 6735462846</span>
                    </div>
                    <div className="userShowInfo">
                    <MailOutlineIcon className='userShowIcon'/>
                    <span className="userShowInfoTitle">jaisharma@gmail</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit Details</span>
                <form className='userUpdateForm'>
                    <div className="userUpdateLeft">

                        <div className="userUpdateItem">
                         <label >UserName</label>
                         <input type="text" placeholder='Enter UserName'  className='userUpdateInput'/>
                        </div>

                        <div className="userUpdateItem">
                         <label >Full Name</label>
                         <input type="text" placeholder='Enter full name'  className='userUpdateInput'/>
                        </div>

                        <div className="userUpdateItem">
                         <label >Email</label>
                         <input type="text" placeholder='Enter mail id'  className='userUpdateInput'/>
                        </div>

                        <div className="userUpdateItem">
                         <label >Address</label>
                         <input type="text" placeholder='Enter Address'  className='userUpdateInput'/>
                        </div>

                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img className="userUpdateImg" src="https://grid.gograph.com/vector-man-in-business-suit-icon-vector-art_gg69663582.jpg" alt="" />
                        <label htmlFor="file"><PublishIcon className='publish'/></label>
                        <input type="file" style={{display:"none"}} id="file" />
                        </div>
                        <button className='userUpdateButton'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default UserEdit

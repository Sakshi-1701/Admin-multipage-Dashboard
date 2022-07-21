import React,{useState} from 'react'
import "./user.css"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import {userRows} from"../../dummyData"
import { Link } from 'react-router-dom';

function User() {
   
    const[data,setData]=useState(userRows);

    const handleClick=(id)=>{
        setData(data.filter(item=>item.id!==id))
    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 200,renderCell:(parameters)=>{
            return(
                <div className='userInfo'>
                    <img className='userPhoto' src={parameters.row.avtar} alt="" />
                    {parameters.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 110,
        },
        {
            field: 'transaction',
             headerName: 'Transactions',
            width: 160,
          },
          {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell:(parameters)=>{
                return(
                    <>
                    <Link to={"/userEdit/"+parameters.row.id}>
                    <button className='userListEdit'>Edit</button>
                    </Link>
                    <DeleteIcon className='userListDelete' onClick={()=>handleClick(parameters.row.id)} />
                    </>
                )
            }
          },


        
      ];
      
  return (
    <div className='user'>
           <DataGrid disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div>
  )
}

export default User
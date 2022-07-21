import React,{useState} from 'react'
import "./productList.css"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import {productRows} from"../../dummyData"
import { Link } from 'react-router-dom';

export default function ProductList() {

    const [data,setData]=useState(productRows)

    const handleClick=(id)=>{
        setData(data.filter(item=>item.id!==id))
    };


    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'product', headerName: 'Product', width: 200,renderCell:(parameters)=>{
            return(
                <div className='productListUser'>
                    <img className='productListImg' src={parameters.row.img} alt="" />
                    {parameters.row.name}
                </div>
            );
        }, },
        { field: 'stock', headerName: 'Stock', width: 200 },
        
        {
            field: 'price',
             headerName: 'Price',
            width: 160,
          },
          {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell:(parameters)=>{
                return(
                    <>
                    <Link to={"/product/"+parameters.row.id}>
                    <button className='productListEdit'>Edit</button>
                    </Link>
                    <DeleteIcon className='prodctListDelete' onClick={()=>handleClick(parameters.row.id)} />
                    </>
                )
            }
          },


        
      ];

  return (
    <div className='productList'>
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

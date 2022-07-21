import React from 'react'
import "./widgetLg.css"

function WidgetLg() {

    const Button=({type})=>{
        return <button className={'widgetLgMainButton ' + type} >{type}</button>
    }

  return (
    <div className='widgetLg'>
        <h3 className="widgetLgTitle">Latest Transactions</h3>
        <table className="widgetLgTable">
            <tr className="widgetLgTr">
                <th className="widgetLgTh">Customers</th>
                <th className="widgetLgTh">Date</th>
                <th className="widgetLgTh">Amount in Rs</th>
                <th className="widgetLgTh">Status</th>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_W-9B0HqymjEaava4U-JqdFCD-tR3w0GJJQ&usqp=CAU" alt="" className='widgetLgImg'/>
                    <span className="widgetLgName">Shruti Sharma</span>
                </td>
                <td className="widgetLgDate">2 july 2022</td>
                <td className="widgetLgAmount">8000</td>
                <td className="widgetLgButton"><Button type="Verified"/></td>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_W-9B0HqymjEaava4U-JqdFCD-tR3w0GJJQ&usqp=CAU" alt="" className='widgetLgImg'/>
                    <span className="widgetLgName">Shruti Sharma</span>
                </td>
                <td className="widgetLgDate">2 july 2022</td>
                <td className="widgetLgAmount">8000</td>
                <td className="widgetLgButton"><Button type="Pending"/></td>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_W-9B0HqymjEaava4U-JqdFCD-tR3w0GJJQ&usqp=CAU" alt="" className='widgetLgImg'/>
                    <span className="widgetLgName">Shruti Sharma</span>
                </td>
                <td className="widgetLgDate">2 july 2022</td>
                <td className="widgetLgAmount">8000</td>
                <td className="widgetLgButton"><Button type="Verified"/></td>
            </tr>
        </table>
    </div>
  )
}

export default WidgetLg
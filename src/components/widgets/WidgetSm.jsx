import React from 'react'
import "./widgetSm.css"
import VisibilityIcon from '@mui/icons-material/Visibility';

function WidgetSm() {
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle"> New Joinees</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src="https://i.pinimg.com/236x/da/fd/f2/dafdf25168edcb2f0e1d8702797946cc.jpg" alt="img1" className='widgetSmImg' />
            <div className="widgetSmUser">
                <span className="widgetSmUserName">Sakshi Vashishtha</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
              <VisibilityIcon className='icon'/>
              Show
            </button>
            </li>

            <li className="widgetSmListItem">
                <img src="https://i.pinimg.com/236x/da/fd/f2/dafdf25168edcb2f0e1d8702797946cc.jpg" alt="img1" className='widgetSmImg' />
            <div className="widgetSmUser">
                <span className="widgetSmUserName">Sakshi Vashishtha</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
              <VisibilityIcon className='icon'/>
              Show
            </button>
            </li>

            <li className="widgetSmListItem">
                <img src="https://i.pinimg.com/236x/da/fd/f2/dafdf25168edcb2f0e1d8702797946cc.jpg" alt="img1" className='widgetSmImg' />
            <div className="widgetSmUser">
                <span className="widgetSmUserName">Sakshi Vashishtha</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
              <VisibilityIcon className='icon'/>
              Show
            </button>
            </li>

            <li className="widgetSmListItem">
                <img src="https://i.pinimg.com/236x/da/fd/f2/dafdf25168edcb2f0e1d8702797946cc.jpg" alt="img1" className='widgetSmImg' />
            <div className="widgetSmUser">
                <span className="widgetSmUserName">Sakshi Vashishtha</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
              <VisibilityIcon className='icon'/>
              Show
            </button>
            </li>
        </ul>
    </div>
  )
}

export default WidgetSm
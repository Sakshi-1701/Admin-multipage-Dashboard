import "./product.css";
import { Link } from "react-router-dom";
import Chart from "../../components/charts/Chart";
import {productData} from "../../dummyData"
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { display } from "@mui/system";

function Product() {
  return (
    <div className="myproduct">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>

   <div className="productTop">
    <div className="productTopLeft">
        <Chart data={productData} dataKey="Sales" title="Sales Performance" />
    </div>
    <div className="productTopRight">
        <div className="productInfoTop">
            <img src="https://images.indianexpress.com/2022/07/iPhone-14-Pro-Ian-Zelbo.jpg" alt="" className="productInfoImg" />
            <span className="productName">i-phone</span>
        </div>
        <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">101</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">sales:</span>
                      <span className="productInfoValue">3400</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">active:</span>
                      <span className="productInfoValue">yes</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">in stock:</span>
                      <span className="productInfoValue">no</span>
                  </div>
              </div>
          </div>
      </div>
   <div className="productBottom">
     <form className="productForm">
        <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="i-phone"/>
            <label>In Stock</label>
            <select name="inStock" id="idStock">
                <option value="yes">Yes</option>
                <option value="yes">no</option>
            </select>
            
            <label>Active</label>
            <select name="active" id="active">
                <option value="yes">Yes</option>
                <option value="yes">no</option>
            </select>
            

        </div>
        <div className="productFormRight">
            <div className="productUpload">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYvD6_K7foxlKDlviAaPCx-RX8eY_8862y9g&usqp=CAU" alt=""  className="productUploadImg"/>
                 <label htmlFor="file">
                    <FileUploadIcon/>
                 </label>
                 <input type="file" id="file" style={{display:"none"}} />
            </div>
            <button className="productButton">Update</button>
        </div>
     </form>
    </div>
   </div>
   
  );
}

export default Product;

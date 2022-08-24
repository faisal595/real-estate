import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Table.css";
const Table = () => {
  const [allPost, setAllPost] = useState([]);
  const[searchTerm,setsearchTerm]=useState("");
  //
  
 //
  useEffect(() => {
    fetch("http://localhost:3003/posts")
      .then((res) => {
        return res.json();
      })
      .then((postData) => {
        // console.log(postData)
        setAllPost(postData);
        // console.log(postData[0].postImage)
      });
  }, []);
  return (
    <>
    <div className="a2">
    <input placeholder="Property" className="PPPID" onChange={(e)=>{
      setsearchTerm(e.target.value);
    }}></input>
              <img src="search2.png" className="i1"></img>
              <a href="/p1">
                <button className="btn3">Add property</button>
              </a>
              </div>
              <div className="body">
              <table className="Table">
                <tr className="inside table">
                  <td className="cell1">PPP ID</td>
                  <td className="cell1">Image</td>
                  <td className="cell1">Property</td>
                  <td className="cell1">contact</td>
                  <td className="cell1">Area</td>
                  <td className="cell1">views</td>
                  <td className="cell1">status</td>
                  <td className="cell1">Days left</td>
                  <td className="cell1">Action</td>
                </tr>
              </table>
            </div>
    <div>
    {allPost.filter((val)=>{
        if(searchTerm===""){
          return val;
        }else{
           return val.PropertyType.toLowerCase().includes(searchTerm.toLowerCase()) 

        }
      })
      .map((ele) => {
        return (
            <div className="body">
              <table className="Table">
                <tr className="inside table">
                  <td className="cell">{parseInt(Math.random() * 10000)}</td>
                  <td className="cell"><img alt="img" className="i4" src={ele.postImage}></img></td>
                  <td className="cell">{ele.PropertyType}</td>
                  <td className="cell">{ele.mobile}</td>
                  <td className="cell">{ele.Area}</td>
                  <td className="cell">{ele.Facing}</td>
                  <td className="cell">{ele.Ownership}</td>
                  <td className="cell">{parseInt(Math.random() * 100)}</td>
                  <td className="cell"><img src="eye.png" alt="img" className="i3"></img>
                                      <img src="pencil.jpeg" alt="img" className="i3"></img>
                                      </td>
                </tr>
              </table>
            </div>
        );
      })}
    </div>
    </>
  );
};

export default Table;
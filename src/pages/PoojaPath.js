import React, { useEffect, useState } from "react";

// Core components
import HeaderBreadcrumb from "../components/BreadCrumb";
import WrapContainer from "../components/container";

// APi
import Dataservices from "../services/requestApi";

const PoojaPath = (props) => {
  const [, setProduct] = useState([]);
  const [mounted, setMounted] = useState(true);
  const token = sessionStorage.getItem("Authtoken");
  useEffect(() => {
    const getData = async (e) => {
      try {
        if (token) {
          const productRes = await Dataservices.GetCartAll();
          if (mounted) {
            setProduct(productRes.data.data);
          }
        }
      } catch (e) {
        console.log(e);
      }
    };
    getData();
    return () => {
      getData();
      setMounted(false);
    };
  }, [mounted, token]);
  return (
    <WrapContainer>
    <HeaderBreadcrumb title="PoojaPath" />
    <div className="table" style={{display: "flex",
    justifyContent: "center"}}>
      <div className="tableinner">
      <table>
  <thead className="tablehead">
    <tr>
      <th> S.No</th>
      <th> Name</th>
      <th> PoojaPath Pdf</th>
      <th> Downlode/view</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Ajay</td>
      <td>pdf name</td>
      <td><button className="btn btn-success p-1">Downlode</button><a href="/books/a-great-book.pdf" target="_blank" className="m-2"><button className="btn btn-danger p-1">View</button></a></td>
    </tr>
    <tr>
      <td>1</td>
      <td>Ajay</td>
      <td>pdf name</td>
      <td><button className="btn btn-success p-1">Downlode</button><a href="/books/a-great-book.pdf" target="_blank" className="m-2"><button className="btn btn-danger p-1">View</button></a></td>
    </tr>
    <tr>
      <td>1</td>
      <td>Ajay</td>
      <td>pdf name</td>
      <td><button className="btn btn-success p-1">Downlode</button><a href="/books/a-great-book.pdf" target="_blank" className="m-2"><button className="btn btn-danger p-1">View</button></a></td>
    </tr>
    <tr>
      <td>1</td>
      <td>Ajay</td>
      <td>pdf name</td>
      <td><button className="btn btn-success p-1">Downlode</button><a href="/books/a-great-book.pdf" target="_blank" className="m-2"><button className="btn btn-danger p-1">View</button></a></td>
    </tr>
  </tbody>
  </table>
  </div>
    </div>
  </WrapContainer>
  );
};
export default PoojaPath;
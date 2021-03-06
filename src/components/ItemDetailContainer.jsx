import React, { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [descriptionFetch, setdescriptionFetch] = useState([]);
  const [capacitacionesFetch, setCapacitacionesFetch] = useState([]);
  const { iditem } = useParams();

  // const [buttonClicked, setButtonClicked] = useState(false);
  // const handleButtonClick = () => {
  //   setButtonClicked(!buttonClicked);
  // };

  useEffect(() => {
    setTimeout(() => {
      fetch("../api.json")
        .then((res) => res.json())
        .then((data) =>
          setdescriptionFetch(data.filter((i) => i.id === iditem))
        );
    }, 1000);
  }, [iditem]);

  /* useEffect(() => {
    setIsLoading(true)
    const db = getFirestore();

    const capacitacionesRef = collection(db, "capacitaciones");
    getDocs(capacitacionesRef).then((snapshot) => {
      setCapacitacionesFetch(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

    const q = query(collection(db, "capacitaciones"), where("id", "==", 1));
    getDocs(q).then((snapshot) => {
      setCapacitacionesFetch(snapshot.docs.map((doc) => doc.data()));
    });
  }, []); */

  return (
    <div className="itemDetailContainer">
      <div>
        {descriptionFetch.length !== 0 
        ? <ItemDetail
          detail={descriptionFetch[0]}/>
        : <h4>Cargando...</h4>}
      </div>
    </div>
  );
}

export default ItemDetailContainer;

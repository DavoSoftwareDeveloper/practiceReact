import { useEffect, useState } from "react";
import "./PromiseComponent.css";

function PromiseComponent() {
  const [data, setData] = useState(null);
  const [errorValues, setErrorValues] = useState([]);

  useEffect(() => {

    function esperar(tiempo) {
      return new Promise((resolve, reject) => {
        if (tiempo > 4000) {
          const err = new Error(`demasiado tiempo para la promesa ${tiempo}`);
          reject(err);
        }
        setTimeout(() => {
          resolve(`Resuelta después de ${tiempo} ms`);
        }, tiempo);
      });
    }

    const promesas = [
      esperar(2000),
      esperar(1000),
      esperar(3000),
      esperar(5000),
      esperar(7000)
    ];

    Promise.allSettled(promesas)
      .then((results) => {

        const resolvedData = results
          .filter((result) => result.status === "fulfilled")
          .map((result) => result.value);
        setData(resolvedData);

        const rejectedPromises = results.filter((result) => result.status === "rejected");
        console.log(rejectedPromises)
        if (rejectedPromises.length > 0) {
          const errorValues = rejectedPromises.map((promise) => {
            return promise.reason.message.match(/\d+/);
          });
          setErrorValues(errorValues);
        } 
      })
      .catch((error) => {
        console.error("Hubo un error:", error);
      });
  }, []);

  return (
    <>
    <h1>Promises</h1>
    <div>
      {data ? (
        data.map((item, index) => <div key={index}>{item}</div>)
        ) : (
          <div>Cargando...</div>
          )}
      {errorValues.map((er, index) => (
        <div style={{color: "red", fontSize: "small"}} key={index}>{`Se ha rechazado la promesa ${er}`}</div>
        ))}
    </div>
    </>
  );
}

export default PromiseComponent;

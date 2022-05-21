import { client } from "client";
import { Navbar } from "components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./PhoneDetails.module.scss";

export function PhoneDetails() {
  const { phoneId } = useParams();
  const [phone, setPhone] = useState(null);

  const getPhoneDetails = async () => {
    try {
      const { data } = await client.get(`/phones/${phoneId}`);
      console.log(data);
      setPhone(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPhoneDetails();
  }, [phoneId]);

  console.log("Let see data:", phone);
  return (
    <>
    <Navbar/>
      {phone ? (
        <div className={styles.PhoneDetails}>
          <h2>Phone Detail</h2>
          <img
            src={require(`/images/${phone.imageFileName}`)}
            alt={phone.name}
          />
          <h3>Name:</h3>
          <p>{phone.name}</p>
          <h3>Manufacturer:</h3>
          <p>{phone.manufacturer}</p>
          <h3>Description:</h3>
          <p>{phone.description}</p>
          <h3>Color:</h3>
          <p>{phone.color}</p>
          <h3>Price:</h3>
          <p>${phone.price}</p>
          <h3>Screen:</h3>
          <p>{phone.screen}</p>
          <h3>Processor:</h3>
          <p>{phone.processor}</p>
          <h3>Ram:</h3>
          <p>{phone.ram}</p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

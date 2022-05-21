import { Col, Row } from "antd";
import { Spinner } from "components";
import { PhoneContext } from "context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./PhoneList.module.scss";
import { useNavigate } from "react-router-dom";

export function PhoneList() {
  const { phones, loading } = useContext(PhoneContext);
  return (
    <div>
      <Row>
        <Col>
          <h1>Phone List</h1>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <div className={styles.phoneContainer}>
            {loading ? (
              <Spinner />
            ) : (
              <div className={styles.phones}>
                {phones.map((phone) => (
                  <li key={phone.id} className={styles.phone}>
                    <img
                      src={require(`/images/${phone.imageFileName}`)}
                      alt={phone.name}
                    />
                    <Link to={`/phoneDetails/${phone._id}`}>{phone.name}</Link>
                  </li>
                ))}
              </div>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}

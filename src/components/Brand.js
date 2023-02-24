import brand from "../img/logobloom.jpg";

const styles = {
  img: {
    width: "60%",
  },
};

const Brand = () => {
  return (
    <img style={styles.img} src={brand} alt="bloom logo" title="bloom tienda" />
  );
};

export default Brand;

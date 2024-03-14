import User from "./User";
import Layout2 from "./layout2";
import productData from "./content";

function User_Controller() {
  return (
    <Layout2>
      <div className="parent">
        {productData.map((contents) => (
          <User
            key={contents.id}
            image={contents.image}
            name={contents.name}
            rating={contents.rating}
            email={contents.email}
          />
        ))}
      </div>
    </Layout2>
  );
}

export default User_Controller;

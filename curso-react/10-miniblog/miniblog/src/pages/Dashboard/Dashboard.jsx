// css
import styles from "./Dashboard.module.css";

// route
import { Link } from "react-router-dom";

// hooks
import { useAuthValue } from "../../context/AuthContext";
import { useFecthDocuments } from "../../hooks/useFetchDocuments";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  // posts do usuário
  const {
    documents: posts,
    loading,
    error,
  } = useFecthDocuments("posts", null, uid);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create" className="btn">
            Criar primeiro post
          </Link>
        </div>
      ) : (
        <div>
          <p>Tem posts!</p>
        </div>
      )}
      {posts && posts.map((post) => (
        <div>
          <h3>{post.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;

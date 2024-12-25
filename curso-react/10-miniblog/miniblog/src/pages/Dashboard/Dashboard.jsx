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

  const deleteDocument = (id) => {};

  if (loading) {
    return;
  }

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
        <>
          <div>
            <span>Título</span>
            <span>Ações</span>
          </div>

          {posts &&
            posts.map((post) => (
              <div key={post.id}>
                <p>{post.title}</p>
                <div>
                  <Link to={`/posts/${post.id}`} className="btn btnOutline">
                    Ver
                  </Link>
                  <Link
                    to={`/posts/edit/${post.id}`}
                    className="btn btnOutline"
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => deleteDocument(post.id)}
                    className="btn btnOutline btnDanger"
                  >
                    Excluir
                  </button>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default Dashboard;

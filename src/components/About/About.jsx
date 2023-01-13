import { Link, useNavigate } from 'react-router-dom';

export default function AboutPage() {
  const navigate = useNavigate();

  const goAfter5 = () => {
    setTimeout(() => {
      navigate('/');
    }, 5000);
  };

  return (
    <div className="head">
      <h1>Hello Page</h1>
      <Link to="/">Go Back</Link>
      <button onClick={goAfter5} type="button">
        go after 5
      </button>
    </div>
  );
}

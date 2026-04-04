import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const SignupPage = ({ onSwitch }) => {
  const { signUp } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { error } = await signUp(email, password);
    if (error) setError(error.message);
    else setMessage('Account created! You can now sign in.');
    setLoading(false);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create account</h2>
        {error && <p className="error">{error}</p>}
        {message && <p className="success">{message}</p>}
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" value={email}
            onChange={e => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password (min 6 chars)" value={password}
            onChange={e => setPassword(e.target.value)} required />
          <button type="submit" disabled={loading}>
            {loading ? 'Creating account...' : 'Sign up'}
          </button>
        </form>
        <p>Have an account? <span className="link" onClick={onSwitch}>Sign in</span></p>
      </div>
    </div>
  );
};

export default SignupPage;

import { supabase } from '../utils/supabaseClient';
import { useState } from 'react';

const AuthPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    await supabase.auth.signUp({ email, password });
  };

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({ email, password });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Authentication</h1>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="mb-2 p-2 border" />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="mb-2 p-2 border" />
      <button onClick={handleSignUp} className="mr-2">Sign Up</button>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default AuthPage;
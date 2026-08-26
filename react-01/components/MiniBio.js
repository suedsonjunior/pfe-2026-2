import Profile from './Profile';

export default function MiniBio() {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '12px', maxWidth: '300px' }}>
      {/* Exibe o componente Profile */}
      <Profile /> 
      
      {/* Exibe a sua frase de apresentação */}
      <p style={{ textAlign: 'center', marginTop: '12px' }}>
        Estudante de Sistemas para Internet na UNICAP, focado em desenvolvimento web.
      </p>
    </div>
  );
}
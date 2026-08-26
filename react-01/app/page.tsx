import MiniBio from '../components/MiniBio';

export default function Home() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '40px' }}>
      <h1>Mini Bio</h1>
      <MiniBio />
    </main>
  );
}
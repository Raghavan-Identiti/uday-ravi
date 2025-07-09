'use client';

export default function GlobalError({ error, reset }) {
  console.error('Global error caught:', error);

  return (
    <div style={{ padding: 40, textAlign: 'center' }}>
      <h1>Something went wrong 😥</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}

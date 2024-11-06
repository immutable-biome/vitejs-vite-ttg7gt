function useDiv() {
  return <div>moocow</div>;
}

function UseDiv() {
  return <div css={{ background: 'gold' }}>moocow</div>;
}

export function App() {
  const content = useDiv();
  return (
    <>
      {useDiv()}
      {/* ^ the "bad" way */}
      {content}
      {/* ^ the "good" way */}
      <UseDiv />
      {/* ^ the "best" way (unless ur dealing with encapsulation issues) */}
    </>
  );
}

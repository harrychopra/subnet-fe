import { useState } from 'react';
import './VoteControls.css';

export default function VoteControls({ id, votes, voteHandler }) {
  const [state, setState] = useState({
    voteCount: votes,
    voteChange: 0,
  });

  const handleClick = e => {
    const voteChange = e.target.classList.contains('inc') ? 1 : -1;

    setState({
      voteChange,
      voteCount: state.voteCount + voteChange,
    });

    (async () => {
      try {
        const newVotes = await voteHandler(id, voteChange);
        // "state" var captured is stale in this IIFE, so we let react call setState with new state
        setState(current => ({
          ...current,
          voteCount: newVotes,
        }));
      } catch (error) {
        // State stale, so fine
        setState({
          ...state,
        });
        console.error(error);
      }
    })();
  };

  const { voteChange, voteCount } = state;

  return (
    <div className="vote-controls">
      <span
        className={voteChange > 0 ? 'inc voted' : 'inc'}
        onClick={handleClick}>
        🖒
      </span>
      <span className="vote-count">{voteCount}</span>
      <span
        className={voteChange < 0 ? 'dec voted' : 'dec'}
        onClick={handleClick}>
        🖓
      </span>
    </div>
  );
}

import React, { useState } from 'react';

const reactions = [
  { emoji: '👍', label: 'Like' },
  { emoji: '❤️', label: 'Love' },
  { emoji: '😡', label: 'Angry' },
  { emoji: '😢', label: 'Sad' },
];

const ReactionBar = () => {
  const [selected, setSelected] = useState(null);
  return (
    <div style={{ display: 'flex', gap: '10px', marginTop: '10px', background: '#0a1733', padding: '8px', borderRadius: '8px' }}>
      {reactions.map((r, index) => (
        <button
          key={index}
          style={{
            fontSize: '22px',
            opacity: selected === index ? 1 : 0.5,
            transform: selected === index ? 'scale(1.3)' : 'scale(1)',
            transition: '0.2s',
            background: selected === index ? '#ffeb3b' : '#102040',
            color: selected === index ? '#102040' : '#bbdefb',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            boxShadow: selected === index ? '0 0 5px #ffeb3b' : 'none',
          }}
          onClick={() => setSelected(selected === index ? null : index)}
        >
          {r.emoji}
        </button>
      ))}
    </div>
  );
};

export default ReactionBar;

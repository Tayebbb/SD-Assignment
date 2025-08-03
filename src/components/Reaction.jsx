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
    <div className="responsive-margin bg-dark p-2 flex gap-2 flex-wrap" style={{ borderRadius: '8px' }}>
      {reactions.map((r, index) => (
        <button
          key={index}
          className="transition-all"
          style={{
            fontSize: 'clamp(18px, 4vw, 22px)',
            opacity: selected === index ? 1 : 0.6,
            transform: selected === index ? 'scale(1.2)' : 'scale(1)',
            background: selected === index ? '#ffeb3b' : '#102040',
            color: selected === index ? '#102040' : '#bbdefb',
            border: 'none',
            borderRadius: '50%',
            width: 'clamp(36px, 8vw, 48px)',
            height: 'clamp(36px, 8vw, 48px)',
            cursor: 'pointer',
            boxShadow: selected === index ? '0 0 8px #ffeb3b' : 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => setSelected(selected === index ? null : index)}
          title={r.label}
        >
          {r.emoji}
        </button>
      ))}
    </div>
  );
};

export default ReactionBar;

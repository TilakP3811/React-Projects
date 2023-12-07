const State = ({ items }) => {
  if (!items.length) {
    return (
      <footer className="stats">
        <em> Start adding some items to your packing list </em>
      </footer>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everthing! Ready to go ✈️"
          : `💼 You have already ${numItems} items on your list, and you already
        packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
};

export default State;

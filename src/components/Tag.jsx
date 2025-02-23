import clsx from "clsx";
// rumus warna :
// - border = 500
// - bg = 200
// - text = 700

const Tag = ({ tag, color }) => {
  return (
    <div
      className={clsx(
        "px-2 border-2 rounded-2xl",
        `border-${color}-500`,
        `bg-${color}-200`
      )}
    >
      <p className={clsx("text-xs", `text-${color}-700`)}>{tag}</p>
    </div>
  );
};

export default Tag;

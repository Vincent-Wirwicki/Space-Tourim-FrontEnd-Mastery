const SubTitle = ({ text, num }: { text: string; num?: string }) => {
  return (
    <h2 className="text-preset-5" style={{ width: "100%" }}>
      {num && (
        <span
          style={{
            opacity: 0.2,
            paddingRight: "var(--spacing-300)",
          }}
        >
          {num}
        </span>
      )}
      {text}
    </h2>
  );
};

export default SubTitle;

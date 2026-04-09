export type SimpleButtonProps = {
  label: string;
  onClick?: () => void;
};

export const SimpleButton = ({ label, onClick }: SimpleButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 16px",
        backgroundColor: "#4CAF50",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
};
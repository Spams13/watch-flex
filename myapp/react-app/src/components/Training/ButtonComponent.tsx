interface Props {
  children: string;
  color?: `primary` | `danger` | `success`;
  onClick: () => void;
}

function MyButton({ children, onClick, color = "primary" }: Props) {
  return (
    <>
      <button
        type="button"
        style={{
          borderStyle: `none`,
          fontSize: `16px`,
          fontWeight: `400`,
          color: `white`,
          backgroundColor: `#0d6efd`,
          borderRadius: `5px`,
          margin: `0 0 0 25px`,
          padding: `6px 12px 6px 12px`,
        }}
        onClick={onClick}
      >
        {children}
      </button>
      <button
        type="button"
        className="btn btn-primary"
        style={{ marginLeft: `10px` }}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}
export default MyButton;

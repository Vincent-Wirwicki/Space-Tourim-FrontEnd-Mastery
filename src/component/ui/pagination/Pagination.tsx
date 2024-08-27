import styles from "./pagination.module.css";

type PaginationProps = {
  size: "small" | "large";
  num?: number;
  isActive: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const Pagination = ({ size, num, isActive, ...props }: PaginationProps) => {
  if (size === "small")
    return (
      <div
        className={styles.small}
        style={{
          backgroundColor: isActive ? "var(--white-0)" : "var(--gray-500)",
        }}
        {...props}
      />
    );
  if (size === "large")
    return (
      <div
        className={styles.large}
        style={{
          backgroundColor: isActive ? "var(--white-0)" : "unset",
          color: isActive ? "var(--blue-900)" : "var(--white-0)",
        }}
        {...props}
      >
        {num}
      </div>
    );
};

export default Pagination;

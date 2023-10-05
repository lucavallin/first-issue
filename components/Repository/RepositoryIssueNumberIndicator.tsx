type RepositoryIssueNumberIndicatorProps = {
  isIssueOpen: boolean;
  numberOfIssues: number;
};

export const RepositoryIssueNumberIndicator = ({
  isIssueOpen,
  numberOfIssues
}: RepositoryIssueNumberIndicatorProps) => {
  return (
    <span
      className={`ml-2 hidden rounded-full border min-w-fit h-fit p-2 text-sm font-semibold md:inline ${isIssueOpen ? "border-transparent bg-primary text-dark-400" : "text-light-200"
        }`}
    >
      {numberOfIssues}
      {numberOfIssues >= 10 ? "+" : ""} issue
      {numberOfIssues > 1 ? "s" : ""}
    </span>
  );
};

import { Repository } from "../../types";

type RepositoryLinkTitleProps = {
  isIssueOpen: boolean;
  repositoryName: Repository["name"];
  repositoryOwner: Repository["owner"];
  repositoryUrl: Repository["url"];
};

export const RepositoryLinkTitle = ({
  isIssueOpen,
  repositoryName,
  repositoryOwner,
  repositoryUrl
}: RepositoryLinkTitleProps) => {
  return (
    <a
      className={`text-xl font-bold transition-all group-hover:text-primary ${
        isIssueOpen ? "w-[50%] truncate text-primary" : ""
      }`}
      href={repositoryUrl}
      rel="noopener noreferrer"
      target="_blank"
      title={`Open ${repositoryOwner}/${repositoryName} on GitHub`}
    >
      {repositoryOwner} / {repositoryName}
    </a>
  );
};

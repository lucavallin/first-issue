import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useMemo, useState } from "react";
import { CountableLanguage } from "../../types";
import { SectionTitle } from "../SectionTitle";
import ActiveTagButton from "./ActiveTagButton";
import { PickerItem } from "./PickerItem";

type LanguagePickerProps = {
  activeTagId: string | string[] | undefined;
  languages: CountableLanguage[];
  onLanguagePage: boolean;
};

export const LanguagePicker = ({
  activeTagId,
  languages,
  onLanguagePage,
}: LanguagePickerProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  // Automatically collapse the sidebar after redirection
  useEffect(() => {
    setIsCollapsed(true);
  }, [onLanguagePage, activeTagId]);

  // Memoize the list of languages to prevent unnecessary re-rendering
  const memoizedLanguages = useMemo(() => languages, [languages]);

  // Toggle the collapsible sidebar
  const toggleCollapsible = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  return (
    <div className="pt-6">
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        onClick={toggleCollapsible}
        className={`flex cursor-pointer ${isCollapsed ? "sm:flex" : ""}`}
      >
        <SectionTitle className="mb-2" text="Browse by Language" />
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`mx-2 mt-[3px] text-silver-500 transition-transform ${
            isCollapsed ? "rotate-0" : "rotate-180"
          } duration-300 ease-in-out md:hidden`}
        />

        {/* Display the active tag button when a language is selected, and the language picker is collapsed. */}
        {activeTagId && isCollapsed ? (
          <ActiveTagButton data={activeTagId} />
        ) : null}
      </div>
      <div
        className={`-mx-1 overflow-hidden duration-300 ease-in-out ${
          isCollapsed ? "max-h-0" : "max-h-96"
        } ${isCollapsed ? "sm:max-h-full" : ""}`}
      >
        {memoizedLanguages.map((language) => (
          <PickerItem
            className={`group m-1 inline-block rounded-sm border px-2 py-1 ${
              onLanguagePage && language.id === activeTagId
                ? "active-pill"
                : "border-silver-100 transition-all hover:border-primary hover:text-primary"
            }`}
            href={`/language/${language.id}`}
            key={language.id}
            text={language.display}
            totalOccurrences={language.count}
          />
        ))}
      </div>
    </div>
  );
};

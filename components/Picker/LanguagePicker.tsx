import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { CountableLanguage } from "../../types";
import { SectionTitle } from "../SectionTitle";
import ActiveTagButton from "./ActiveTagButton";
import { PickerItem } from "./PickerItem";
type LanguagePickerProps = {
  activeTagId: string | string[] | undefined;
  languages: CountableLanguage[];
  onLanguagePage: boolean;
};

export const LanguagePicker = ({ activeTagId, languages, onLanguagePage }: LanguagePickerProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  // Automatically collapse the sidebar after redirection
  useEffect(() => {
    setIsCollapsed(true);
  }, [onLanguagePage, activeTagId]);

  // Toggle the collapsible sidebar
  const toggleCollapsible = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="pt-6">
      <div
        onClick={toggleCollapsible}
        className={`flex cursor-pointer ${isCollapsed ? "sm:flex" : ""}`}
      >
        <SectionTitle text="Browse by Language" />
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`mx-2 mt-[3px] transform text-secondary transition-transform ${
            isCollapsed ? "rotate-0" : "rotate-180"
          } animate-fade-in duration-300 ease-in-out md:hidden`}
        />

        {/* Display the active tag button when a language is selected, and the language picker is collapsed. */}
        {activeTagId && isCollapsed ? <ActiveTagButton data={activeTagId} /> : null}
      </div>
      <div
        className={`transition-max-height overflow-hidden duration-300 ease-in-out ${
          isCollapsed ? "max-h-0" : "max-h-96"
        } ${isCollapsed ? "sm:max-h-full" : ""}`}
      >
        {languages.map((language) => {
          return (
            <PickerItem
              className={`group mx-1 my-1 inline-block rounded-sm border px-2 py-1 text-sm ${
                onLanguagePage && language.id === activeTagId
                  ? "active-pill"
                  : "border-secondary transition-all hover:border-primary hover:text-primary"
              }`}
              href={`/language/${language.id}`}
              key={language.id}
              text={language.display}
              totalOccurrences={language.count}
            />
          );
        })}
      </div>
    </div>
  );
};

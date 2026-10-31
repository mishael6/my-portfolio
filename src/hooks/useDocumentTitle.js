import { useEffect } from "react";
import { site } from "../data/site";

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · ${site.shortName}` : site.shortName;
  }, [title]);
}

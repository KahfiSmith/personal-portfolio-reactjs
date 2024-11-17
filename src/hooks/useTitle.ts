import { useEffect, useState } from "react";

export function useTitle(text: string) {
  const [title] = useState<string>(text);

  useEffect(() => {
    document.title = title;
  }, [title]);
}

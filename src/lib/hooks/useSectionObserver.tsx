import { useEffect } from "react";
import { useRouter } from "next/navigation";

const useSectionObserver = (sections: string[]) => {
  const router = useRouter();

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const currentHash = window.location.hash;

          // Update the URL only if the section has changed
          if (currentHash !== `#${sectionId}`) {
            // Use history.replaceState to update the URL without triggering scroll behavior
            window.history.replaceState(null, "", `#${sectionId}`);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when half of the section is in view
    });

    sections.forEach((sectionId) => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          observer.unobserve(sectionElement);
        }
      });
    };
  }, [router, sections]);
};

export default useSectionObserver;

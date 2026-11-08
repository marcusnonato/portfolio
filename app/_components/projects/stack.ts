import { MainProjectProps } from "@/app/_types";

/** Stack única do projeto, na ordem em que aparece no estudo de caso. */
export const projectStack = (project: MainProjectProps) =>
  Array.from(
    new Set(project.caseStudy?.sections.flatMap((section) => section.stack)),
  );

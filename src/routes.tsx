export const toTasks = (): string => "/zadania";
export const toAuthor = (): string => "/author";

export const toTask = ({ id } = { id: ":id" }): string => `/zadania${id}`;
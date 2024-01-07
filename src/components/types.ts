export type Todo = {
    id: number;
    text: string;
    completed: boolean;
}

export type TodoState = {
    todos: Todo[],
    filterSort:string,
    filterVisibility:string,
}
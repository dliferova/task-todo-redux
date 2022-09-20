export type Subtask = {
  id: string,
  color: string,
  description: string,
  picked: string,
  title: string,
  uniqueName: string,
}

export type Task = {
  id: string
  title: string,
  uniqueName: string,
  picked: string,
  color: string,
  description?: string,
  children?: Subtask[]
}

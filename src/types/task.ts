export type Task = {
  id: string
  title: string,
  uniqueName: string,
  type: string,
  color: string,
  description?: string,
  children: Task[] | null
}

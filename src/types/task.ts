export type Task = {
  id: string
  title: string,
  uniqueName: string,
  picked: string,
  color: string,
  description?: string,
  children: Task[] | null
}

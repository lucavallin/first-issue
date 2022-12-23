// Nullable generic for nullable fields
type Nullable<T> = T | null

// Describes a Tag, which is a programming language
export interface Tag {
  count: number
  id: string
}

// Describes a Repository, which is a GitHub repository
export interface Repository {
  description: Nullable<string>
  id: number
  issues: Issue[]
  language: Nullable<string>
  last_modified: string
  name: string
  owner: string
  stars: number
  stars_display: string
  url: string
  tag: string
}

// Describes an Issue, which is a GitHub issue linked to a repository
export interface Issue {
  comments_count: number
  created_at: string
  number: number
  title: string
  url: string
}

// Describes the data that is retrieved from the GitHub API and used by the app
export interface AppData {
  repositories: Repository[]
  tags: Tag[]
}

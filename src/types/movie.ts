export interface Movie {
  id: string
  name: string
  score: string
}

export interface MovieList<T> {
  title: string
  list: Movie[] // Movie[]
}

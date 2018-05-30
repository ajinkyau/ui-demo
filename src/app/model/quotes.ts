import { Author } from "./author";

export interface Quote {
    id: String,
    shareCount: Number,
    likeCount: Number,
    viewCount: Number,
    topics: Array<String>,
    author: Author,
    quote: String
}
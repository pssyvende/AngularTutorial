export class Response {
    constructor(
        public error: string,
        public result: Result[]
    ) {}
}

export class Result {
    constructor(
        public anilist: {
            title: {
                english: string
            }
        },
        public image: string,
        public video: string,
        public episode: number,
        public from: number,
        public to: number,
        public similarity: number,
    ) {}
}
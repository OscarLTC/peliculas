const API = "https://api.themoviedb.org/3";

export function get(path) {
    return fetch(API + path, {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzNjMmM0YTU0ZjNhZDllOTU0NzQ2MDdiYWEwYzk2ZCIsInN1YiI6IjYyMjEyMWFjNDJiZjAxMDAxZDA1ZTdmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c65guegIP3XF0WFHcMsFVSbnnNbIHxCaNPSj6iZqdUg",
            "Content-Type": "application/json;charset=utf-8",
        },
    }).then((result) => result.json())
}
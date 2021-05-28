import {displayUserIntent} from "./register";
import {isAlreadyAdded} from "./readinglist";


test("displayUserIntent should return login or register depending on the userIntent", () => {
    const userIntent = "Register"
    const buttonText = displayUserIntent(userIntent)
    expect(buttonText).toBe("Or Login")
})

test("displayUserIntent should return register depending on the userIntent", () => {
    const userIntent = "Login"
    const buttonText = displayUserIntent(userIntent)
    expect(buttonText).toBe("Or Register")
})

test("isAlreadyAdded should return true if a book is already on readinglist", () => {
    const title = 'James and the Giant Peach'
    const readinglist = [
        {
            "author_name": [
                "Roald Dahl"
            ],
            "key": "/works/OL45809W",
            "cover_i": 8252454,
            "title": "James and the Giant Peach",
            "author_key": [
                "OL34184A"
            ]
        },
        {
            "title": "Charlie and the Great Glass Elevator",
            "key": "/works/OL45793W",
            "author_key": [
                "OL34184A"
            ],
            "author_name": [
                "Roald Dahl"
            ],
            "cover_i": 7893583
        }]
    const alreadyAdded = isAlreadyAdded(title, readinglist)
    expect(alreadyAdded).toBe(true)
})

test("isAlreadyAdded should return false if a book is not on readinglist", () => {
    const title = 'Mathilda'
    const readinglist = [
        {
            "author_name": [
                "Roald Dahl"
            ],
            "key": "/works/OL45809W",
            "cover_i": 8252454,
            "title": "James and the Giant Peach",
            "author_key": [
                "OL34184A"
            ]
        },
        {
            "title": "Charlie and the Great Glass Elevator",
            "key": "/works/OL45793W",
            "author_key": [
                "OL34184A"
            ],
            "author_name": [
                "Roald Dahl"
            ],
            "cover_i": 7893583
        }]
    const alreadyAdded = isAlreadyAdded(title, readinglist)
    expect(alreadyAdded).toBe(false)
})



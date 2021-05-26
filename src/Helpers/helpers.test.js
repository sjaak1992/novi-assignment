import {displayUserIntent} from "./register";


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
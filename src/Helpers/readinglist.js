


export function isAlreadyAdded(title, readingList){
    const alreadyAdded = readingList.some((book) => book.title === title);
    return alreadyAdded
}

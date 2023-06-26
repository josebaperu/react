describe('arrayTests', () => {

    const arr = [
        {name: "jose",age:12,country:"peru"},
        {name: "luis",age:34,country:"ecuador"},
        {name: "paco",age:56,country:"chile"}
    ];
    test('filter', () => {
        const result = arr.filter( e => {
            return e.name.includes("o");
        });
        expect(result.length).toEqual(2);
        // https://www.w3schools.com/jsref/jsref_filter.asp
    });
});
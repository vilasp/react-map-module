
import Map from "./map"

// Map.__Rewire__("createMapLayerFromMetadata", () => 4);

it('sums numbers', () => {

    let add = (a,b) => {return a+b};

    expect(add(1, 2)).toEqual(3);
    expect(add(2, 2)).toEqual(4);
});
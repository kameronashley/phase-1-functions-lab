function distanceFromHqInBlocks(pickup){
    if (pickup >= 42) {
        return pickup - 42}
    if (pickup < 42) {
        return 42 - pickup};
}

function distanceFromHqInFeet(pickup) {
    if (pickup >= 42) {
        return (pickup - 42)*264};
    if (pickup <42) {
        return (42 - pickup)*264};
}

function distanceTravelledInFeet(start,destination) {
    if (start >= destination) {
        return (start-destination)*264};
    if (start < destination) {
        return (destination-start)*264};

}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start,destination)<=400) {
        return 0};
    if (distanceTravelledInFeet(start,destination)<2000) {
        return (distanceTravelledInFeet(start,destination)-400)*0.02};
    if (distanceTravelledInFeet(start,destination)<2500) {
        return 25};
    if (distanceTravelledInFeet(start,destination)>2500) {
        return 'cannot travel that far'};
}
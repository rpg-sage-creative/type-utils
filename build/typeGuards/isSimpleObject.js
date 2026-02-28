export function isSimpleObject(object) {
    return object ? object.constructor === Object : false;
}

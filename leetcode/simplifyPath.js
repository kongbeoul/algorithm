/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const filter = path.split("/").filter(v => !!v && v !== ".");
    const stack = [];

    for(const f of filter) {
        if(f !== "..") {
            stack.push(f)
        } else {
            stack.pop();
        }
    }

    return "/" + stack.join("/");
};
console.log(simplifyPath("/home/"))
console.log(simplifyPath("/../"))
console.log(simplifyPath("/home//foo/"))
console.log(simplifyPath("/a/./b/../../c/"))
console.log(simplifyPath("/home/foo/.ssh/../.ssh2/authorized_keys/"))
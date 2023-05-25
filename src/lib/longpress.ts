// Custom events
// can then bind on:longpress to a func after using use:longpress

// Node is the element that the directive is bound to
// Duration is a parameter, could be an object?

interface args {
    duration: number;
}
export function longpress(node, { duration = 500 }: args) {
    let timer;

    const handleMousedown = () => {
        timer = setTimeout(() => {
            node.dispatchEvent(new CustomEvent("longpress"));
        }, duration);
    };

    const handleMouseup = () => {
        clearTimeout(timer);
    };

    node.addEventListener("mousedown", handleMousedown);
    node.addEventListener("mouseup", handleMouseup);

    return {
        update(args: args) {
            duration = args.duration;
        },
        destroy() {
            clearTimeout(timer);
            node.removeEventListener("mousedown", handleMousedown);
            node.removeEventListener("mouseup", handleMouseup);
        },
    };
}

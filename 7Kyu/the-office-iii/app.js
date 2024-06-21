function broken(x) {
    return x.split('').map(a => a == "0" ? "1" : "0").join('');
}

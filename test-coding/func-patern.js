function generatePattern() {
    const pattern = [
        "\t\t@",
        "\t#\t#\t#",
        "@\t@\t@\t@\t@",
        "\t#\t#\t#",
        "\t\t@"
    ];

    for (let i = 0; i < pattern.length; i++) {
        console.log(pattern[i]);
    }
}

generatePattern();

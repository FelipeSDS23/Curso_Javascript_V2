global.console.log("teste")
console.log(__filename)
console.log(__dirname)
console.log(process.argv)

// const [,,firstname, lastname] = process.argv
// console.log(`o nome é ${firstname} ${lastname}`)

const getByFlag= flag => {
    const indexOfFlag = process.argv.indexOf(flag)
    return process.argv[indexOfFlag + 1]
}

const firstName = getByFlag("--firstname")
const lastName = getByFlag("--lastname")

console.log(`o nome é ${firstName} ${lastName}`)

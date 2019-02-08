let stdin = process.openStdin()
console.log('(1) find Circle')
console.log('(2) find Squard')
console.log('Select your choice : ')
stdin.addListener("data", (choice) => {
    if (choice > 0) {
        console.log('Enter your r: ')
    }
    stdin.addListener("data", (area) => {
        let sum
        if (choice == 1) {
            if (area > 0) {
                sum = ((2 *3.14)*area*2)
                console.log('is ' + sum + 'cm')
            } else {
                console.log('please fill your area')
            }
        } else if (choice == 2) {
            if (area > 0) {
                sum = area * area
                console.log('is ' + sum + 'cm')
            } else {
                console.log('please fill your area')
            }
        }


        stdin.destroy()
    })

});
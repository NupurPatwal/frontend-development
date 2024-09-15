let months= prompt("Enter the months...");
switch (months) {
    case '1':
        console.log(`january, february, march`);
        break;
    case '2':
        console.log(`april, may, june`);
        break;
    case '3':
        console.log(`july, august, september.`);
        break;
    case '4':
        console.log(`october, november, december`);
        break;

    default:
        console.log(`Worng Quarter`);
        break;
}